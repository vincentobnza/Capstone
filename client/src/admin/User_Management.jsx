import React, { useState, useEffect } from "react";
import { Search, X, Trash2, Edit2 } from "lucide-react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";
import supabase from "../config/supabaseClient";
import { LoaderCircle } from "lucide-react";

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedUsername, setEditedUsername] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
    const subscription = supabase
      .channel("profiles")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "profiles" },
        handleRealTimeUpdates
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter(
        (user) =>
          user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.id.toString().includes(searchTerm)
      )
    );
  }, [searchTerm, users]);

  const fetchUsers = async () => {
    const { data, error } = await supabase.from("profiles").select("*");
    if (error) {
      toast.error("Failed to fetch users");
    } else {
      setUsers(data);
    }
  };

  const handleRealTimeUpdates = (payload) => {
    if (payload.eventType === "INSERT") {
      setUsers((prevUsers) => [...prevUsers, payload.new]);
    } else if (payload.eventType === "UPDATE") {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === payload.new.id ? payload.new : user
        )
      );
    } else if (payload.eventType === "DELETE") {
      setUsers((prevUsers) =>
        prevUsers.filter((user) => user.id !== payload.old.id)
      );
    }
  };

  const handleRowClick = (user) => {
    setSelectedUser(user);
    setIsOpen(true);
  };

  const handleDelete = async () => {
    setLoading(true);

    const { error } = await supabase
      .from("profiles")
      .delete()
      .eq("id", selectedUser.id);

    if (error) {
      setLoading(false);
      toast.error("Failed to delete user");
    } else {
      setTimeout(() => {
        fetchUsers();
        setLoading(false);
        toast.success("User deleted successfully", {
          style: {
            borderRadius: "5px",
            background: "#fff",
            color: "#121212",
            fontSize: "12px",
          },
        });
        setIsOpen(false);
        setIsDeleteModalOpen(false);
      }, 1000);
    }
  };

  const handleEdit = async () => {
    const { error } = await supabase
      .from("profiles")
      .update({ username: editedUsername })
      .eq("id", selectedUser.id);

    if (error) {
      toast.error("Failed to update user");
    } else {
      toast.success("User updated successfully", {
        style: {
          borderRadius: "5px",
          background: "#fff",
          color: "#121212",
          fontSize: "12px",
        },
      });
      setIsOpen(false);
      setIsEditModalOpen(false);
      setSelectedUser({ ...selectedUser, username: editedUsername });
    }
  };

  return (
    <div className="space-y-6 relative w-full h-full">
      <Toaster />
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <UsersTable users={filteredUsers} handleRowClick={handleRowClick} />
      <UserDrawer
        open={isOpen}
        setIsOpen={setIsOpen}
        user={selectedUser}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        setEditedUsername={setEditedUsername}
      />
      <DeleteConfirmationModal
        loading={loading}
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
      />
      <EditUserModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onConfirm={handleEdit}
        username={editedUsername}
        setUsername={setEditedUsername}
      />
    </div>
  );
}

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <h1 className="text-2xl font-semibold">Users</h1>
      <p>View and manage CodeScript Users</p>
      <div className="mt-8 flex items-center gap-2">
        <div className="relative w-[350px]">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="size-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:border-transparent shadow hover:border-zinc-300"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

const UsersTable = ({ users, handleRowClick }) => {
  return (
    <div className="w-full">
      <Table aria-label="Users table" className="bg-white">
        <TableHeader>
          <TableColumn>User ID</TableColumn>
          <TableColumn>Username</TableColumn>
          <TableColumn>Last Signed In</TableColumn>
          <TableColumn className="text-center">Current Points</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No rows to display."}>
          {users.map((user) => (
            <TableRow
              key={user.id}
              onClick={() => handleRowClick(user)}
              className="cursor-pointer"
            >
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>
                {new Date(user.last_sign_in_at).toLocaleString()}
              </TableCell>
              <TableCell>
                <div className="text-center">{user.current_points}</div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const UserDrawer = ({
  open,
  setIsOpen,
  user,
  setIsDeleteModalOpen,
  setIsEditModalOpen,
  setEditedUsername,
}) => {
  if (!user) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.2 }}
          className="fixed top-5 right-0 h-screen w-80 bg-white border-l border-zinc-300 overflow-y-auto z-10"
        >
          <div className="w-full space-y-4">
            <div className="w-full h-22 border-b border-zinc-200 p-4 grid place-items-center">
              <div className="w-full flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <h1 className="text-md font-bold text-zinc-700">
                    User Details
                  </h1>
                </div>
                <div className="size-8 rounded-lg border border-zinc-200 grid place-items-center">
                  <X
                    size={18}
                    onClick={() => setIsOpen(false)}
                    className="text-zinc-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="id" className="text-xs font-bold text-zinc-400">
                  User ID
                </label>
                <h1 className="text-sm font-medium">{user.id}</h1>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="username"
                  className="text-xs font-bold text-zinc-400"
                >
                  Username
                </label>
                <h1 className="text-sm font-medium">{user.username}</h1>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="last_signed_in_at"
                  className="text-xs font-bold text-zinc-400"
                >
                  Last Signed In At
                </label>
                <h1 className="text-sm font-medium">
                  {new Date(user.last_sign_in_at).toLocaleString()}
                </h1>
              </div>
              <div className="w-full flex justify-end">
                <button
                  className="px-3 py-2 border border-zinc-200 text-xs font-semibold"
                  onClick={() => {
                    setEditedUsername(user.username);
                    setIsEditModalOpen(true);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
            <div className="w-full border-t border-zinc-200 p-6 space-y-6">
              <div className="flex flex-col gap-2">
                <h1 className="text-md font-bold text-amber-600">
                  Danger Zone
                </h1>
                <p className="text-xs text-zinc-500 font-semibold">
                  Be cautious with the following features, as they are
                  irreversible.
                </p>
              </div>
              <div className="w-full flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h1 className="text-sm font-semibold">Delete User</h1>
                  <p className="text-xs text-zinc-500">
                    This user will no longer have access to the system
                  </p>
                </div>
                <button
                  className="w-full bg-red-50 text-red-600 flex items-center justify-center border border-red-300 gap-2 text-xs font-bold py-3 px-4"
                  onClick={() => setIsDeleteModalOpen(true)}
                >
                  Delete User
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm, loading }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} radius="none">
      <ModalContent>
        <ModalHeader className="border-b border-zinc-200">
          <h1>Confirm Deletion</h1>
        </ModalHeader>
        <ModalBody>
          <p className="text-sm  text-zinc-600">
            Are you sure you want to delete this user? This action cannot be
            undone.
          </p>
        </ModalBody>
        <ModalFooter className="border-t border-zinc-200">
          <div className="flex items-center gap-1">
            <button
              onClick={onClose}
              className="py-2 px-4 rounded  bg-zinc-200 text-[13px] font-medium"
            >
              No, Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex items-center gap-2 py-2 px-4 rounded  bg-red-500 text-[13px] font-medium text-white"
            >
              Delete User
              {loading && <LoaderCircle className="animate-spin" size={15} />}
            </button>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const EditUserModal = ({
  isOpen,
  onClose,
  onConfirm,
  username,
  setUsername,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} radius="none">
      <ModalContent>
        <ModalHeader>Edit User</ModalHeader>
        <ModalBody>
          <Input
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="default" onClick={onClose} radius="sm">
            Cancel
          </Button>
          <Button
            color="primary"
            onClick={onConfirm}
            radius="sm"
            className="bg-green-600"
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

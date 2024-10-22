import React, { useState, useEffect } from "react";
import useFetchAssessments from "@/api/assessmentsRequest";
import Loading from "@/components/loading";
import { MoveUpRight, Container, Search, Plus } from "lucide-react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import useCreateAssessment from "@/api/postAssessments";

export default function Assessments_Admin() {
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  return (
    <div className="space-y-6">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <AssessmentsList searchTerm={searchTerm} />
    </div>
  );
}

const Header = ({ searchTerm, setSearchTerm }) => {
  const { assessments, loading } = useFetchAssessments();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedAssessment, setSelectedAssessment] = useState(null);
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full flex justify-between">
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Assessments List</h1>
            <p className="text-sm font-semibold">
              View all assessments on the system.
            </p>
          </div>

          <div className="flex items-center gap-1">
            <div className="relative w-[350px]">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="size-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:border-transparent shadow shadow-zinc-100 hover:border-zinc-300 placeholder:text-sm"
                placeholder="Search assessments"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <button
              onClick={onOpen}
              className="py-[0.6rem] px-3 border border-zinc-200 dark:border-zinc-700 rounded-md hover:bg-zinc-50 text-sm font-semibold flex items-center gap-2 text-zinc-600 shadow shadow-zinc-100 outline-no"
            >
              <Plus size={16} />
              Create
            </button>

            <CreateAssessments
              isOpen={isOpen}
              onOpen={onOpen}
              onOpenChange={onOpenChange}
              assessment={assessments}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const AssessmentsList = ({ searchTerm }) => {
  const { assessments, loading } = useFetchAssessments();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedAssessment, setSelectedAssessment] = useState(null);

  // Filter assessments based on the search term
  const filteredAssessments = assessments.filter((assessment) =>
    assessment.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAssessment = (assessment) => {
    setSelectedAssessment(assessment); // Set the selected assessment
    onOpen(); // Open the modal
  };

  if (loading) {
    return <Loading title="Loading..." text="Preparing your content" />;
  }

  return (
    <div className="w-full grid md:grid-cols-4 gap-2">
      {filteredAssessments.map((assessment) => (
        <div
          onClick={() => handleAssessment(assessment)} // Pass the assessment object
          className="w-full h-[7.5rem] flex flex-col gap-2 p-4 border border-zinc-300 rounded-lg hover:bg-zinc-50 cursor-pointer relative"
          key={assessment.id}
        >
          <Container
            size={50}
            className="absolute right-2 bottom-2 text-zinc-200"
          />
          <div className="w-full flex justify-between">
            <h3 className="text-xs text-zinc-400 font-semibold">
              Assessment {assessment.id}{" "}
            </h3>

            <MoveUpRight size={12} />
          </div>
          <h1 className="text-md font-bold text-zinc-600">
            {assessment.title}
          </h1>
        </div>
      ))}

      <AssessmentsModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        assessment={selectedAssessment} // Pass the selected assessment
      />
    </div>
  );
};

const AssessmentsModal = ({ isOpen, onOpen, onOpenChange, assessment }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} radius="sm" size="xl">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 border-b border-zinc-200">
              Assessment View
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">{assessment?.title}</h1>
                <h1 className="text-sm">{assessment?.description}</h1>
                <p className="mt-4 text-xs font-semibold">Expected Output</p>

                <div className="mt-2 w-full p-5 bg-zinc-800 text-amber-500 font-bold rounded">
                  <h1 className="text-sm">{assessment?.expectedOutput}</h1>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <button
                className="px-4 h-10 bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-100 font-semibold rounded text-sm"
                onClick={onClose}
              >
                Close
              </button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

const CreateAssessments = ({ isOpen, onOpenChange }) => {
  const { createAssessment, loading, error } = useCreateAssessment();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [expectedOutput, setExpectedOutput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newAssessment = {
      title,
      description,
      expectedOutput,
    };

    const result = await createAssessment(newAssessment);

    if (result) {
      alert("Assessment created successfully!");
      setTitle("");
      setDescription("");
      setExpectedOutput("");
      onAssessmentCreated(result); // Call this function to update the parent component
      onOpenChange(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} radius="sm" size="xl">
      <ModalContent>
        {(onClose) => (
          <form onSubmit={handleSubmit}>
            <ModalHeader className="flex flex-col gap-1 border-b border-zinc-200">
              Create Assessment
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col gap-2">
                {/* Title Input */}
                <label htmlFor="title" className="text-md font-semibold">
                  Title
                </label>
                <input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter assessment title"
                  className="w-full p-4 border rounded-md text-sm"
                  required
                />

                {/* Description Input */}
                <label htmlFor="description" className="text-md font-semibold">
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter assessment description"
                  className="w-full p-4 border rounded-md text-sm"
                  required
                />

                {/* Expected Output Input */}
                <label
                  htmlFor="expectedOutput"
                  className="text-md font-semibold"
                >
                  Expected Output
                </label>
                <input
                  id="expectedOutput"
                  value={expectedOutput}
                  onChange={(e) => setExpectedOutput(e.target.value)}
                  placeholder="Enter expected output"
                  className="w-full p-4 border rounded-md text-sm"
                  required
                />
              </div>
            </ModalBody>

            <ModalFooter>
              {/* Cancel Button */}
              <button
                type="button"
                className="px-4 h-10 bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-100 font-semibold rounded text-sm"
                onClick={onClose}
              >
                Cancel
              </button>

              {/* Submit Button */}
              <button
                type="submit"
                className="px-4 h-10 bg-green-600 text-white hover:bg-green-700 font-semibold rounded text-sm"
                disabled={loading}
              >
                {loading ? "Creating..." : "Add Assessment"}
              </button>
            </ModalFooter>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-sm mt-2">
                Error: {error.message}
              </p>
            )}
          </form>
        )}
      </ModalContent>
    </Modal>
  );
};

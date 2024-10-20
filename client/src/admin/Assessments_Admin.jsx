import React from "react";
import useFetchAssessments from "@/api/assessmentsRequest";
import Loading from "@/components/loading";
import { MoveUpRight, Container } from "lucide-react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";

export default function Assessments_Admin() {
  return (
    <div className="space-y-6">
      <Header />
      <AssessmentsList />
    </div>
  );
}

const Header = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full flex justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Assessments List</h1>
          <p className="text-sm font-semibold">
            View all assessments on the system.
          </p>
        </div>
      </div>
    </div>
  );
};

const AssessmentsList = () => {
  const { assessments, loading } = useFetchAssessments();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedAssessment, setSelectedAssessment] = React.useState(null);

  const handleAssessment = (assessment) => {
    setSelectedAssessment(assessment); // Set the whole assessment object
    onOpen();
  };

  if (loading) {
    return <Loading title="Loading..." text="Preparing your content" />;
  }

  return (
    <div className="w-full grid md:grid-cols-4 gap-2">
      {assessments.map((assessment) => (
        <div
          onClick={() => handleAssessment(assessment)} // Pass the whole assessment object
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

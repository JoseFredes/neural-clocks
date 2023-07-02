/**
 * The `FinishTimerModal` component is a reusable modal component in a TypeScript React application
 * that displays a modal with a title and description.
 * @param {Props} props - - `isModalOpen`: a boolean value indicating whether the modal is open or not
 * @returns The `FinishTimerModal` component is being returned.
 */
import React from "react";
import { FinishTimerModalContent } from "./FinishTimerModalContent";
import { ReusableModal } from "../modals/ReusableModal";

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  modalTitle: string;
  modalDescription: string;
}

export const FinishTimerModal: React.FC<Props> = (props: Props) => {
  const { isModalOpen, setIsModalOpen, modalTitle, modalDescription } = props;
  return (
    <ReusableModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <FinishTimerModalContent
        modalTitle={modalTitle}
        modalDescription={modalDescription}
      />
    </ReusableModal>
  );
};

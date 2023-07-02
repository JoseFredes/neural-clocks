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

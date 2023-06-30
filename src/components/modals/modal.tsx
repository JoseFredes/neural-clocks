import React from "react";
import { FaTimes } from "react-icons/fa";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="w-96 rounded-lg bg-white">
        <div className="relative">
          <button
            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <FaTimes />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

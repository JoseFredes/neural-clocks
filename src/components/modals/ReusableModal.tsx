/**
 * The ReusableModal component is a reusable modal component in TypeScript React that can be used to
 * display content in a modal window.
 * @param  - - `isOpen`: a boolean value indicating whether the modal is open or not.
 * @returns The ReusableModal component is being returned.
 */
import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

interface ReusableModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const ReusableModal: React.FC<ReusableModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  useEffect(() => {
    isOpen
      ? document.body.classList.add("overflow-hidden", "h-screen")
      : document.body.classList.remove("overflow-hidden", "h-screen");

    return () => document.body.classList.remove("overflow-hidden", "h-screen");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-10 flex items-center justify-center bg-gray-900 bg-opacity-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="z-20 m-4 max-h-screen w-full max-w-xl overflow-auto rounded-lg bg-white">
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

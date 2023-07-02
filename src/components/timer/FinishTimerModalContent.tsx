/**
 * The `FinishTimerModalContent` component is a React functional component that renders a modal content
 * with a title, description, and a spinning clock icon.
 * @param  - - `modalTitle`: The title of the modal. If not provided, it defaults to "Se acabó el
 * tiempo!".
 */
import React from "react";
import { FaClock } from "react-icons/fa";

interface Props {
  modalTitle?: string;
  modalDescription?: string;
}

export const FinishTimerModalContent: React.FC<Props> = ({
  modalTitle,
  modalDescription,
}) => (
  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
    <div className="sm:flex sm:items-start sm:justify-center sm:space-x-5">
      <div className="mt-3 text-center sm:mt-0">
        <div className="flex flex-row">
          <div className="mx-auto flex h-12 w-12 flex-shrink-0 animate-spin items-center justify-center rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10">
            <FaClock className="h-6 w-6 text-gray-700" />
          </div>
          <h3 className="mx-4 pt-2 text-xl font-medium leading-6 text-gray-900">
            {modalTitle ?? "Se acabó el tiempo!"}
          </h3>
        </div>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            {modalDescription ?? "Es momento de tomar un descanso, sigue así!"}
          </p>
        </div>
      </div>
    </div>
  </div>
);

import React, { useEffect, useState, useMemo } from "react";
import { TimerActionsButtons } from "./TimerActionsButtons";
import { Modal } from "../modals/modal";
import { FaClock } from "react-icons/fa";

interface Props {
  totalMinutes?: number;
  modalTitle?: string;
  Modaldescription?: string;
}

export const Timer: React.FC<Props> = ({
  totalMinutes = 25,
  modalTitle,
  Modaldescription,
}: Props) => {
  const [seconds, setSeconds] = useState(totalMinutes * 60);
  const [isActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleResetTimer = () => {
    setSeconds(totalMinutes * 60);
    setIsActive(false);
  };

  const handlePauseTimer = () => setIsActive(false);

  const handleStartTimer = () => setIsActive(true);

  useEffect(() => {
    setSeconds(totalMinutes * 60);
    setIsActive(false);
  }, [totalMinutes]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (seconds === 0) {
      setIsActive(false);
      setIsModalOpen(true);
    }

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, seconds]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const radius = 200;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (minutes / totalMinutes) * circumference;

  const formattedTime = useMemo(() => {
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  }, [minutes, remainingSeconds]);

  return (
    <div className="flex flex-col items-center justify-center">
      <svg className="my-4" height={radius * 2} width={radius * 2}>
        <circle
          stroke="#60a5fa"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          stroke="black"
          strokeWidth="2px"
          dy=".3em"
          fontSize="5em"
        >
          {formattedTime}
        </text>
      </svg>
      <TimerActionsButtons
        isActive={isActive}
        handleResetTimer={handleResetTimer}
        handlePauseTimer={handlePauseTimer}
        handleStartTimer={handleStartTimer}
      />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start sm:justify-center sm:space-x-5">
            <div className="mt-3 text-center  sm:mt-0">
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
                  {Modaldescription ??
                    "Es momento de tomar un descanso, sigue así!"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

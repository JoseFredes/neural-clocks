/**
 * The Timer component is a countdown timer that allows users to start, pause, and reset the timer, and
 * displays a modal when the timer reaches zero.
 * @param {Props}  - - `totalMinutes`: The total number of minutes for the timer. It defaults to 25 if
 * not provided.
 * @returns The Timer component is being returned.
 */
import React, { useEffect, useState } from "react";
import { TimerActionsButtons } from "./TimerActionsButtons";
import { FinishTimerModal } from "./FinishTimerModal";
import { TimerCircle } from "./TimerCircle";

interface Props {
  totalMinutes?: number;
  modalTitle?: string;
  modalDescription?: string;
}

export const Timer: React.FC<Props> = ({
  totalMinutes = 25,
  modalTitle,
  modalDescription,
}: Props) => {
  const [seconds, setSeconds] = useState(totalMinutes * 60);
  const [isActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleResetTimer = () => {
    setSeconds(totalMinutes * 60);
    setIsActive(false);
  };

  const handlePauseTimer = () => setIsActive(false);

  const handleStartTimer = () => {
    setIsActive(true);
    if (seconds > 0) {
      setIsActive(true);
    }
  };

  useEffect(() => {
    setSeconds(totalMinutes * 60);
    setIsActive(false);
  }, [totalMinutes]);

  useEffect(() => {
    const handleTimerTick = () => setSeconds((prevSeconds) => prevSeconds - 1);

    const handleTimerComplete = () => {
      setIsActive(false);
      setIsModalOpen(true);
    };

    let interval: ReturnType<typeof setInterval> | null = null;

    if (seconds === 0) handleTimerComplete();

    if (isActive && seconds > 0) interval = setInterval(handleTimerTick, 1000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive, seconds]);

  return (
    <div className="flex flex-col items-center justify-center">
      <TimerCircle totalMinutes={totalMinutes} seconds={seconds} />
      <TimerActionsButtons
        isActive={isActive}
        handleResetTimer={handleResetTimer}
        handlePauseTimer={handlePauseTimer}
        handleStartTimer={handleStartTimer}
      />
      <FinishTimerModal
        isModalOpen={isModalOpen}
        setIsModalOpen={() => setIsModalOpen(false)}
        modalTitle={modalTitle ?? "Se acabó el tiempo!"}
        modalDescription={
          modalDescription ?? "Es momento de tomar un descanso, sigue así!"
        }
      />
    </div>
  );
};

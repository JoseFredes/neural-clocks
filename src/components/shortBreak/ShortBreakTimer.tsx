/**
 * The ShortBreakTimer component is a timer that displays a modal when the timer is finished.
 * @param {Props}  - - `React` is imported from the "react" library, which is used to create React
 * components.
 * @returns The ShortBreakTimer component is returning a Timer component with the specified props.
 */
import React from "react";

import { Timer } from "../timer/Timer";

interface Props {
  totalMinutes?: number;
}

export const ShortBreakTimer: React.FC<Props> = ({
  totalMinutes = 5,
}: Props) => {
  const modalContent = {
    modalTitle: "Se acabó el descanso corto!",
    Modaldescription: "Es hora de volver a trabajar otro pomodoro más, ánimo!",
  };

  return (
    <Timer
      totalMinutes={totalMinutes}
      modalDescription={modalContent.modalTitle}
      modalTitle={modalContent.Modaldescription}
    />
  );
};

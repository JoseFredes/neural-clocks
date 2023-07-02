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

import React from "react";

import { Timer } from "../timer/Timer";

interface props {
  totalMinutes?: number;
}

export const ShortBreakTimer: React.FC<props> = ({
  totalMinutes = 5,
}: props) => {
  const modalTitle = "Se acabó el descanso corto!";
  const Modaldescription =
    "Es hora de volver a trabajar otro pomodoro más, ánimo!";
  return (
    <Timer
      totalMinutes={totalMinutes}
      Modaldescription={modalTitle}
      modalTitle={Modaldescription}
    />
  );
};

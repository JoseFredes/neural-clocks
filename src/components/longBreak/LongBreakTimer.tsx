import React from "react";

import { Timer } from "../timer/Timer";

interface props {
  totalMinutes?: number;
}

export const LongBreakTimer: React.FC<props> = ({
  totalMinutes = 15,
}: props) => {
  const modalTitle = "Se acabó el Descanso largo!";
  const Modaldescription =
    "Lo hiciste muy bien, ahora es hora de volver a trabajar o descansar por hoy!";
  return (
    <Timer
      totalMinutes={totalMinutes}
      modalTitle={modalTitle}
      Modaldescription={Modaldescription}
    />
  );
};

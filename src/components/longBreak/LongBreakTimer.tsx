import React from "react";
import { Timer } from "../timer/Timer";

interface Props {
  totalMinutes?: number;
}

export const LongBreakTimer: React.FC<Props> = ({
  totalMinutes = 15,
}: Props) => {
  const modalContent = {
    modalTitle: "Se acabó el descanso largo!",
    Modaldescription:
      "Lo hiciste muy bien, ahora es hora de volver a trabajar o descansar por hoy!",
  };
  return (
    <Timer
      totalMinutes={totalMinutes}
      modalTitle={modalContent.modalTitle}
      modalDescription={modalContent.Modaldescription}
    />
  );
};

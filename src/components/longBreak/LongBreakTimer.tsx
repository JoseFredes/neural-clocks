/**
 * The LongBreakTimer component is a React functional component that renders a Timer component with a
 * default totalMinutes value of 15 and displays a modal with a specific title and description when the
 * timer is finished.
 * @param {Props}  - - `React` is imported from the React library, which is used to create React
 * components.
 * @returns The LongBreakTimer component is being returned.
 */

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

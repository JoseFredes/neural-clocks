import React from "react";

import { Timer } from "../timer/Timer";

interface props {
  totalMinutes?: number;
}

export const LongBreakTimer: React.FC<props> = ({
  totalMinutes = 15,
}: props) => {
  return <Timer totalMinutes={totalMinutes} />;
};

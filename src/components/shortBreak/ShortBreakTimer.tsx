import React from "react";

import { Timer } from "../timer/Timer";

interface props {
  totalMinutes?: number;
}

export const ShortBreakTimer: React.FC<props> = ({
  totalMinutes = 5,
}: props) => {
  return <Timer totalMinutes={totalMinutes} />;
};

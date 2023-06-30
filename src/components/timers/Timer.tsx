import React, { useEffect, useState } from "react";
import { TimerActionsButtons } from "./TimerActionsButtons";

interface props {
  totalMinutes: number;
}

export const Timer: React.FC<props> = ({ totalMinutes = 25 }: props) => {
  const [seconds, setSeconds] = useState(totalMinutes * 60);
  const [isActive, setIsActive] = useState(false);

  const handleResetTimer = () => {
    setSeconds(totalMinutes * 60);
    setIsActive(false);
  };

  const handlePauseTimer = () => {
    setIsActive(false);
  };

  const handleStartTimer = () => {
    setIsActive(true);
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (seconds === 0) setIsActive(false);

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
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
          {`${minutes.toString().padStart(2, "0")}:${remainingSeconds
            .toString()
            .padStart(2, "0")}`}
        </text>
      </svg>

      <TimerActionsButtons
        isActive={isActive}
        handleResetTimer={() => handleResetTimer()}
        handlePauseTimer={() => handlePauseTimer()}
        handleStartTimer={() => handleStartTimer()}
      />
    </div>
  );
};

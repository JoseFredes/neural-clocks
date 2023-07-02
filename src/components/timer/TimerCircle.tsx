/**
 * The TimerCircle component is a circular timer that displays the remaining time in minutes and
 * seconds.
 * @param {Props}  - - `totalMinutes`: The total number of minutes for the timer.
 * @returns The TimerCircle component is returning an SVG element that displays a circular timer. The
 * timer displays the formatted time in minutes and seconds, and the circle's stroke dashoffset is
 * adjusted based on the elapsed time.
 */
import React, { useMemo } from "react";

interface Props {
  totalMinutes: number;
  seconds: number;
}

export const TimerCircle: React.FC<Props> = ({
  totalMinutes,
  seconds,
}: Props) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const radius = 200;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (minutes / totalMinutes) * circumference;

  const formattedTime = useMemo(() => {
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  }, [minutes, remainingSeconds]);

  return (
    <svg className="my-4" height={radius * 2} width={radius * 2}>
      <circle
        stroke="#ffffff"
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
        stroke="white"
        strokeWidth="2px"
        dy=".3em"
        fontSize="5em"
      >
        {formattedTime}
      </text>
    </svg>
  );
};

import React from "react";
import { StatsChart } from "./StatsChart";
import { Modal } from "../modals/modal";
import { LastFiveConfigs } from "./LastFiveConfigs";

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: stat[];
}

interface stat {
  pomodoroTime: number;
  shortBreakTime: number;
  longBreakTime: number;
  date: string;
}

export const StatsModal: React.FC<StatsModalProps> = (
  props: StatsModalProps
) => {
  const { isOpen, onClose, stats } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h1 className="md:text-md flex items-center justify-center pb-2 text-2xl font-semibold tracking-tight text-black sm:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
        Tus estadísticas
      </h1>
      <StatsChart stats={stats} />
      <LastFiveConfigs stats={stats} />
    </Modal>
  );
};

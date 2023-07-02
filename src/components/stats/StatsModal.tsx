import React from "react";
import { StatsChart } from "./StatsChart";
import { LastFiveConfigs } from "./LastFiveConfigs";
import { ReusableModal } from "../modals/ReusableModal";
import { type Stat, type StatsQueryResult } from "~/interfaces";
import { useSession } from "next-auth/react";
import { api } from "~/utils/api";
interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StatsModal: React.FC<StatsModalProps> = (
  props: StatsModalProps
) => {
  const { isOpen, onClose } = props;
  const { data: sessionData } = useSession();

  let statsFormatted: Stat[] = [];

  const userId = sessionData?.user?.id;

  let queryResult: StatsQueryResult | null = null;

  queryResult = api.stats.getStatsByUser?.useQuery({
    userId: userId ?? "",
  });

  if (queryResult?.data) {
    statsFormatted = queryResult.data.map((stat) => ({
      pomodoroTime: stat.pomodoroTime,
      shortBreakTime: stat.shortBreakTime,
      longBreakTime: stat.longBreakTime,
      date: new Date(stat.date).toLocaleDateString(),
    }));
  }

  return (
    <ReusableModal isOpen={isOpen} onClose={onClose}>
      <h1 className="md:text-md flex items-center justify-center pb-2 text-2xl font-semibold tracking-tight text-black sm:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
        Tus estadísticas
      </h1>
      <StatsChart stats={statsFormatted} />
      <LastFiveConfigs stats={statsFormatted} />
    </ReusableModal>
  );
};

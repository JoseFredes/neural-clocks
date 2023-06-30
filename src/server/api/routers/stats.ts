import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { type Prisma } from "@prisma/client";

const StatsSchema = z.object({
  date: z.date(),
  pomodoroTime: z.number(),
  shortBreakTime: z.number(),
  longBreakTime: z.number(),
  userId: z.string(),
});

const UserIdSchema = z.object({
  userId: z.string(),
});

interface StatsResponse {
  id: string;
  date: Date;
  pomodoroTime: number;
  shortBreakTime: number;
  longBreakTime: number;
  userId: string;
}

interface Stats extends Prisma.StatsUncheckedCreateInput {
  id: string;
}

export const statsRouter = createTRPCRouter({
  saveStats: publicProcedure
    .input(StatsSchema)
    .mutation<Stats>(async ({ input, ctx }) => {
      if (!input) throw new Error("Input is required");
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      const newStat = (await ctx.prisma.stats.create({
        data: {
          date: input.date,
          pomodoroTime: input.pomodoroTime,
          shortBreakTime: input.shortBreakTime,
          longBreakTime: input.longBreakTime,
          userId: input.userId,
        },
      })) as StatsResponse;

      return newStat;
    }),

  getStatsByUser: publicProcedure
    .input(UserIdSchema)
    .query<Stats[]>(async ({ input, ctx }) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      return (await ctx.prisma.stats.findMany({
        where: { userId: input.userId },
      })) as Stats[];
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "Iniciaste sesión!";
  }),
});

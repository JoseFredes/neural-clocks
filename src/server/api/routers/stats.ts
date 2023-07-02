import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { type Prisma } from "@prisma/client";
import { type StatsResponse } from "~/interfaces";

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

interface Stats extends Prisma.StatsUncheckedCreateInput {
  id: string;
}

export const statsRouter = createTRPCRouter({
  saveStats: protectedProcedure
    .input(StatsSchema)
    .mutation<Stats>(async ({ input, ctx }) => {
      if (!input) throw new Error("Input is required");
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

  getStatsByUser: protectedProcedure
    .input(UserIdSchema)
    .query<Stats[]>(async ({ input, ctx }) => {
      return (await ctx.prisma.stats.findMany({
        where: { userId: input.userId },
      })) as Stats[];
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "Iniciaste sesión!";
  }),
});

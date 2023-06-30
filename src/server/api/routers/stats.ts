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

interface Stats extends Prisma.StatsUncheckedCreateInput {
  id: string;
}

export const statsRouter = createTRPCRouter({
  save: publicProcedure
    .input(StatsSchema)
    .mutation<Stats>(async ({ input, ctx }) => {
      if (input)
        return await ctx.prisma.stats.create({
          data: input,
        });
    }),

  getByUser: publicProcedure
    .input(UserIdSchema)
    .query<Stats[]>(async ({ input, ctx }) => {
      return await ctx.prisma.stats.findMany({
        where: { userId: input.userId },
      });
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "Iniciaste sesión!";
  }),
});

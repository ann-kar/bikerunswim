export type GoalType = "distance" | "workoutCount";

export interface IGoal {
  userId: string;
  goalId: string;
  type: GoalType;
  startDate: string;
  endDate: string;
  name: string;
  notes?: string;
  isCompleted: boolean;
}

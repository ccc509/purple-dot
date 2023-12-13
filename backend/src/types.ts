import { ACTIVE, COMPLETED, DELECTED } from "./constants";

export type Status = typeof ACTIVE | typeof COMPLETED | typeof DELECTED;

export type Todo = {
  id: string;
  title: string;
  status: Status;
  createdAt: Date;
};

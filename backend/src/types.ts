import { ACTIVE, COMPLETED, DELETED } from "./constants";

export type Status = typeof ACTIVE | typeof COMPLETED | typeof DELETED;

export type Todo = {
  id: string;
  title: string;
  status: Status;
  createdAt: Date;
};

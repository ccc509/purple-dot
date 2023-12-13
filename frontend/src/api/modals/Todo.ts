import { Status } from "./Status";

export type Todo = {
  id: string;
  title: string;
  status: Status;
  createdAt: Date;
};

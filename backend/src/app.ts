import cors from "cors";
import dayjs from "dayjs";
import express, { Request, Response } from "express";
import { v4 } from "uuid";
import { ACTIVE } from "./constants";
import { Todo } from "./types";

const app = express();
app.use(cors());
const port = 3001;
app.use(express.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

let todoList: Todo[] = [];

app.get("/", (req: Request, res: Response) => {
  res.send(`Welcome to the purple dot backend`);
});

app.get("/api/todos", (req: Request, res: Response) => {
  res.status(200).send(todoList);
});

app.put("/api/todos/:todoId", (req: Request, res: Response) => {
  const { todoId } = req.params;
  const { status } = req.body;

  const indexOfTodoToUpdate = todoList.findIndex((todo) => todo.id === todoId);

  if (indexOfTodoToUpdate === -1) {
    res.status(404).send(`Todo with id ${todoId} not found`);
    return;
  }

  const todoToUpdate = todoList[indexOfTodoToUpdate];
  const updatedTodo: Todo = {
    ...todoToUpdate,
    status,
  } as Todo;

  const updatedList = [
    ...todoList.filter((todo) => todo.id !== todoId),
    updatedTodo,
  ];

  todoList = updatedList.sort((a, b) =>
    dayjs(a.createdAt).isAfter(b.createdAt) ? 1 : -1
  );

  res.status(201).send();
});

app.post("/api/todos", (req: Request, res: Response) => {
  const uuid = v4();
  const { title } = req.body;

  todoList.push({
    id: uuid,
    title: title,
    status: ACTIVE,
    createdAt: dayjs().toDate(),
  });

  res.status(201).send();
});

app.delete("/api/todos", (req: Request, res: Response) => {
  todoList = [];
  res.status(201).send();
});

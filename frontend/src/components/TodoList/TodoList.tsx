import React from "react";
import { Todo } from "../../api/modals/Todo";
import { TodoItem } from "../TodoItem";

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </>
  );
};

import React from "react";
import { Todo } from "../../api/modals/Todo";
import { ACTIVE, COMPLETED } from "../../utils/constants";
import { useFilterOptionStore } from "../../utils/stores";
import { TodoItem } from "../TodoItem";

type Props = {
  todos: Todo[];
  refetch: () => void;
};

export const TodoList: React.FC<Props> = ({ todos, refetch }) => {
  const { option } = useFilterOptionStore();

  let todosToDisplay: Todo[];

  switch (option) {
    case ACTIVE:
      todosToDisplay = [...todos].filter((todo) => todo.status === ACTIVE);
      break;
    case COMPLETED:
      todosToDisplay = [...todos].filter((todo) => todo.status === COMPLETED);
      break;
    default:
      todosToDisplay = todos;
      break;
  }

  return (
    <>
      {todosToDisplay.map((todo) => (
        <div key={todo.id}>
          <TodoItem todo={todo} refetch={refetch} />
        </div>
      ))}
    </>
  );
};

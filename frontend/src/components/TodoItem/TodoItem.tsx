import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Todo } from "../../api/modals/Todo";
import { updateTodo } from "../../api/services/Todo";
import { ACTIVE, COMPLETED, DELETED } from "../../utils/constants";

type Props = {
  todo: Todo;
  refetch: () => void;
};

export const TodoItem: React.FC<Props> = ({ todo, refetch }) => {
  const { id, title, status } = todo;

  const completeClickHandler = async () => {
    await updateTodo(id, COMPLETED);
    refetch();
  };

  const deleteClickHandler = async () => {
    await updateTodo(id, DELETED);
    refetch();
  };

  return (
    <Box p={1}>
      <Typography>{title}</Typography>
      <Button onClick={completeClickHandler} disabled={status !== ACTIVE}>
        Complete
      </Button>
      <Button onClick={deleteClickHandler} disabled={status === DELETED}>
        Delete
      </Button>
    </Box>
  );
};

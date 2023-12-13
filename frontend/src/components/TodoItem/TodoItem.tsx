import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Todo } from "../../api/modals/Todo";

type Props = {
  todo: Todo;
};

export const TodoItem: React.FC<Props> = ({ todo }) => {
  return (
    <Box key={todo.id} p={1}>
      <Typography>{todo.title}</Typography>
      <Button>Complete</Button>
      <Button>Delete</Button>
    </Box>
  );
};

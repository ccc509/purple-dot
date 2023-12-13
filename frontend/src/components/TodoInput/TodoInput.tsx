import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { createTodo } from "../../api/services/Todo";

type Props = {
  refetch: () => void;
};

export const TodoInput: React.FC<Props> = ({ refetch }) => {
  const [todo, setTodo] = useState<string>("");

  const addClickHandler = async () => {
    await createTodo(todo);
    setTodo("");
  };

  return (
    <Box
      p={2}
      sx={{
        display: "flex",
      }}
    >
      <TextField value={todo} onChange={(e) => setTodo(e.target.value)} />
      <Button variant="contained" onClick={addClickHandler}>
        Add
      </Button>
    </Box>
  );
};

import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { clearAll, createTodo } from "../../api/services/Todo";

type Props = {
  refetch: () => void;
};

export const TodoInput: React.FC<Props> = ({ refetch }) => {
  const [todo, setTodo] = useState<string>("");

  const addClickHandler = async () => {
    if (!!todo.length) {
      await createTodo(todo);
      refetch();
      setTodo("");
    }
  };

  const clearAllClickHandler = async () => {
    await clearAll();
    refetch();
  };

  return (
    <Box
      p={2}
      sx={{
        display: "flex",
        width: "400px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <TextField value={todo} onChange={(e) => setTodo(e.target.value)} />
      <Button variant="contained" onClick={addClickHandler}>
        Add
      </Button>
      <Button variant="outlined" onClick={clearAllClickHandler}>
        Clear all
      </Button>
    </Box>
  );
};

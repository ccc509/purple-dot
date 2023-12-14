import { Box } from "@mui/material";
import { useQuery } from "react-query";
import { getTodos } from "../api/services/Todo";
import { Filter } from "../components/Filter";
import { TodoInput } from "../components/TodoInput";
import { TodoList } from "../components/TodoList";
import { QUERY_STRING_TODO_LIST } from "../utils/constants";

export const Todo: React.FC = () => {
  const { data, refetch } = useQuery([QUERY_STRING_TODO_LIST], () =>
    getTodos()
  );

  return (
    <Box>
      <TodoInput refetch={() => refetch()} />
      <Filter />
      {data && <TodoList todos={data} refetch={() => refetch()} />}
    </Box>
  );
};

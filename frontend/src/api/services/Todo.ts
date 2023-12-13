import { Todo } from "../modals/Todo";

export const createTodo = async (title: string): Promise<void> => {
  const body = JSON.stringify({
    title,
  });

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const requestOptions = {
    method: "POST",
    headers,
    body,
  };

  await fetch("http://localhost:3001/api/todos", requestOptions);
};

export const getTodos = async (): Promise<Todo[]> => {
  const headers = new Headers();

  headers.append("Content-Type", "application/json");

  const requestOptions = {
    method: "GET",
    headers,
  };

  const response = await fetch(
    "http://localhost:3001/api/todos",
    requestOptions
  );
  const jsonResponse = await response.json();

  return jsonResponse;
};

export const updateTodo = async (id: string, status: string): Promise<void> => {
  const body = JSON.stringify({
    status,
  });

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const requestOptions = {
    method: "PUT",
    headers,
    body,
  };

  await fetch(`http://localhost:3001/api/todos/${id}`, requestOptions);
};

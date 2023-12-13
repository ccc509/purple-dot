import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Todo } from "./pages";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Todo />
    </QueryClientProvider>
  );
}

export default App;

import Item from "./Item";
import Form from "./FormTodo.tsx";
import { useEffect, useState } from "react";
import { getTodoListApi } from "../../services/todo-api.ts";

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export default function List() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Todo[]>([]);

  async function getTodoList() {
    try {
      setIsLoading(true);
      const data = await getTodoListApi({
        title_like: "a",
      });
      setData(data);
    } catch (error) {
      // toast.error("Failed to fetch todo list");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    // handle call api
    getTodoList();
  }, []);

  function addTodo(newTodo: Todo) {
    setData([...data, newTodo]);
  }

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <Form addTodo={addTodo} />
      {data.length === 0 ? (
        <div>empty</div>
      ) : (
        data.map((todo) => (
          <Item
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))
      )}
    </div>
  );
}
import { useId, useRef, useState } from "react";
import { Todo } from "./List";

type Props = {
  addTodo: (data: Todo) => void;
};

export default function Form({ addTodo }: Props) {
  const [title, setTitle] = useState("");
  const id = useId();
  const timeoutId = useRef<number | null>(null);

  function handleSubmit() {
    addTodo({ id, title, completed: false });
    setTitle("");
  }

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    setTitle(value);
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(() => {
      console.log("debounce", value);
    }, 300);
  }

  return (
    <div>
      <input
        type="text"
        className="border border-red-500"
        value={title}
        onChange={handleChangeInput}
      />
      <button
        className="border border-red-500 disabled:opacity-50"
        disabled={!title}
        onClick={handleSubmit}
      >
        Add
      </button>
    </div>
  );
}

// PORTAL
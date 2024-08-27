import { useRef } from "react";
import { Todo } from "./List";

type Props = Todo;

export default function Item({ completed, title }: Props) {
  const intervalIdRef = useRef(10);
  const itemRef = useRef<HTMLParagraphElement>(null);

  function addCounter() {
    if (itemRef.current) {
      itemRef.current?.classList.add("text-red-500");
    }
  }

  return (
    <p
      className={completed ? "text-red-500" : "text-black"}
      onClick={addCounter}
      ref={itemRef}
    >
      {title}- {intervalIdRef.current}
    </p>
  );
}

// data not reset when component re-render

// data => debounce, countdown,....
// element
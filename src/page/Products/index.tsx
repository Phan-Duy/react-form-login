import { ElementRef, memo, useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
export type Product = {
  id: number;
  title: string;
  name: string;
  price: string;
  description: string;
  image: string;
};

export default function Products() {
  const [page, setPage] = useState(1);
  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["products", { page }],
    queryFn: async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      return res.json();
    },
    staleTime: 1000 * 60 * 5,
  });

  console.log({
    data,
    isFetching,
    isLoading,
  });

  return (
    <div>
      <button onClick={() => setPage(page + 1)}> change page</button>
      {(data || []).map((item: Product) => {
        return <Child item={item} />;
      })}
    </div>
  );
}

const Child = memo(
  ({ item, setCountFunc }: { item: Product; setCountFunc?: () => void }) => {
    const refImg = useRef<ElementRef<"img">>(null);

    useEffect(() => {
      if (refImg.current && !refImg.current.complete) {
        refImg.current.classList.add("animate-pulse");

        const removeLoading = () => {
          if (refImg.current) {
            refImg.current.classList.remove("animate-pulse");
          }
        };

        refImg.current.onload = removeLoading;
        refImg.current.onerror = removeLoading;
      }
    }, []);

    return (
      <div
        key={item.id}
        className="border border-red-500 p-2 m-2"
        onClick={(e) => {
          e.stopPropagation();
          setCountFunc?.();
        }}
      >
        <img
          ref={refImg}
          src={item.image}
          alt="xxx"
          width={50}
          height={50}
          loading="lazy"
          className="bg-slate-600 animate-pulse"
        />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    );
  }
);

// useContext
// useReducer

// stale time

// cache time
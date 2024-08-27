import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../Products";

export default function ProductDetail() {
  const [data, setData] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        setData(resData);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <div>...loading</div>
      ) : (
        <Fragment>
          <h1>{data?.id}</h1>
          <h1>{data?.title}</h1>
          <h3>{data?.description}</h3>
        </Fragment>
      )}
    </div>
  );
}
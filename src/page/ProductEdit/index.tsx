import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Product } from "../Products";
import Form from "../../components/ProductModify/Form";

export default function ProductEdit() {
  const [data, setData] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams<{ id: string }>();

  function onSubmit() {
    console.log("data");
  }

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
      ) : data ? (
        <Form onSubmit={onSubmit} values={data} />
      ) : null}
    </div>
  );
}
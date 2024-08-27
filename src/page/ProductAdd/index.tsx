import Form from "../../components/ProductModify/Form";
import { useAppSelector } from "../../store/hooks";

export default function AddProduct() {
  const products = useAppSelector((state) => state.products.data);
  console.log("on add products", { products });

  return (
    <div>
      <Form onSubmit={() => {}} />
    </div>
  );
}
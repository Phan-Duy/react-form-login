import { useEffect } from "react";
import Portal from "../Portal";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

export default function Modal() {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  //   useEffect(() => {
  //     navigate("/", {
  //       state: { modal: true },
  //     });
  //   }, []);

  return (
    <Portal>
      <Link to="/">To HOME</Link>

      <div>modal</div>
    </Portal>
  );
}
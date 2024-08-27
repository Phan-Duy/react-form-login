import { useNavigate } from "react-router-dom";
import { authLocal } from "../../util/authLocal";
import { useEffect } from "react";
import Button from "../../components/common/Button";

export default function Home() {
  const token = authLocal.getToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  });

  return (
    <div>
      {token && <button>Logout</button>}
      <h1>Home</h1>
      <Button
        onClick={() => authLocal.removeToken()}
        size="small"
        variant="secondary"
      >
        Logout
      </Button>
    </div>
  );
}
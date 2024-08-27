import { useEffect } from "react";
import { Outlet, useSearchParams, useNavigate } from "react-router-dom";

export default function PrivateLayout() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const isLogin = searchParams.get("isLogin");

    if (!(isLogin === "true")) {
      navigate("/");
    }
  }, [navigate, searchParams]);

  return (
    <div>
      <h1>Private Layout</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
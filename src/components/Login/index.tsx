import { useForm } from "react-hook-form";
import "./style.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { login } from "../../services/auth-api";
import { authLocal } from "../../util/authLocal";

const schema = z.object({
  email: z.string().min(3, "name min = 3").max(50, "name max = 50"),
  password: z.string(),
});

export type RegisterFormType = z.infer<typeof schema>;

export default function RegisterForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<RegisterFormType>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
    resolver: zodResolver(schema),
  });

  const { mutate } = useMutation({
    mutationFn: (data: RegisterFormType) => {
      return login(data);
    },
    onSuccess: (responseData) => {
      authLocal.setToken(responseData.access_token);
      navigate("/");
    },
  });

  const onSubmit = (data: RegisterFormType) => {
    mutate(data);
  };

  return (
    <div className="container">
      <div className="title">
        <p>Login</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="user_details">
          <div className="input_box">
            <label htmlFor="email">email</label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              {...register("email")}
            />
            {errors.email && (
              <span className="error">{errors.email.message}</span>
            )}
          </div>
          <div className="input_box">
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              id="pass"
              placeholder="Enter your password"
              {...register("password")}
            />
            {errors.password && (
              <span className="error">{errors.password.message}</span>
            )}
          </div>
        </div>
        <div className="reg_btn">
          <input type="submit" value="Login" disabled={!isDirty} />
        </div>
      </form>
    </div>
  );
}
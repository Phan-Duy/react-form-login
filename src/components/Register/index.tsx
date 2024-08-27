import { useForm } from "react-hook-form";
import "./style.css";
import { z } from "zod";
import { REGEX } from "../../constants/regex";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { registerApi } from "../../services/auth-api";
import { useNavigate } from "react-router";

const schema = z
  .object({
    name: z.string().min(3, "name min = 3").max(50, "name max = 50"),
    userName: z.string().min(3, "name min = 3").max(50, "name max = 50"),
    email: z.string().email("email invalid"),
    phone: z.string().regex(REGEX.phoneNumber, "phone invalid"),
    password: z.string(),
    confirmPass: z.string(),
  })
  .refine((data) => data.password === data.confirmPass, {
    message: "Passwords don't match",
    path: ["confirmPass"],
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
      name: "",
      userName: "",
      email: "",
      phone: "",
      password: "",
      confirmPass: "",
    },
    mode: "onBlur",
    resolver: zodResolver(schema),
  });

  const { mutate } = useMutation({
    mutationFn: (data: RegisterFormType) => {
      return registerApi(data);
    },
    onSuccess: () => {
      navigate("/login");
    },
  });

  const onSubmit = (data: RegisterFormType) => {
    mutate(data);
  };

  return (
    <div className="container">
      <div className="title">
        <p>Registration</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="user_details">
          <div className="input_box">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              {...register("name")}
            />
            {errors.name && (
              <span className="error">{errors.name.message}</span>
            )}
          </div>
          <div className="input_box">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              {...register("userName")}
            />
            {errors.userName && (
              <span className="error">{errors.userName.message}</span>
            )}
          </div>
          <div className="input_box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register("email")}
            />
            {errors.email && (
              <span className="error">{errors.email.message}</span>
            )}
          </div>
          <div className="input_box">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              placeholder="Enter your number"
              {...register("phone")}
            />
            {errors.phone && (
              <span className="error">{errors.phone.message}</span>
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
          <div className="input_box">
            <label htmlFor="confirmPass">Confirm Password</label>
            <input
              type="password"
              id="confirmPass"
              placeholder="Confirm your password"
              {...register("confirmPass")}
            />
            {errors.confirmPass && (
              <span className="error">{errors.confirmPass.message}</span>
            )}
          </div>
        </div>
        {/* <div className="gender">
          <span className="gender_title">Gender</span>
          <input type="radio" name="gender" id="radio_1" />
          <input type="radio" name="gender" id="radio_2" />
          <input type="radio" name="gender" id="radio_3" />

          <div className="category">
            <label htmlFor="radio_1">
              <span className="dot one"></span>
              <span>Male</span>
            </label>
            <label htmlFor="radio_2">
              <span className="dot two"></span>
              <span>Female</span>
            </label>
            <label htmlFor="radio_3">
              <span className="dot three"></span>
              <span>Prefer not to say</span>
            </label>
          </div>
        </div> */}

        <div className="reg_btn">
          <input type="submit" value="Register" disabled={!isDirty} />
        </div>
      </form>
    </div>
  );
}
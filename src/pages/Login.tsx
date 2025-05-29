import { FormLayaut, Form, Input, Button } from "../Components";
import { EyeIcon, EyeSlashIcon } from "../assets/icons";
import { useForm } from "react-hook-form";
import { validationsLogin } from "../validations/login";
import type { ValidationFormLogin } from "../types";
import { useShowPassword } from "../store/slices/UI";
import { loginUser } from "../services/users";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ValidationFormLogin>();

  const { showPassword } = useShowPassword();

  const navigate = useNavigate();

  const onSubmit = async (data: ValidationFormLogin) => {
    try {
      const res = await loginUser(data);
      if (!res) {
        alert("Credenciales incorrectas");
      } else {
        navigate("/dashboard");
        reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="relative w-full h-screen overflow-x-hidden md:flex md:justify-center">
      <FormLayaut />
      <Form title="Iniciar Sesión" handleSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <Input
            type="email"
            placeholder="Correo Electrónico"
            {...register("email", validationsLogin.email)}
          />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div>
          <div className="w-full h-max relative ">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              {...register("password", validationsLogin.password)}
            />
            {showPassword ? (
              <EyeSlashIcon styles="absolute top-1/2 right-2 -translate-y-1/2 text-text-color/30 cursor-pointer" />
            ) : (
              <EyeIcon styles="absolute top-1/2 right-2 -translate-y-1/2 text-text-color/30 cursor-pointer" />
            )}
          </div>
          {errors.password && (
            <span className="text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>
        <Button
          type="submit"
          styles="w-full h-10 bg-btn-primary-bg text-btn-primary-text hover:bg-btn-primary-hover cursor-pointer"
        >
          Iniciar Sesión
        </Button>
      </Form>
    </main>
  );
};

export default Login;

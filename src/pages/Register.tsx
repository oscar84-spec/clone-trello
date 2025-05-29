import { FormLayaut, Form, Input, Button } from "../Components";
import { EyeIcon, EyeSlashIcon } from "../assets/icons";
import { useForm } from "react-hook-form";
import type { ValidationForm } from "../types";
import { validationsRegister } from "../validations/register";
import { useShowPassword } from "../store/slices/UI";
import { registerUser } from "../services/users";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ValidationForm>();

  const { showPassword } = useShowPassword();
  const naviagte = useNavigate();
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const onSubmit = async (data: ValidationForm) => {
    try {
      const res = await registerUser(data);
      if (!res) {
        alert("Hubo un error, intentelo de nuevo");
      } else {
        naviagte("/dashboard");
        reset();
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(true);
        const msg = error.response?.data?.error;
        setErrorMsg(msg);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <main className="relative w-full h-screen overflow-x-hidden md:flex md:justify-center">
      <FormLayaut />
      <Form title="Registro" handleSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <Input
            type="text"
            placeholder="Nombre(s)"
            {...register("name", validationsRegister.name)}
          />
          {errors.name && (
            <span className="text-sm text-red-500">{errors.name.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Input
            type="text"
            placeholder="Apellido(s)"
            {...register("lastName", validationsRegister.lastName)}
          />
          {errors.lastName && (
            <span className="text-sm text-red-500">
              {errors.lastName.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Input
            type="email"
            placeholder="Correo Electrónico"
            {...register("email", validationsRegister.email)}
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
              {...register("password", validationsRegister.password)}
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
          Registrarme
        </Button>
        {error && (
          <span className="text-lg text-red-500 font-medium text-center">
            {errorMsg}
          </span>
        )}
      </Form>
    </main>
  );
};

export default Register;

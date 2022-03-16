import { useState } from "react";

interface InputValues {
  [key: string]: string;
}

export function useForm() {
  const [values, setValues] = useState<InputValues>({});
  const [errors, setErrors] = useState<InputValues>({});

  const handleChange = (e: { target: HTMLInputElement }) => {
    const input = e.target;
    const value = input.value;
    const name = input.name;
    setValues((prevState) => ({ ...prevState, [name]: value }));
    setErrors((prevState) => ({
      ...prevState,
      [name]: input.validationMessage,
    }));
  };

  return {
    values,
    handleChange,
    errors,
    setValues,
    setErrors,
  };
}

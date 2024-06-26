import GenericForm from "@/components/Form/GenericForm";
import * as Yup from "yup";

const FormSignUp = () => {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required!!"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/(?=.*[0-9])/, "Password must contain at least one number")
      .matches(/(?=.*[!@#$%^&*_])/, "Password must contain at least one symbol")
      .required("Required!!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Passwords must match")
      .required("Required!!"),
  });

  const handleSubmit = (values: any) => {
    console.log("Sign up", values);
  };

  const fields = [
    {
      id: "email",
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Email",
    },
    {
      id: "password",
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter your password",
    },
    {
      id: "confirmPassword",
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "Enter your password",
    },
  ];

  return (
    <GenericForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      fields={fields}
      onSubmit={handleSubmit}
      fieldClass="text-black px-4 py-3 rounded-box"
    />
  );
};

export default FormSignUp;

import GenericForm from "@/components/Form/GenericForm";
import { signIn } from "next-auth/react";
import * as Yup from "yup";

const FormSignIn = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required!!"),
    password: Yup.string().required("Password required!!"),
  });

  const handleSubmit = async (values: any) => {
    const result = await signIn("credentials", {
      username: values.email,
      password: values.password,
      redirect: true,
      callbackUrl: "/",
    });
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
      placeholder: "Password",
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

export default FormSignIn;

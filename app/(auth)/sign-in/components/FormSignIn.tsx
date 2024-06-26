import GenericForm from "@/components/Form/GenericForm";
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

  const handleSubmit = (values: any) => {
    console.log("Sign in", values);
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

import { addUser } from "@/api/user/createUser";
import GenericForm from "@/components/Form/GenericForm";
import { Register } from "@/types/register";
import * as Yup from "yup";

const FormSignUp = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordMatch: "",
    role: "",
    referralCode: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(5, "name must be at least 5 characters"),
    email: Yup.string().email("Invalid email address").required("Required!!"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/(?=.*[0-9])/, "Password must contain at least one number")
      .matches(
        /(?=.*[!@#$%^&*_/])/,
        "Password must contain at least one symbol"
      )
      .required("Required!!"),
    passwordMatch: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Passwords must match")
      .required("Required!!"),
    role: Yup.string()
      .oneOf(["CUSTOMER", "ORGANIZER"], "Role must be CUSTOMER or ORGANIZER")
      .required("Required!!"),
    referralCode: Yup.string()
      .matches(
        /^[A-Z0-9]{8}$/,
        "Referral code must be 8 characters long and contain only uppercase letters and numbers"
      )
      .nullable()
      .notRequired(),
  });

  const handleSubmit = async (values: Register) => {
    try {
      console.log("Submitting values:", values);
      const newUser = await addUser({
        ...values,
        name: "admin-noref123",
      });
      console.log("New user added:", newUser);
      // Handle successful user addition (e.g., show success message, redirect)
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  const fields = [
    {
      id: "name",
      label: "name",
      name: "name",
      type: "text",
      placeholder: "Name",
    },
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
      id: "passwordMatch",
      label: "Confirm Password",
      name: "passwordMatch",
      type: "password",
      placeholder: "Enter your password",
    },
    {
      id: "role",
      label: "Role",
      name: "role",
      type: "radio",
      options: [
        { label: "CUSTOMER", value: "CUSTOMER" },
        { label: "ORGANIZER", value: "ORGANIZER" },
      ],
    },
    {
      id: "referralCode",
      label: "Referral Code",
      name: "referralCode",
      type: "text",
      placeholder: "referral code (optional)",
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

import GenericForm from "@/components/Form/GenericForm";
import * as Yup from "yup";

const FormCompleteProfile = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required!!"),
    role: Yup.string()
      .oneOf(["user", "organizer"])
      .required("Role is required!!"),
    referralCode: Yup.string().nullable(),
  });

  const handleSubmit = (values: any) => {
    console.log("Sign in", values);
  };

  const fields = [
    {
      id: "username",
      label: "Username",
      name: "username",
      type: "text",
      placeholder: "Username",
    },
    {
      id: "role",
      label: "Role",
      name: "role",
      type: "radio",
      options: [
        { label: "User", value: "user" },
        { label: "Organizer", value: "organizer" },
      ],
    },
    {
      id: "referralCode",
      label: "Referral Code",
      name: "referralCode",
      type: "text",
      placeholder: "Referral Code",
    },
  ];

  return (
    <GenericForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      fields={fields}
      onSubmit={handleSubmit}
      fieldClass=""
    />
  );
};

export default FormCompleteProfile;

"use client";

import GenericForm from "@/components/Form/GenericForm";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import * as Yup from "yup";

const FormSignIn = () => {
  const router = useRouter();
  const query = useSearchParams();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required!!"),
    password: Yup.string().required("Password required!!"),
  });

  const handleSubmit = async (values: any) => {
    if (!isClient) return;

    const result = await signIn("credentials", {
      username: values.email,
      password: values.password,
      redirect: false,
    });

    if (result?.ok) {
      const callbackUrl = query?.get("callbackUrl");

      if (callbackUrl) {
        router.push(decodeURIComponent(callbackUrl));
      } else {
        router.push("/");
      }
    } else {
      alert("Invalid credentials!!");
    }
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

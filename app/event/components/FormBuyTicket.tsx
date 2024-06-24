import GenericForm from "@/components/Form/GenericForm";
import * as Yup from "yup";

const FormBuyTicket = () => {
  const initialValues = {
    numberTicket: 1,
    discountVoucher: null,
  };

  const validationSchema = Yup.object({
    numberTicket: Yup.number().min(1).required("Required"),
    discountVoucher: Yup.number().optional(),
  });

  const handleSubmit = (values: any) => {
    console.log("Sign in", values);
  };

  const fields = [
    {
      id: "numberTicket",
      label: "Number of Tickets",
      name: "numberTicket",
      type: "number",
      placeholder: "",
    },
    {
      id: "discountVoucher",
      label: "Discount Voucher",
      name: "discountVoucher",
      type: "number",
      placeholder: "Discount Voucher",
    },
  ];

  return (
    <GenericForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      fields={fields}
      onSubmit={handleSubmit}
      fieldClass="rounded-lg py-2 px-4 bg-grey-opacity"
    />
  );
};

export default FormBuyTicket;

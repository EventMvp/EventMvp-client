"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

interface FormField {
  id: string;
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  as?: string;
}

interface GenericFormProps {
  initialValues: any;
  validationSchema: Yup.ObjectSchema<any>;
  onSubmit: (values: any) => void;
  fields: FormField[];
  formTitle: string;
}

const GenericForm: React.FC<GenericFormProps> = ({
  initialValues,
  validationSchema,
  onSubmit,
  fields,
  formTitle,
}) => {
  return (
    <section className="px-4 py-5 flex flex-col items-center text-black">
      <h1 className="text-3xl font-bold">{formTitle}</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <Form className="pt-4 w-full">
          {fields.map((field) => (
            <div key={field.id} className="flex flex-col gap-3 pt-2">
              <label
                htmlFor={field.id}
                className="text-sm font-light text-left pt-4">
                {field.label}
              </label>
              <Field
                id={field.id}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                as={field.as || "input"}
                className="text-black px-4 py-3 rounded-box"
              />
              <ErrorMessage name={field.name} />
            </div>
          ))}
          <div className="pt-5">
            <button
              type="submit"
              className="bg-primary text-white font-extralight text-lg py-2 px-4 mt-8 rounded-box">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default GenericForm;

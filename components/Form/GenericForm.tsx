"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

interface FormField {
  id: string;
  label: string;
  name: string;
  type: string;
  options?: OptionsProps[];
  placeholder?: string;
  as?: string;
}

interface OptionsProps {
  label: string;
  value: string;
}

interface GenericFormProps {
  initialValues: any;
  validationSchema: Yup.ObjectSchema<any>;
  onSubmit: (values: any) => void;
  fields: FormField[];
  fieldClass: string;
}

const GenericForm: React.FC<GenericFormProps> = ({
  initialValues,
  validationSchema,
  onSubmit,
  fields,
  fieldClass,
}) => {
  return (
    <section className="px-4 py-5 flex flex-col items-center text-black">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {({ values }) => (
          <Form className="pt-4 w-full">
            {fields.map((field) => (
              <div key={field.id} className="flex flex-col gap-3 pt-2">
                <label
                  htmlFor={field.id}
                  className="text-sm font-light text-left pt-4">
                  {field.label}
                </label>
                {field.type === "radio" && field.options ? (
                  <div className="flex gap-6">
                    {field.options.map((option) => (
                      <div key={option.value} className="flex">
                        <Field
                          type={field.type}
                          id={option.value}
                          name={field.name}
                          value={option.value}
                          checked={values[field.name] === option.value}
                        />
                        <label htmlFor={option.value} className="pl-2">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                ) : (
                  <Field
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    className={fieldClass}
                  />
                )}
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
        )}
      </Formik>
    </section>
  );
};

export default GenericForm;

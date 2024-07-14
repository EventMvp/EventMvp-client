"use client";

import { createEvent } from "@/api/createEvent";
import { uploadImage } from "@/api/uploadImage";
import { config } from "@/constants/url";
import useEvent from "@/hooks/useEvents";
import {
  CreateEventReqDto,
  initialValueCreateEvent,
  validationSchemaCreateEvent,
} from "@/types/FormCreateEventTypes";
import dayjs from "dayjs";
import { FieldArray, FormikHelpers, FormikProvider, useFormik } from "formik";
import { ChangeEvent, useState } from "react";
import DatePicker from "react-datepicker";
import * as Yup from "yup";

const FormCreateEvent: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const initialValues: CreateEventReqDto = initialValueCreateEvent;

  const validationSchema = Yup.object(validationSchemaCreateEvent);

  const handleImageUpload = async (file: File) => {
    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const resultUrl = await uploadImage(formData);
      console.log("RESULT URL: " + resultUrl.data);
      setImageUrl(resultUrl.data);
      // Use the result directly instead of the state variable
      console.log("IMAGE IS UPLOADED: ", resultUrl.data);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setIsUploading(false);
      console.log("IMAGE URL: ", imageUrl);
    }
  };

  const formatEventData = (values: CreateEventReqDto, image: string) => {
    return {
      ...values,
      picture: image,
      date: dayjs(values.date).format("YYYY-MM-DD"),
      vouchers: values.vouchers.map((voucher) => ({
        ...voucher,
        expiryDate: dayjs(voucher.expiryDate).format("YYYY-MM-DD"),
      })),
    };
  };

  const handleSubmit = async (values: CreateEventReqDto) => {
    const eventData = formatEventData(values, imageUrl);
    console.log("Hit submit formatted", eventData);

    try {
      const createdEvent = await createEvent(eventData);
      console.log("Event Created", createdEvent);
      // Handle success (e.g., show a success message, redirect, etc.)
    } catch (error) {
      console.error("Error creating event:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const file = e.currentTarget.files[0];
      console.log("IMAGE :", file);

      handleImageUpload(file);
    }
  };

  const { categories, isLoading, error } = useEvent();

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700">
            Event Name
          </label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="text-red-600">{formik.errors.title}</div>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700">
            Event Description
          </label>
          <textarea
            id="description"
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="text-red-600">{formik.errors.description}</div>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700">
            Event Date
          </label>
          <DatePicker
            selected={
              formik.values.date ? dayjs(formik.values.date).toDate() : null
            }
            onChange={(date) => {
              formik.setFieldValue(
                "date",
                date ? dayjs(date).format("YYYY-MM-DD") : null
              );
            }}
            dateFormat="yyyy-MM-dd"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
          />
          {formik.touched.date && formik.errors.date ? (
            <div className="text-red-600">{formik.errors.date}</div>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="time"
            className="block text-sm font-medium text-gray-700">
            Event Time
          </label>
          <input
            id="time"
            name="time"
            type="time"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.time}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
          />
          {formik.touched.time && formik.errors.time ? (
            <div className="text-red-600">{formik.errors.time}</div>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700">
            Event Location
          </label>
          <input
            id="location"
            name="location"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.location}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
          />
          {formik.touched.location && formik.errors.location ? (
            <div className="text-red-600">{formik.errors.location}</div>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="categoryId"
            className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="categoryId"
            name="categoryId"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.categoryId}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 text-sm sm:text-base">
            {categories?.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
            {/* Add category options here */}
          </select>
          {formik.touched.categoryId && formik.errors.categoryId ? (
            <div className="text-red-600">{formik.errors.categoryId}</div>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700">
            Event Image
          </label>
          <div className="mt-1 flex flex-col gap-4 items-start">
            <span className="inline-block h-full w-full rounded-lg overflow-hidden bg-gray-100">
              {imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={imageUrl}
                  alt="Event"
                  className="h-full w-full object-cover"
                />
              ) : (
                <svg
                  className="h-full md:h-24 w-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </span>
            <label
              htmlFor="image-upload"
              className="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              {isUploading ? "Uploading..." : "Change"}
            </label>
            <input
              id="image-upload"
              name="image"
              type="file"
              className="sr-only"
              onChange={handleFileChange}
              disabled={isUploading}
            />
          </div>
          {!imageUrl && (
            <p className="mt-2 text-sm text-red-600">
              Please upload an event image
            </p>
          )}
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Ticket Types</h3>
          <FieldArray name="ticketTypes">
            {({ push, remove }) => (
              <div>
                {formik.values.ticketTypes.map((ticket, index) => (
                  <div key={index} className="flex items-center space-x-4 mb-4">
                    <input
                      name={`ticketTypes.${index}.ticketType`}
                      type="text"
                      placeholder="Ticket Type"
                      onChange={formik.handleChange}
                      value={ticket.ticketType}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                    />
                    <input
                      name={`ticketTypes.${index}.availableSeats`}
                      type="number"
                      placeholder="Available Seats"
                      onChange={formik.handleChange}
                      value={ticket.availableSeats || ""}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                    />
                    <input
                      name={`ticketTypes.${index}.price`}
                      type="number"
                      step="0.01"
                      placeholder="Price"
                      onChange={formik.handleChange}
                      value={ticket.price || ""}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                    />
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="text-red-600">
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() =>
                    push({ ticketType: "", availableSeats: 0, price: 0 })
                  }
                  className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md">
                  Add Ticket Type
                </button>
              </div>
            )}
          </FieldArray>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">
            Vouchers (Optional)
          </h3>
          <FieldArray name="vouchers">
            {({ push, remove }) => (
              <div>
                {formik.values.vouchers.map((voucher, index) => (
                  <div key={index} className="flex items-center space-x-4 mb-4">
                    <input
                      name={`vouchers.${index}.name`}
                      type="text"
                      placeholder="Voucher Name"
                      onChange={formik.handleChange}
                      value={voucher.name}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                    />
                    <input
                      name={`vouchers.${index}.discountPercentage`}
                      type="number"
                      placeholder="Discount %"
                      onChange={formik.handleChange}
                      value={voucher.discountPercentage || ""}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                    />
                    <DatePicker
                      selected={
                        voucher.expiryDate
                          ? dayjs(voucher.expiryDate).toDate()
                          : null
                      }
                      onChange={(date) => {
                        formik.setFieldValue(
                          `vouchers.${index}.expiryDate`,
                          date ? dayjs(date).format("YYYY-MM-DD") : null
                        );
                      }}
                      dateFormat="yyyy-MM-dd"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                      placeholderText="Expiry Date"
                    />
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="text-red-600">
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() =>
                    push({ name: "", discountPercentage: 0, expiryDate: null })
                  }
                  className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md">
                  Add Voucher
                </button>
              </div>
            )}
          </FieldArray>
        </div>

        <div>
          <button
            onClick={() => console.log("Submit button clicked")}
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Create Event
          </button>
        </div>
      </form>
    </FormikProvider>
  );
};

export default FormCreateEvent;

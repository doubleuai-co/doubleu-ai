

"use client";

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";


// 1. Define the form values interface
interface ContactFormValues {
  firstName: string;
  lastName: string;
  company: string;
  role: string;
  email: string;
  message: string;
}

// 2. Initial values
const initialValues: ContactFormValues = {
  firstName: "",
  lastName: "",
  company: "",
  role: "",
  email: "",
  message: "",
};

// 3. Yup validation schema
const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  company: Yup.string().required("Company is required"),
  role: Yup.string().required("Role is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
});

// 4. Contact component
const Contact = () => {
  const handleSubmit = (
    values: ContactFormValues,
    { resetForm }: FormikHelpers<ContactFormValues>
  ) => {
    console.log("Form values:", values);
    resetForm();
  };

  return (
    <div className="bg-white text-gray-800 md:pb-18">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white px-4 pt-36 pb-8 text-[#222831] sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center">
          <h1 className="mb-6 pt-10 text-[40px] font-black text-[#222831] md:text-[4rem] leading-tight">
            Talk with our team
          </h1>
          <p className="max-w-sm px-4 text-lg text-gray-600 md:text-xl">
            Have questions? We&apos;re here to help you figure things out.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white px-1 py-5 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl rounded-lg bg-white p-8">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">
                      First Name
                    </label>
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="Enter first name"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 focus:ring-[#7D73C3]"
                    />
                    <ErrorMessage name="firstName" component="div" className="text-sm text-red-600 mt-1" />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">
                      Last Name
                    </label>
                    <Field
                      type="text"
                      name="lastName"
                      placeholder="Enter last name"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 focus:ring-[#7D73C3]"
                    />
                    <ErrorMessage name="lastName" component="div" className="text-sm text-red-600 mt-1" />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700">
                    Company
                  </label>
                  <Field
                    type="text"
                    name="company"
                    placeholder="Enter company name"
                    className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 focus:ring-[#7D73C3]"
                  />
                  <ErrorMessage name="company" component="div" className="text-sm text-red-600 mt-1" />
                </div>

                {/* Role */}
                <div>
                  <label htmlFor="role" className="block text-sm font-semibold text-gray-700">
                    Role
                  </label>
                  <Field
                    type="text"
                    name="role"
                    placeholder="Enter your role"
                    className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 focus:ring-[#7D73C3]"
                  />
                  <ErrorMessage name="role" component="div" className="text-sm text-red-600 mt-1" />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 focus:ring-[#7D73C3]"
                  />
                  <ErrorMessage name="email" component="div" className="text-sm text-red-600 mt-1" />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                    Message
                  </label>
                  <Field
                    as="textarea"
                    name="message"
                    rows={5}
                    placeholder="Leave us a message..."
                    className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 focus:ring-[#7D73C3]"
                  />
                  <ErrorMessage name="message" component="div" className="text-sm text-red-600 mt-1" />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-[#6a5acd] px-12 py-3 text-lg font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:bg-[#9747FF]"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </div>
  );
};

export default Contact;

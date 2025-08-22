"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import axios from "axios";

// 1. Define form values interface
interface ContactFormValues {
  firstName: string;
  lastName: string;
  company: string;
  role: string;
  email: string;
  type: string;
  message: string;
}

// 2. Initial values
const initialValues: ContactFormValues = {
  firstName: "",
  lastName: "",
  company: "",
  role: "",
  email: "",
  type: "General",
  message: "",
};

// 3. Validation
const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  company: Yup.string().required("Company is required"),
  role: Yup.string().required("Role is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  type: Yup.string().required("Type is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

// 4. Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Contact = () => {
  // State to manage submission status (success, error, or null)
  const [submissionStatus, setSubmissionStatus] = useState<
    "success" | "error" | null
  >(null);

  // Handle form submission
  const handleSubmit = async (
    values: ContactFormValues,
    { resetForm, setSubmitting }: FormikHelpers<ContactFormValues>,
  ) => {
    setSubmissionStatus(null); // Reset status on new submission

    // Airtable API configuration
    const AIRTABLE_API_URL =
      "https://api.airtable.com/v0/appiALdFmgtI2q1gn/Leads";
    const AIRTABLE_API_TOKEN =
      "patLJPljtQ0Yeanx5.2d69474b4ca31726fa691d53d165c47c537f7995050d252cc514776386c164fe";

    // Prepare data in the format Airtable expects
    const data = {
      records: [
        {
          fields: {
            First_Name: values.firstName,
            Last_Name: values.lastName,
            Company: values.company,
            Role: values.role,
            Email: values.email,
            Type: values.type,
            Message: values.message,
          },
        },
      ],
    };

    try {
      // Post data to Airtable
      await axios.post(AIRTABLE_API_URL, data, {
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
      });

      // On success
      setSubmissionStatus("success");
      resetForm();
    } catch (error) {
      // On error
      console.error("Airtable submission error:", error);
      setSubmissionStatus("error");
    } finally {
      // Re-enable the submit button
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-gray-800 md:pb-18">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-white px-4 pt-20 text-[#0B0A0A] sm:px-6 md:pt-36 md:pb-8 lg:px-8"
      >
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center md:pt-18">
          <h1 className="mb-6 pt-10 text-[35px] leading-tight font-medium text-[#0B0A0A] md:text-[4rem]">
            Talk with our team
          </h1>
          <p className="max-w-sm px-4 text-lg text-gray-600 md:text-xl">
            Have questions? We&apos;re here to help you figure things out.
          </p>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <section className="bg-white px-1 py-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl rounded-lg bg-white p-8"
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                {/* Name Fields Row */}
                <motion.div
                  custom={0}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-2 gap-4 md:grid-cols-2"
                >
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-normal text-[#0B0A0A]"
                    >
                      First Name
                    </label>
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="Enter first name"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 focus:ring-1 focus:ring-[#9747FF] focus:outline-none"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-normal text-[#0B0A0A]"
                    >
                      Last Name
                    </label>
                    <Field
                      type="text"
                      name="lastName"
                      placeholder="Enter last name"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 focus:ring-1 focus:ring-[#9747FF] focus:outline-none"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>
                </motion.div>

                {/* Other Fields */}
                {[
                  {
                    name: "company",
                    label: "Company",
                    type: "text",
                    placeholder: "Enter company name",
                  },
                  {
                    name: "role",
                    label: "Role",
                    type: "text",
                    placeholder: "Enter your role at the company",
                  },
                  {
                    name: "email",
                    label: "Email",
                    type: "email",
                    placeholder: "Enter email",
                  },
                  {
                    name: "type",
                    label: "Type",
                    type: "select",
                    options: ["Mylo", "Neo", "Agora", "Ehiz", "General"],
                  },
                  {
                    name: "message",
                    label: "Message",
                    type: "textarea",
                    placeholder: "Leave us a message...",
                  },
                ].map((field, index) => (
                  <motion.div
                    key={field.name}
                    custom={index + 1}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                  >
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-normal text-[#0B0A0A]"
                    >
                      {field.label}
                    </label>

                    {field.type === "select" ? (
                      <Field
                        as="select"
                        name={field.name}
                        className="font-inter mt-1 w-full rounded-md border border-gray-300 bg-white px-4 py-3 placeholder-gray-400 focus:ring-1 focus:ring-[#9747FF] focus:outline-none"
                      >
                        {field.options?.map((option) => (
                          <option
                            key={option}
                            value={option}
                            selected={option === "General"}
                          >
                            {option}
                          </option>
                        ))}
                      </Field>
                    ) : (
                      <Field
                        as={field.type === "textarea" ? "textarea" : "input"}
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        rows={field.type === "textarea" ? 5 : undefined}
                        className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 focus:ring-1 focus:ring-[#9747FF] focus:outline-none"
                      />
                    )}

                    <ErrorMessage
                      name={field.name}
                      component="div"
                      className="mt-1 text-sm text-red-600"
                    />
                  </motion.div>
                ))}

                {/* Submission Status Message */}
                {submissionStatus === "success" && (
                  <div className="rounded-md bg-green-100 p-4 text-center text-green-700">
                    Your message has been sent successfully!
                  </div>
                )}
                {submissionStatus === "error" && (
                  <div className="rounded-md bg-red-100 p-4 text-center text-red-700">
                    Something went wrong. Please try again later.
                  </div>
                )}

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-center"
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full cursor-pointer rounded-lg bg-[#7D73C3] px-12 py-3 text-lg font-semibold text-white shadow-xs transition duration-300 ease-in-out hover:bg-[#9747FF] disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </motion.div>
              </Form>
            )}
          </Formik>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;

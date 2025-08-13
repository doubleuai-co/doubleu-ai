'use client';

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';

// 1. Define form values interface
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
  firstName: '',
  lastName: '',
  company: '',
  role: '',
  email: '',
  message: '',
};

// 3. Validation
const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  company: Yup.string().required('Company is required'),
  role: Yup.string().required('Role is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string()
    .min(10, 'Message must be at least 10 characters')
    .required('Message is required'),
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
  const handleSubmit = (
    values: ContactFormValues,
    { resetForm }: FormikHelpers<ContactFormValues>
  ) => {
    console.log('Form values:', values);
    resetForm();
  };

  return (
    <div className="bg-white text-gray-800 md:pb-18">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-white px-4 md:pt-36 pt-20 md:pb-8 text-[#0B0A0A] sm:px-6 lg:px-8"
      >
        <div className="relative z-10 mx-auto md:pt-18 flex max-w-7xl flex-col items-center text-center">
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
                      className="block text-sm font-semibold text-gray-700"
                    >
                      First Name
                    </label>
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="Enter first name"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#9747FF]"
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
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Last Name
                    </label>
                    <Field
                      type="text"
                      name="lastName"
                      placeholder="Enter last name"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#9747FF]"
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
                  { name: 'company', label: 'Company', type: 'text', placeholder:'Enter company name', },
                  { name: 'role', label: 'Role', type: 'text',placeholder:'Enter your role at the company', },
                  { name: 'email', label: 'Email', type: 'email', placeholder:'Enter email', },
                  { name: 'message', label: 'Message', type: 'textarea', placeholder:'Leave us a message...' },
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
                      className="block text-sm font-semibold text-gray-700"
                    >
                      {field.label}
                    </label>

                    <Field
                      as={field.type === 'textarea' ? 'textarea' : 'input'}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder} 
                      rows={field.type === 'textarea' ? 5 : undefined}
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#9747FF]"
                    />
                    <ErrorMessage
                      name={field.name}
                      component="div"
                      className="mt-1 text-sm text-red-600"
                    />
                  </motion.div>
                ))}

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-center"
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full cursor-pointer rounded-lg bg-[#6a5acd] px-12 py-3 text-lg font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:bg-[#9747FF]"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
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
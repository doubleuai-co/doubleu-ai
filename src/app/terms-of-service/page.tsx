"use client";

import { motion } from "framer-motion";

const TermsofService = () => {
  const termsAndConditions = [
    {
      title: "1. Introduction",
      description:
        "Welcome to DoubleU AI. These terms of service explain the rules for using our website and services. By using our platform, you're agreeing to follow these terms.",
    },
    {
      title: "2. Services Provided",
      description:
        "DoubleU AI offers services such as AI Strategy, Autonomous Agent Development, Enterprise Consulting, And Chatbot Solutions. All of which are governed by the terms and conditions detailed in this document.",
    },
    {
      title: "3. Changes to Terms",
      description:
        "We may update these terms at any time. If we make changes, we'll post the updated version on this site. By continuing to use the service after the changes are posted, you agree to the revised terms.",
    },
    {
      title: "4. Account Registration and Use",
      description:
        "Some features of our service may require you to create an account. When doing so, you agree to provide accurate and up-to-date information, and to keep your details updated as needed.",
    },
    {
      title: "5. Privacy Policy",
      description:
        "You can find our privacy policy on our website. It explains how we manage personal data and is part of these terms.",
    },
    {
      title: "6. User Conduct",
      description:
        "You agree to use this service legally and not engage in any unlawful or unauthorized activities while using it.",
    },
    {
      title: "7. Intellectual Property",
      description:
        "All rights to the service and its content belong solely to DoubleU AI or its authorized licensors.",
    },
    {
      title: "8. Third-Party Services",
      description:
        "Our service might include links to third-party websites or services that aren't owned or managed by DoubleU AI. We don't control them and aren't responsible for their content or how they operate.",
    },
    {
      title: "9. Termination",
      description:
        "We reserve the right to suspend or end your access to our service at any time, without notice, especially if you violate these terms.",
    },
    {
      title: "10. Governing Law",
      description:
        "These terms are governed by the laws of Toronto, CA and will be interpreted according to those laws, regardless of any conflicting legal rules.",
    },
    {
      title: "11. Changes to Service",
      description:
        "We reserve the right to withdraw or amend our service, and any service or material we provide via the service, in our sole discretion without notice.",
    },
    {
      title: "12. Disclaimer and Limitation of Liability",
      description:
        'The service and its content are provided "as is," with no guarantees or warranties of any kind. DoubleU AI and its team—including directors, employees, partners, agents, suppliers, and affiliates—will not be held responsible for any indirect, incidental, special, or consequential damages. This includes, but isn\'t limited to, loss of profits, data, usage, goodwill, or other intangible losses that may result from using or being unable to use the service.',
    },
    {
      title: "13. Contact Us",
      description: `For any questions about these terms, please contact us using the following information:\nEmail Address: info@doubleuai.com\nPostal Address: Toronto, CA and Lagos, NG`,
    },
  ];

  return (
    <div className="min-h-screen bg-white py-18">
      <main className="mx-auto max-w-5xl px-8 sm:px-6 md:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 flex-row items-center pt-20 pb-4 md:pb-8"
        >
          <h1 className="mr-4 text-3xl font-bold text-[#000000] md:mr-0 md:text-4xl">
            Terms of service for DoubleU AI
          </h1>
          <p className="pt-2 text-[#404040]">Last updated July 01, 2025</p>
        </motion.div>

        {/* Terms List */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="space-y-8 md:pt-2"
        >
          {termsAndConditions.map((section, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="mb-2 text-2xl font-bold text-[#000000]">
                {section.title}
              </h2>
              <p className="text-base whitespace-pre-line text-[#404040]">
                {section.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default TermsofService;

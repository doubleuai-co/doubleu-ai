"use client";

import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const privacyPolicy = [
    {
      title: "1. Introduction",
      description:
        "Welcome to Doubleu AI. we take your privacy seriously and are dedicated to safeguarding your personal information. This policy outlines how we manage your data in line with Toronto,CA and informs you of your rights when using our website.",
    },
    {
      title: "2. Important Information and Who We Are",
      description:
        "DoubleU AI follows Toronto,CA data protection laws and is responsible for managing and safeguarding your personal information.",
    },
    {
      title: "3. The Data We Collect About You",
      description:
        "The categories of personal data that we collect may include, but are not limited to, identity data, contact data, financial data, transaction data, and technical data.",
    },
    {
      title: "4. How Is Your Personal Data Collected?",
      description:
        "We collect data through your direct use of our website and services, as well as through automated tools that track how you interact with the site.",
    },
    {
      title: "5. How We Use Your Personal Data",
      description:
        "We follow Toronto,CA data protection laws and only use your personal information when it’s legally allowed — such as to fulfill a contract, meet legal requirements, or support legitimate business needs.",
    },
    {
      title: "6. Data Security",
      description:
        "To meet Toronto, CA legal standards, we’ve put strong security measures in place to safeguard your data from unauthorized access, changes, or leaks.",
    },
    {
      title: "7. Data Retention",
      description:
        "We keep personal data only as long as needed to meet the purposes in this policy, in accordance with Toronto,CA laws and regulations.",
    },
    {
      title: "8. Your Legal Rights",
      description:
        "Under Toronto,CA law, you have rights over your personal data — including the ability to access it, make corrections, or ask for it to be deleted.",
    },
    {
      title: "9. International Transfers",
      description:
        "We follow Toronto,CA regulations for transferring personal data internationally, making sure it stays protected and handled in line with Toronto,CA law.",
    },
    {
      title: "10. Third-Party Links",
      description:
        "Our website may contain links to third-party sites we don’t operate. We’re not responsible for their content or how they handle your privacy.",
    },
    {
      title: "11. Contact Details",
      description:
        "For any questions about these terms, please contact us using the following information:\nemail address: info@doubleuai.co\npostal address: Toronto,CA And Lagos, NG",
    },
    {
      title: "12. Changes to the Privacy Policy",
      description:
        "We reserve the right to update this policy at any time. Changes will be posted on this page with an updated revision date.",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-18 md:pt-30 md:pb-50">
       <main className="mx-auto max-w-6xl px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 flex-row items-center md:pb-10 md:mt-10 pb-4 pt-20"
        >
          <h1 className="text-3xl md:text-5xl mr-4 md:mr-0 font-bold text-[#000000]">
            Privacy Policy for DoubleU AI
          </h1>
          <p className="pt-2 text-[#404040]">Last updated July 01, 2025</p>
        </motion.div>

        {/* Policy Content */}
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
          className="space-y-12 md:pt-2"
        >
          {privacyPolicy.map((section, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="mb-5 text-2xl md:text-3xl font-bold text-[#000000]">
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

export default PrivacyPolicy;

"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#F3F3F333] py-2 md:py-4">
      <button
        className="cursor-pointer flex w-full items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm pr-10 md:text-lg font-medium text-white">{question}</span>
        {isOpen ? (
          <div className="p-1 bg-white rounded-lg opacity-80">
            <Minus size={18} className="text-black" />
          </div>
        ) : (
          <Plus size={18} className="text-white" />
        )}
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="overflow-hidden pr-8  text-[#F0F0F0]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <p className="mt-2">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQSection() {
  const faqs = [
    {
      question: "What is DoubleU AI?",
      answer:
        "DoubleU AI is an AI-powered assistant designed to help businesses automate routine tasks, streamline communication, and improve customer experiences across platforms.",
    },
    {
      question: "How can DoubleU AI help my business?",
      answer:
        "DoubleU AI can handle tasks like customer support, appointment scheduling, data collection, and internal operations — freeing up your team to focus on more strategic work.",
    },
    {
      question: "Is DoubleU AI customizable to my business needs?",
      answer:
        "Yes! DoubleU AI is tailored to your brand’s voice, workflows, and goals, so it feels like a seamless part of your team, not just another bot.",
    },
    {
      question: "What platforms does DoubleU AI work on?",
      answer:
        "DoubleU integrates with popular platforms like WhatsApp, email, web chat, and your internal tools. It works where your customers and team already are.",
    },
    {
      question: "How secure is DoubleU AI?",
      answer:
        "Data security is a top priority. We follow best practices in encryption and privacy compliance to ensure your business and customer data stay protected.",
    },
    {
      question: "What kind of support will I get?",
      answer:
        "Our team offers onboarding, training, and ongoing support to make sure DoubleU AI is delivering results. We’re here when you need us.",
    },
  ];

  return (
    <motion.section
      className="bg-[#0B0A0A] px-4 py-20 text-white sm:px-6 md:px-[120px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto max-w-sm lg:max-w-7xl">
        <h2 className="mb-22 lg:mb-12 text-center text-2xl lg:text-4xl font-bold text-white">
          FREQUENTLY ASKED <br /> QUESTIONS
        </h2>

        <div className="space-y-4 space-x-0">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

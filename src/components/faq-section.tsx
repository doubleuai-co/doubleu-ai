"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react"; // Lucide icons for accordion

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-4">
      <button
        className="flex w-full items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        {isOpen ? (
          <Minus size={24} className="text-white" />
        ) : (
          <Plus size={24} className="text-white" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 pr-8 text-base text-gray-400">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQSection() {
  const faqs = [
    {
      question: "What is DoubleU AI?",
      answer:
        "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quo et ducimus expedita repellendus veniam veritatis rem libero consectetur laboriosam voluptas totam animi doloribus tenetur hic consequuntur eligendi provident recusandae.",
    },
    {
      question: "How can DoubleU AI help my business?",
      answer: "lorem",
    },
    {
      question: "Is DoubleU AI customizable to my business needs?",
      answer: "lorem",
    },

    {
      question: "What platforms does DoubleU AI work on?",
      answer: "lorem",
    },

    {
      question: "How secure is DoubleU AI?",
      answer: "lorem",
    },

    {
      question: "What kind of support will I get?",
      answer: "lorem",
    },
  ];

  return (
    <section className="bg-[#0B0A0A] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <h2 className="mb-22 lg:mb-12 text-center text-4xl font-bold text-white">
          FREQUENTLY ASKED <br /> QUESTIONS
        </h2>

        <div className="space-y-4 space-x-0">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

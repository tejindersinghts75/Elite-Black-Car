"use client";
import React, { useState } from "react";

const FaqItem: React.FC<{
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void
}> = ({ question, answer, isOpen, onClick }) => (
    <div className="faq-item border-b text-white border-white/5 py-4">
        <div
            className="faq-question cursor-pointer flex justify-between items-center"
            onClick={onClick}
        >
            <h6 className="text-[26px] font-semibold">{question}</h6>
            <span className="text-[20px]">{isOpen ? "-" : "+"}</span>
        </div>
        <div
            className={`faq-answer transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                }`}
        >
            <p className="mt-2 body-text">{answer}</p>
        </div>
    </div>
);

const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqData = [
        {
            question: "What services do your luxury cabs offer?",
            answer:
                "Travel confidently knowing your safety is our #1 priority. Rigorous health and cleaning standards round out a best- class service.",
        },
        {
            question: "How do I book a ride?",
            answer:
                "You can book a cab through our website, mobile application, or by calling our customer support line.",
        },
        {
            question: "What types of vehicles are available in your fleet?",
            answer:
                "Yes, all our drivers are professionally trained and undergo rigorous background checks to ensure passenger safety and comfort.",
        },
        {
            question: "How do I book a ride?",
            answer:
                "Yes, our services are available 24/7 to meet your transportation needs at any time of the day or night.",
        },
        {
            question: "What types of vehicles are available in your fleet?",
            answer:
                "We accept multiple payment options including credit/debit cards, online wallets, and cash payments.",
        },
    ];

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle open/close
    };

    return (
        <div className="faq bg-dark px-8 py-28">
            <div className="container mx-auto ">
                <div className="grid items-center lg:gap-[200px] gap-[50px] md:grid-cols-2">
                    <div className="">
                        <h3 className="text-white mb-10"><span className="text-yellow">Frequently</span><br /> Asked Questions</h3>
                        <div className="faq-list grid ">
                            {faqData.map((faq, index) => (
                                <FaqItem
                                    key={index}
                                    question={faq.question}
                                    answer={faq.answer}
                                    isOpen={openIndex === index}
                                    onClick={() => handleToggle(index)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="faq-heading text-white md:block hidden">
                        <h2 className="text-[48px] leading-[48px]">ELITE <br /><span className="text-yellow text-[155px] leading-[155px]">BLACK </span> <br /><span className="block text-end">CAR</span></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;

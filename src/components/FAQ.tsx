
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long are tutoring sessions and how often do we meet?",
      answer: "Sessions are typically 60-90 minutes long, depending on your needs. Most students meet weekly, but we can adjust the frequency based on your timeline and goals. For intensive test prep, some students prefer twice-weekly sessions."
    },
    {
      question: "What is your pricing structure?",
      answer: "I offer flexible packages to fit different budgets and needs. Individual sessions start at $150/hour, with package discounts available. College counseling packages range from $2,500-$7,500 depending on the level of support. We'll discuss pricing during your free consultation to find the best fit."
    },
    {
      question: "Do you work with students remotely or only in-person?",
      answer: "I offer both in-person and virtual sessions via Zoom. Many of my students actually prefer virtual sessions for the convenience and flexibility. All my materials and resources are easily shared digitally, making remote learning just as effective."
    },
    {
      question: "What's your cancellation policy?",
      answer: "I require 24 hours notice for session cancellations. With adequate notice, we can reschedule without penalty. Emergency cancellations are handled on a case-by-case basis, and I'm always understanding of genuine emergencies."
    },
    {
      question: "How far in advance should students start working with you?",
      answer: "For college counseling, I recommend starting in sophomore or junior year of high school. For test prep, 3-6 months before your target test date is ideal. However, I've successfully worked with students on shorter timelines when needed."
    },
    {
      question: "What technology or materials do I need?",
      answer: "For virtual sessions, you'll need a reliable internet connection and a device with a camera. I provide all study materials, practice tests, and resources. For SAT/ACT prep, I recommend having the official prep books, which I can help you obtain."
    },
    {
      question: "Do you guarantee score improvements or college acceptances?",
      answer: "While I can't guarantee specific outcomes, I have a 98% success rate of students achieving their target scores or getting into their preferred schools. Success depends on student commitment and following the personalized plan we create together."
    },
    {
      question: "Can you help with scholarship applications?",
      answer: "Absolutely! Scholarship guidance is included in my college counseling services. I help identify relevant scholarships, perfect application essays, and prepare for scholarship interviews. Many of my students receive significant merit-based awards."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about working together to achieve your academic goals
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-border rounded-xl overflow-hidden bg-card shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-primary pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <div className="pt-2 border-t border-border">
                      <p className="text-foreground/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

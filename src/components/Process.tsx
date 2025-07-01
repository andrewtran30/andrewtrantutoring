import React from 'react';
import { Link } from 'react-router-dom';

const Process = () => {
  const steps = [
    {
      title: 'Free Consultation',
      description:
        'I start with a comprehensive 30-minute conversation to understand your goals, challenges, and current academic situation.',
    },
    {
      title: 'Personalized Plan',
      description:
        'Based on our consultation, I create a customized roadmap tailored specifically to your needs and timeline.',
    },
    {
      title: 'Regular Sessions',
      description:
        'One-on-one sessions with continuous support, practice materials, and detailed feedback on your progress.',
    },
    {
      title: '24/7 Continuous Support',
      description:
        "Throughout your preparation, I'll be available 24/7 to help you navigate applications, interviews, and questions until you're confidently headed to your dream school.",
    },
  ];

  return (
    <section id="process" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-medium text-foreground mb-8">
            How It Works
          </h2>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </div>
                <div className="pb-8 border-b border-border last:border-b-0 last:pb-0 flex-1">
                  <h3 className="text-lg font-medium text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link to="/contact" className="btn-primary">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

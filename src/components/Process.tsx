import React from 'react';
import { Link } from 'react-router-dom';

const Process = () => {
  const steps = [
    {
      title: 'Free Consultation',
      description:
        'I start with a comprehensive 30-minute conversation to understand your goals, challenges, and current academic situation. This is where you can ask me any questions you have about the process, my approach, and how I can help you succeed. If you decide to move forward, I will send you an onboarding document prior to our first meeting.',
    },
    {
      title: 'Personalized Plan',
      description:
        'If you decide to move forward, I create a customized roadmap tailored specifically to your needs and timeline based on your consultation. For college counseling, this includes a detailed college list strategy, a cohesive narrative strategy throughout your application, and tangible deadlines until you submit. For SAT prep, this includes a personalized study plan with practice tests, homework assignments, and progress tracking.',
    },
    {
      title: 'Regular Sessions',
      description:
        'We will have one-on-one sessions with continuous support, practice materials, and detailed feedback on your progress. For college counseling, this will vary based on your needs, but typically includes weekly or bi-weekly sessions to review essays, applications, and interview prep. This also includes strategies on getting recommendations and building an overall narrative. For SAT prep, this includes weekly sessions focused on practice tests, homework assignments, and targeted skill-building.',
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

          <a
            href="https://calendly.com/andrewhtrantutoring/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-block"
          >
            Book Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;

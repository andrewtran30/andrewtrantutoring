import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Test Prep',
      approach:
        'I take a hands-on, strategic approach to test prep—starting with diagnostic and full-length practice tests, followed by detailed reviews to uncover patterns and target areas of improvement. Each student receives tailored homework, curated practice problems, and 1-on-1 support.',
      description: [
        'SAT/ACT prep',
        'SSAT (Secondary School Admissions Test) prep',
        'PSAT/NMSQT',
        'IAAT (Iowa Algebra Aptitude Test)',
        '24/7 Text/Email support',
      ],
    },
    {
      title: 'College Counseling',
      approach:
        'I am more than just an essay editing service. I provide personalized guidance for every step of the college application process, creating a detailed plan with each student on selecting schools, crafting personalized narratives, and developing the entire college application.',
      description: [
        'Common App and Coalition App Essay editing',
        'Supplemental Essay guidance',
        'Ivy League and top-tier college admissions strategies',
        'Scholarship & Personal Statement writing',
      ],
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-medium text-foreground mb-8">
            Services
          </h2>

          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="pb-8 border-b border-border last:border-b-0 last:pb-0"
              >
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {service.title}
                </h3>

                {service.approach && (
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    {service.approach}
                  </p>
                )}

                {/* Conditional pricing line only for Test Prep */}
                {service.title === 'Test Prep' && (
                  <p className="text-foreground font-semibold mb-3">
                    Test Prep services start at <strong>$50/hour</strong>.
                  </p>
                )}

                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  {service.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-sm w-full">
          {/* Basic Plan */}
          <div className="bg-white rounded-xl border shadow p-6 flex flex-col items-center w-full">
            <div className="text-cyan-700 text-xs font-semibold uppercase tracking-wide mb-1">
              Essentials Plan
            </div>
            <div className="text-4xl font-bold mb-2">$149</div>
            <hr className="w-full border-gray-300 mb-4" />
            <ul className="space-y-2 text-muted-foreground text-sm text-center">
              <li>✔️ 5 Essay Edits</li>
              <li>✔️ 5 Live 1:1 Sessions</li>
              <li>✔️ College or Coalition App Review</li>
              <li>✔️ Text/email support until Nov 1</li>
              <li>✔️ Limited time offer</li>
            </ul>
          </div>

          {/* Standard Plan */}
          <div className="bg-white rounded-xl border shadow p-6 flex flex-col items-center w-full">
            <div className="text-indigo-700 text-xs font-semibold uppercase tracking-wide mb-1">
              Focused Plan
            </div>
            <div className="text-4xl font-bold mb-2">$249</div>
            <hr className="w-full border-gray-300 mb-4" />
            <ul className="space-y-2 text-muted-foreground text-sm text-center">
              <li>✔️ 10 Essay Edits</li>
              <li>✔️ 10 Live 1:1 Sessions</li>
              <li>✔️ Comprehensive Common/Coalition app Review</li>
              <li>✔️ Priority Text/email support until Jan 1</li>
              <li>✔️ Limited time offer</li>
            </ul>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-xl border shadow p-6 flex flex-col items-center w-full">
            <div className="text-orange-700 text-xs font-semibold uppercase tracking-wide mb-1">
              ELITE PLAN
            </div>
            <div className="text-4xl font-bold mb-2">VARIES</div>
            <hr className="w-full border-gray-300 mb-4" />
            <ul className="space-y-2 text-muted-foreground text-sm text-center">
              <li>✔️ Unlimited Essay Editing</li>
              <li>✔️ Unlimited Live 1:1 Sessions</li>
              <li>✔️ Personalized roadmap & College list strategy </li>
              <li>✔️ Parent Check-ins + Goal Alignment Meetings</li>
              <li>✔️ Priority text/email support until Jan 1</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <p>
            Contact me at{' '}
            <strong style={{ color: '#1A237E' }}>571-290-8324</strong> or{' '}
            <strong style={{ color: '#1A237E' }}>
              andrewhtrantutoring@gmail.com
            </strong>{' '}
            to schedule a free consultation today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

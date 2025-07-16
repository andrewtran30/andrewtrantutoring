import React from 'react';

const testimonials = [
  {
    name: 'Rohan C.',
    text: 'Andrew helped me improve my SAT score from 1200 to 1440 in just 3 months! He helped me break down difficult topics simply, which helped me with my math section a lot.',
  },
  {
    name: 'Jason T.',
    text: 'From day one, Andrew was patient, candid, and insightful. He helped me with the hardest part: starting. Writing the supplementals and personal statement felt impossible at first, but his coaching helped me convey my unique story. Ultimately, I was accepted to Vanderbilt, and I genuinely believe Andrew played a big role in that!',
  },
  {
    name: 'Kim N.',
    text: "Andrew's approach to college counseling was super helpful. Creating the life map made the process of writing supplemental essays so much smoother, and he was so nice to work with and told me exactly what to look out for while writing essays to each school.",
  },
  {
    name: 'Quan T.',
    text: 'It felt like Andrew was my personal guidance counselor throughout the entire college app process. He responded to all my questions, even if they were short and seemingly insignificant. I felt so much more confident submitting my application, and I was able to get into Dartmouth!',
  },
  {
    name: 'Chloe B.',
    text: 'His 1:1 sessions were always tailored to exactly what I needed. I never felt like I was getting generic advice. His life map activity at the beginning helped me figure out what I wanted to write about, and it gave me direction for both my main Common App essay and supplemental essays.',
  },
];

const About = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-medium text-foreground mb-8">
            About Me
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I'm a committed{' '}
              <strong style={{ color: '#1A237E' }}>SAT tutor</strong> and{' '}
              <strong style={{ color: '#1A237E' }}>college counselor</strong>{' '}
              with{' '}
              <strong style={{ color: '#1A237E' }}>
                4+ years of experience
              </strong>
              . I scored a 1550 on the SAT and emphasize smart test-taking
              strategies—like time management, question prioritization, and
              pattern recognition—so students see real improvement, fast. I've
              also helped students get into schools like Stanford, UPenn, and
              UMichigan. Whether you’re aiming for a top-tier college or simply
              want to boost your score, I’m here to help you reach your goals
              with clarity, confidence, and care.
            </p>

            <p>
              I have a{' '}
              <strong style={{ color: '#1A237E' }}>proven track record</strong>{' '}
              of helping students increase their test scores and getting
              students accepted into their top-choice schools. I specialize in
              helping students discover their unique strengths, craft compelling
              personal narratives, and develop test-taking strategies that
              actually work. Regardless if you're applying to colleges or trying
              to improve test scores, my approach is{' '}
              <strong style={{ color: '#1A237E' }}>1:1 personalized</strong> and
              tailored to each student's unique needs. I create individualized
              plans that focus on your strengths and weaknesses, ensuring you
              get the most out of our time together.
            </p>
          </div>

          <a
            href="https://calendly.com/andrewhtrantutoring/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-block"
          >
            Book Free Consultation
          </a>

          {/* Testimonials Section */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              What Students Say
            </h3>
            <div className="overflow-x-auto">
              <div className="flex gap-4 pb-4">
                {testimonials.map((t, index) => (
                  <div
                    key={index}
                    className="min-w-[280px] bg-muted p-4 rounded-xl shadow-sm border border-border"
                  >
                    <h4 className="font-medium text-foreground mb-2">
                      {t.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{t.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 mt-12 pt-8 border-t border-border">
            <div>
              <h3 className="font-medium text-foreground mb-2">Test Scores</h3>
              <p className="text-sm text-muted-foreground">
                On average, 85% of students see a{' '}
                <strong style={{ color: '#1A237E' }}>
                  120+ point increase on the SAT, averaging a score of 1430.
                </strong>
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">
                Admissions Results
              </h3>
              <p className="text-sm text-muted-foreground">
                90% of students accepted to their top-choice schools, including{' '}
                <strong style={{ color: '#1A237E' }}>
                  Stanford, UPenn, and UVA.
                </strong>
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">
                Personal Results
              </h3>
              <p className="text-sm text-muted-foreground">
                Scored a 1550 on the SAT and accepted into multiple Ivy League
                schools, Duke, Michigan Ross, and UVA.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">
                Scholarship Results
              </h3>
              <p className="text-sm text-muted-foreground">
                Students receive approximately{' '}
                <strong style={{ color: '#1A237E' }}>
                  $100,000+ in scholarships
                </strong>{' '}
                annually.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

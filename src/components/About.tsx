import React from 'react';

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
              I'm an committed{' '}
              <strong style={{ color: '#1A237E' }}>SAT tutor</strong> and{' '}
              <strong style={{ color: '#1A237E' }}>college counselor</strong>{' '}
              with{' '}
              <strong style={{ color: '#1A237E' }}>
                4+ years of experience
              </strong>
              . I scored a 1550 on the SAT and emphasize smart test-taking
              strategies—like time management, question prioritization, and
              pattern recognition—so students see real improvement, fast.
              Whether you’re aiming for a top-tier college or simply want to
              boost your score, I’m here to help you reach your goals with
              clarity, confidence, and care.
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
            {/* 
            <p>
              When I'm not working with students, you'll find me hiking local
              trails, reading the latest education research, or volunteering at
              community literacy programs. I believe that education should be
              accessible to everyone, and I'm passionate about helping students
              from all backgrounds achieve their goals.
            </p> */}
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
                  UPenn, UVA, and UC Berekely.
                </strong>
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">
                Personal Results
              </h3>
              <p className="text-sm text-muted-foreground">
                Scored a 1550 on the SAT and accepted into Brown, Duke, Michigan
                Ross, and UVA.
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

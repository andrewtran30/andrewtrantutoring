import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container-custom">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-medium text-foreground mb-6 leading-tight">
            Hi, I'm Andrew.
          </h1>

          {/* <p className="text-xl text-muted-foreground mb-8 leading-relaxed"></p> */}

          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            I am an SAT tutor and college prep counselor with{' '}
            <strong style={{ color: '#1A237E' }}>4+ years of experience</strong>{' '}
            based in Northern Virginia, and I help students improve their test
            scores and craft standout college applications. I graduated from the{' '}
            <strong style={{ color: '#1A237E' }}>University of Virginia</strong>{' '}
            with high distinction, receiving a Bachelor's Degree in Computer
            Science and Applied Statistics. Before choosing UVA, I was fortunate
            to be accepted to several top universities, including{' '}
            <strong style={{ color: '#1A237E' }}>
              multiple Ivy League schools, Duke University, University of
              Michigan (Ross), and more
            </strong>
            . I bring this firsthand experience into my college counseling work,
            along with tailored SAT prep. Contact me at{' '}
            <strong style={{ color: '#1A237E' }}>571-290-8324</strong> or{' '}
            <strong style={{ color: '#1A237E' }}>
              andrewhtrantutoring@gmail.com
            </strong>{' '}
            to schedule a free consultation today!
          </p>

          <a
            href="https://calendly.com/andrewhtrantutoring/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

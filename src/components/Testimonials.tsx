
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Emily Chen",
      school: "Stanford University",
      year: "Class of 2027",
      quote: "Sarah helped me raise my SAT score by 340 points and guided me through crafting essays that truly reflected who I am. I couldn't have gotten into Stanford without her expertise and encouragement.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      school: "MIT",
      year: "Class of 2026",
      quote: "The personalized approach Sarah took with my college applications made all the difference. She helped me identify my strengths and present them in a way that stood out to admissions committees.",
      rating: 5
    },
    {
      name: "Aisha Patel",
      school: "Harvard University",
      year: "Class of 2027",
      quote: "Working with Sarah was transformative. She didn't just help me with test prep and applications – she helped me discover what I was truly passionate about and how to communicate that effectively.",
      rating: 5
    },
    {
      name: "David Kim",
      school: "UC Berkeley",
      year: "Class of 2025",
      quote: "Sarah's academic coaching completely changed how I approach studying. The time management and organization skills she taught me have been invaluable throughout college.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Student Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from students who've achieved their college dreams with personalized guidance
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="testimonial-card text-center p-8 md:p-12">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-primary">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].school} • {testimonials[currentIndex].year}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

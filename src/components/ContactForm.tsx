import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // add this at the top

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      subject: 'POTENTIAL STUDENT',
    };

    try {
      const result = await emailjs.send(
        'service_3iqm258', // e.g., 'service_abc123'
        'template_9lwvvh9', // e.g., 'template_xyz789'
        templateParams,
        'ux7rM5nOVLLaiBNSG' // e.g., 'ZQ56K...'
      );

      console.log('Email sent:', result.text);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert(
        'There was an error sending your message. Please try again or contact me directly at andrewhtrantutoring@gmail.com'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-medium text-foreground mb-8">
            Get in Touch
          </h2>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            Ready to take the next step? Let's discuss your goals and create a
            personalized plan for your success. Every consultation is completely
            free, with no obligation to continue.
          </p>

          {isSubmitted ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-foreground mb-2">
                Thank You!
              </h3>
              <p className="text-muted-foreground">
                Your message has been sent. I'll get back to you within 24 hours
                to schedule your free consultation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors disabled:opacity-50"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors disabled:opacity-50"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none disabled:opacity-50"
                  placeholder="Tell me about your goals, current situation, or any questions you have..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}

          <div className="mt-12 pt-8 border-t border-border space-y-4 text-sm text-muted-foreground">
            <div>
              <span className="font-medium text-foreground">Email:</span>{' '}
              andrewhtrantutoring@gmail.com
            </div>
            <div>
              <span className="font-medium text-foreground">Phone:</span> (571)
              290-8324
            </div>
            <div>
              <span className="font-medium text-foreground">Location:</span>{' '}
              Northern Virginia / Washington, D.C. area
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

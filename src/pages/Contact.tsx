
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;

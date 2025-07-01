
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Process from '../components/Process';

const ProcessPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Process />
      </main>
      <Footer />
    </div>
  );
};

export default ProcessPage;

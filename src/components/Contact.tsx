
import React from 'react';
import ContactHeader from './contact/ContactHeader';
import ContactInfo from './contact/ContactInfo';
import ContactCTA from './contact/ContactCTA';

const Contact = () => {
  return (
    <section className="py-24 md:py-32" id="contact">
      <div className="container">
        <ContactHeader />

        <div className="glass-panel p-8 md:p-10 max-w-3xl mx-auto">
          <h3 className="text-2xl font-medium mb-6">Contact Information</h3>
          <ContactInfo />
          <ContactCTA />
        </div>
      </div>
    </section>
  );
};

export default Contact;

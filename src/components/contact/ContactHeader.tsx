
import React from 'react';

const ContactHeader = () => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
        Get In Touch
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-balance">
        Let's <span className="text-gradient">Connect</span>
      </h2>
      <p className="text-lg text-foreground/70 text-balance">
        Have a project in mind or interested in exploring data engineering solutions? Feel free to reach out. I'm always open to discussing new opportunities and challenges.
      </p>
    </div>
  );
};

export default ContactHeader;

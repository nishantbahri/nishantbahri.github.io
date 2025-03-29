
import React from 'react';
import { Button } from '@/components/ui/button';

const ContactCTA = () => {
  return (
    <div className="mt-10 text-center">
      <h3 className="text-xl font-medium mb-3">Open to New Opportunities</h3>
      <p className="text-foreground/70 mb-6">Interested in discussing data engineering projects and challenges.</p>
      <Button 
        variant="outline" 
        className="button-hover rounded-full px-6 py-2"
        asChild
      >
        <a href="https://www.linkedin.com/in/nishant-bahri/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
      </Button>
    </div>
  );
};

export default ContactCTA;

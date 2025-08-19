import React from 'react';
import TitleRow from '../components/TitleRow';
import ContactForm from '../components/ContactForm';
import TextContainer from '../components/TextContainer';

function Contact() {
  return (
    <div>
      <TitleRow title="Contact" />
      <TextContainer center="true">
        <p>📞   --> Just callllll me, don't be afraid you can calllll me.</p>
        <p>(415) 368 1448</p>
      </TextContainer>
      <ContactForm />
    </div>
  );
}

export default Contact;

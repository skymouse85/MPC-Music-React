import React from 'react';
import TitleRow from '../components/TitleRow';
import TextContainer from '../components/TextContainer';

function Contact() {
  return (
    <div>
      <TitleRow title="Contact"/>
      <TextContainer center="true">
        <p>📞   --> Just callllll me, don't be afraid you can calllll me.</p>
        <p>markmclifford@gmail.com</p>
        <p>(415) 368 1448 </p>
      </TextContainer>
    </div>
  );
}

export default Contact;

import React from 'react';
import TitleRow from '../components/TitleRow';
import TextContainer from '../components/TextContainer';

function Bio() {
  return (
    <>
    
    <div>
      <TitleRow title="Biography"/>
      <TextContainer center="true" >
        <p>Learn everything there is to know about me.</p>
      </TextContainer>
      
    </div>
    </>
  );
}

export default Bio;

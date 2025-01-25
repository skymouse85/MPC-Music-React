import React from 'react';
import TitleRow from '../components/TitleRow';
import TextContainer from '../components/TextContainer';
import ShortBio from '../components/ShortBio'

function Bio() {
  return (
    <>
    
    <div>
      <TitleRow title="Biography"/>
      <TextContainer center="true" >
        <p>Learn everything there is to know about me, starting with this short bio.</p>
        
      </TextContainer>
      <ShortBio></ShortBio>
      
    </div>
    </>
  );
}

export default Bio;

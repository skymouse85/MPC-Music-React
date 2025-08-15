import React from 'react';
import TitleRow from '../components/TitleRow';
import TextContainer from '../components/TextContainer';
import ShortBio from '../components/bio/ShortBio'
import LongBio from '../components/bio/LongBio';

function Bio() {
  return (
    <>

      <div>
        <TitleRow title="Biography" />
        <TextContainer center="true" >
          <h2>Short Bio</h2>
        </TextContainer>
        <ShortBio></ShortBio>
        <TextContainer center="true">
          <h2>Long Bio</h2>
        </TextContainer>
        <LongBio></LongBio>
      </div>
    </>
  );
}

export default Bio;

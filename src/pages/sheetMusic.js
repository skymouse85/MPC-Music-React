import React from 'react';
import TitleRow from '../components/TitleRow';
import TextContainer from '../components/TextContainer';

function SheetMusic() {
  return (
    <div>
      <TitleRow title="Scores & Parts"/>
      <TextContainer center="true">
        <p>I keep all of my scores and parts here for band members and curious folks.</p>
        
        
      </TextContainer>
    </div>
  );
}

export default SheetMusic;


//!TODO research Folder Creation and PDF hosting
// Make a score object to iterate over
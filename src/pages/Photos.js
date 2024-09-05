import React from 'react';
import TitleRow from '../components/TitleRow';
import TextContainer from '../components/TextContainer';

function Photos() {
  return (
    <div>
      <TitleRow title="Photos"/>
      <TextContainer center="true">
        <p>Feel Free to use any of these photos. Be sure to credit the photographer!</p>
      </TextContainer>
    </div>
  );
}

export default Photos;

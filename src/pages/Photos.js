import React from 'react';
import TitleRow from '../components/TitleRow';
import TextContainer from '../components/TextContainer';
import PhotoGallery from '../components/PhotoGallery';

function Photos() {
  return (
    <div>
      <TitleRow title="Photos" />
      <TextContainer center="true">
        <p>Feel free to use any of these photos. Please credit photographers!</p>
        {/* <p>Credit Lenny Gonzalez for all outdoor photos</p>
        <p>Credit Ginger Fierstein for all recording session photos</p> */}
      </TextContainer>
      <PhotoGallery />
    </div>
  );
}

export default Photos;

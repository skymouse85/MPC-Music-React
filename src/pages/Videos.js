import React from 'react';
import TitleRow from '../components/TitleRow';
import TextContainer from '../components/TextContainer';
import VideoGallery from '../components/VideoGallery';

function Videos() {
  return (
    <div>
      <TitleRow title="Moving Images" />
      <TextContainer center="true">
        <p>Watch.</p>
      </TextContainer>
      <VideoGallery />
    </div>
  );
}

export default Videos;

import React from 'react';
import TitleRow from '../components/TitleRow';
import TextContainer from '../components/TextContainer';
import SortedDiscography from '../components/DiscogList';


function Discography() {
    return (
        <>
            <div>
            <TitleRow title="Discography"/>
      <TextContainer center="true" >
        <p>I am working on completing my discography as it currently stands.</p>
        <p>If I have contributed to a record and you don't see it listed here, please reach out to me at markmclifford@gmail.com.</p>
        <SortedDiscography/>
      </TextContainer>
            </div>
        </>
    );
}

export default Discography; 
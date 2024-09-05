import React from "react";
import styled from "styled-components";
import TextContainer from "./TextContainer";

const BioText = styled.p`
  font-size: 20 px; // Example of local component-specific style

`;


function ShortBio() {
    return (
        <TextContainer>
            <p>
            Mark Pascucci-Clifford is a vibraphonist, composer, percussionist, pianist, educator, and producer based in Oakland, CA. A much sought-after performer and improviser, he is deeply involved in new music, jazz, free improvisation, classical music, and indie rock. Along with composing for and leading his own group, 'The Dirty Snacks Ensemble,' Pascucci-Clifford participates in multiple longstanding musical projects across the Bay Area and the US. In demand as a recording musician and arranger, his playing can be heard on over 30 records to date. His performance experience spans worldwide, and he has had the honor of playing alongside an array of master musicians, including Jeff Parker, Kjell Nordeson, Lisa Mezzacappa, Scott Amendola, Ches Smith, Fred Frith, Joan La Barbara, Vinny Golia, Aram Shelton, Colin Stranahan, Jordan Glenn, Rent Romus, and Ron Miles. He has also performed with The Colorado Symphony Orchestra, So Percussion, sfSound, and the Oakland Active Orchestra.


            </p>
        </TextContainer>
    );
}


export default ShortBio;
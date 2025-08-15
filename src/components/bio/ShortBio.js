import React from "react";
import { BioContainer, BioText, BioP } from "./SharedBioStyles";

function ShortBio() {
    return (
        <BioContainer>
            <BioText>
                <BioP>
                    <strong>Mark Pascucci-Clifford</strong> is a vibraphonist, composer, percussionist, pianist, educator, and producer based in Oakland, CA.
                </BioP>
                <BioP>
                    A much sought-after performer and improviser, he is deeply involved in new music, jazz, free improvisation, classical music, and indie rock. Along with composing for and leading his own group, <em>The Dirty Snacks Ensemble</em>—whose 2022 release <em>You Would Do Well</em> was named “One of the Best of 2022” by Andy Gilbert of the <em>Classical Voice</em> and which headlined the 2024 Outsound Summit—Pascucci-Clifford participates in multiple longstanding musical projects across the Bay Area and the U.S.
                </BioP>
                <BioP>
                    Recent highlights include his 2025 debut at The Stone in New York City with Lisa Mezzacappa’s 5ish. In demand as a recording musician and arranger, his playing can be heard on over 30 records to date. His performance experience spans worldwide, and he has had the honor of playing alongside Lisa Mezzacappa, Scott Amendola, Fred Frith, Jeff Parker, Kjell Nordeson, Ches Smith, Joan La Barbara, Vinny Golia, Aram Shelton, Colin Stranahan, Jordan Glenn, Rent Romus, and Ron Miles, and he has performed with The Colorado Symphony Orchestra, So Percussion, sfSound, and Oakland Active Orchestra.
                </BioP>
            </BioText>
        </BioContainer>
    );
}

export default ShortBio;

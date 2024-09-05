import React from 'react';
import styled from 'styled-components';
import IconLink from './IconLink';
import TextContainer from './TextContainer';

import FaceBookIcon from '../assets/icons/facebook.svg';
import InstagramIcon from '../assets/icons/instagram.svg';
import SpotifyIcon from '../assets/icons/spotify.svg';
import YoutubeIcon from '../assets/icons/youtube.svg';
import TwitterIcon from '../assets/icons/twitter.svg';
import BandcampIcon from '../assets/icons/Bandcamp-button-bc-circle-black.svg';

const StyledFooter = styled.footer`
    background-color: var(--background-primary);
    color: var(--text-primary);
    width: 100%;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 35px;
     border-top: 1px solid #003049;
`;

const LinksRow = styled.div`
    display: flex;
    justify-content: center; 
    gap: 20px;  // Controls spacing between icons
`;

const FooterText = styled.p`
    font-size: 13px;
    margin: 10px 0;  // Adds vertical spacing for better readability
`;

function Footer() {
    return (
        <StyledFooter>
            <LinksRow>
                <IconLink href="https://thedirtysnacksensemble.bandcamp.com/" icon={BandcampIcon} title="Bandcamp" target='_blank' rel='noopener noreferrer'/>
                <IconLink href="https://www.instagram.com/mouscula/" icon={InstagramIcon} title="Instagram" target='_blank' rel='noopener noreferrer'/>
                <IconLink href="https://www.youtube.com/channel/UCuDnMBfi1ekE27boAVWvYpA/videos" icon={YoutubeIcon} title="YouTube" target='_blank' rel='noopener noreferrer'/>
                <IconLink href="https://open.spotify.com/artist/6xdTr1mJIaRT754Hbyvl19?si=6fEdAqrjSRWUFVHr77J6HQ" icon={SpotifyIcon} title="Spotify" target='_blank' rel='noopener noreferrer'/>
                <IconLink href="https://twitter.com/markmclifford" icon={TwitterIcon} title="Twitter" target='_blank' rel='noopener noreferrer'/>
                <IconLink href="https://www.facebook.com/mark.clifford.714/" icon={FaceBookIcon} title="Facebook" target='_blank' rel='noopener noreferrer'/>
            </LinksRow>
            <TextContainer center="true" >
                <FooterText>All rights reserved. Mark Pascucci-Clifford ©2024</FooterText>
                <FooterText>Featured Photography: Lenny Gonzalez</FooterText>
                <FooterText>Web Design: Mark Pascucci-Clifford</FooterText>
            </TextContainer>
        </StyledFooter>
    );
}

export default Footer;

import React from 'react';
import styled from 'styled-components';
import IconLink from './IconLink';
import TextContainer from './TextContainer';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import FaceBookIcon from '../srcAssets/icons/facebook.svg';
import InstagramIcon from '../srcAssets/icons/instagram.svg';
import SpotifyIcon from '../srcAssets/icons/spotify.svg';
import YoutubeIcon from '../srcAssets/icons/youtube.svg';
import TwitterIcon from '../srcAssets/icons/twitter.svg';
import BandcampIcon from '../srcAssets/icons/Bandcamp-button-bc-circle-black.svg';

const StyledFooter = styled.footer`
    background-color: var(--background-primary);
    color: var(--text-primary);
    width: 100%;
    padding: 20px 0;
    display: grid;
    // grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    // align-items: start;
    margin-top: 35px;
    border-top: 1px solid #003049;
`;

const SiteLinksWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Three columns for links */
    gap: 1rem;
    padding: 10px;
    // margin-left: 1.25rem;
`;

const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-left: 1.50rem;
    justify-content: center; 
    align-items: center;
    height: 100%;
`;

const FooterLink = styled(Link)`
    font-size: 14px;
    font-family: 'raleway', sans-serif;
    margin: 0;
    cursor: pointer;
    text-decoration: none;
    color: var(--text-primary);

    &:hover {
        text-decoration: underline;
        color: var(--accent-primary);
    }
`;

const LinksRow = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`;

const FooterText = styled.p`
    font-size: 13px;
    margin: 10px 0; // Adds vertical spacing for better readability
    text-align: center;
`;

//TODO Add tidal and remove spoitfy to socials links

function Footer() {
    const pages = [
        { name: 'Home', path: '/' },
        { name: 'Bio', path: '/bio' },
        { name: 'Listen', path: '/discography' },
        { name: 'Shows', path: '/performance-calendar' },
        { name: 'Photos', path: '/photos' },
        { name: 'Videos', path: '/videos' },
        { name: 'Sheet Music', path: '/sheet-music' },
        { name: 'Contact', path: '/contact' },
        { name: 'Programming', path: '/programming' },
    ];

    // Group pages into columns of three
    const groupedPages = pages.reduce((acc, page, index) => {
        const columnIndex = Math.floor(index / 3);
        if (!acc[columnIndex]) acc[columnIndex] = [];
        acc[columnIndex].push(page);
        return acc;
    }, []);

    return (
        <StyledFooter>
            <SiteLinksWrapper>
                {groupedPages.map((group, index) => (
                    <FooterColumn key={index}>
                        {group.map(({ name, path }, i) => (
                            <FooterLink to={path} key={i}>
                                {name}
                            </FooterLink>
                        ))}
                    </FooterColumn>
                ))}
            </SiteLinksWrapper>

            <div>
                <LinksRow>
                    <IconLink href="https://thedirtysnacksensemble.bandcamp.com/" icon={BandcampIcon} title="Bandcamp" target="_blank" rel="noopener noreferrer" />
                    <IconLink href="https://www.instagram.com/mouscula/" icon={InstagramIcon} title="Instagram" target="_blank" rel="noopener noreferrer" />
                    <IconLink href="https://www.youtube.com/channel/UCuDnMBfi1ekE27boAVWvYpA/videos" icon={YoutubeIcon} title="YouTube" target="_blank" rel="noopener noreferrer" />
                    <IconLink href="https://open.spotify.com/artist/6xdTr1mJIaRT754Hbyvl19?si=6fEdAqrjSRWUFVHr77J6HQ" icon={SpotifyIcon} title="Spotify" target="_blank" rel="noopener noreferrer" />
                    <IconLink href="https://twitter.com/markmclifford" icon={TwitterIcon} title="Twitter" target="_blank" rel="noopener noreferrer" />
                    <IconLink href="https://www.facebook.com/mark.clifford.714/" icon={FaceBookIcon} title="Facebook" target="_blank" rel="noopener noreferrer" />
                </LinksRow>
                <TextContainer center="true">
                    <FooterText>All rights reserved. Mark Pascucci-Clifford ©2025</FooterText>
                    <FooterText>Featured Photography: Lenny Gonzalez</FooterText>
                    <FooterText>Web Design: Mark Pascucci-Clifford</FooterText>
                </TextContainer>
            </div>
        </StyledFooter>
    );
}

export default Footer;

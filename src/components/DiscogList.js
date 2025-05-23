import React from 'react';
import styled from 'styled-components';
import discItems from '../config/DiscItems'; // Adjust the path as needed


const DiscographyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem;
`;

const Section = styled.div``;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const AlbumGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;
const AlbumCard = styled.a`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 600px) {
    height: 220px;
  }
`;

const AlbumImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
  opacity: 1;

  ${AlbumCard}:hover & {
    opacity: 0.2;
  }
`;

const AlbumDetails = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: var(--accent-primary);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;

  ${AlbumCard}:hover & {
    opacity: 1;
    pointer-events: auto;
  }
`;

const AlbumTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const AlbumSubtitle = styled.p`
  margin: 0.2rem 0;
  font-size: 1rem;

  @media (max-width: 600px) {
    font-size: 0.85rem;
  }
`;


const DiscogList = () => {
  // Sort and group data by classification
  const sortedDiscItems = discItems.sort((a, b) => b.release_date - a.release_date);

  const leaderItems = sortedDiscItems.filter(item => item.classification === 'leader');
  const sidemanItems = sortedDiscItems.filter(item => item.classification === 'sideman');

  const formatDate = date =>
    new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(date);

  const renderAlbums = items =>
    items.map(item => (
      <AlbumCard
        key={item.record_URL}
        href={item.record_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AlbumImage src={item.image_URL} alt={item.record_Title} />
        <AlbumDetails>
          <AlbumTitle>{item.artist}</AlbumTitle>
          <AlbumSubtitle>{item.record_Title}</AlbumSubtitle>
          <AlbumSubtitle>Released: {formatDate(item.release_date)}</AlbumSubtitle>
        </AlbumDetails>
      </AlbumCard>
    ));


  return (
    <DiscographyContainer>
      <Section>
        <SectionTitle>As a Leader/Co-Leader</SectionTitle>
        <AlbumGrid>{renderAlbums(leaderItems)}</AlbumGrid>
      </Section>
      <Section>
        <SectionTitle>As a Featured Artist/Sideman</SectionTitle>
        <AlbumGrid>{renderAlbums(sidemanItems)}</AlbumGrid>
      </Section>
    </DiscographyContainer>
  );
};

export default DiscogList;
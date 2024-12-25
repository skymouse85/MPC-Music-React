import React from 'react';
import styled from 'styled-components';
import discItems from '../config/DiscItems'; // Adjust the path as needed

// Styled components
const DiscographyContainer = styled.div`
  margin: 2rem;
  font-family: Arial, sans-serif;
  justify-items: center;
`;

const Album = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px dotted #ccc;
`;

const AlbumInfo = styled.div`
  margin-left: 1rem;
`;

const SeparatorDot = styled.div`
  width: 8px;
  height: 8px;
  background-color: #555;
  border-radius: 50%;
  flex-shrink: 0;
`;

const AlbumTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const AlbumDetails = styled.p`
  margin: 0.2rem 0;
  font-size: 0.9rem;
  color: #666;
`;

const AlbumLink = styled.a`
  display: inline-block;
  margin-top: 0.5rem;
  color: var(--accent-primary);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;



const SortedDiscography = () => {
    // Sort and format the data
    const sortedDiscItems = discItems.sort((a, b) => b.release_date - a.release_date);
  
    const formatDate = date =>
      new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(date);
  
    return (
      <DiscographyContainer>
        {sortedDiscItems.map(item => (
          <Album key={item.record_URL}>
            <SeparatorDot />
            <AlbumInfo>
              <AlbumTitle>{item.record_Title}</AlbumTitle>
              <AlbumDetails>{item.artist}</AlbumDetails>
              <AlbumDetails>Released on: {formatDate(item.release_date)}</AlbumDetails>
              <AlbumLink href={item.record_URL} target="_blank" rel="noopener noreferrer">
                Listen
              </AlbumLink>
            </AlbumInfo>
          </Album>
        ))}
      </DiscographyContainer>
    );
  };
  
  export default SortedDiscography;
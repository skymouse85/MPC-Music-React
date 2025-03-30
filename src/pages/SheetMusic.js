import React from 'react';
import styled from 'styled-components';
import TitleRow from '../components/TitleRow';
import TextContainer from '../components/TextContainer';
import scores from '../config/ScoreItems';

const ScoresContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 3rem;
  `;

const Section = styled.div``;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ReleaseTitle = styled.h3`
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const CompositionContainer = styled.div`
  margin: 1rem 0
`;

const CompositionTitle = styled.h4`
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

const FileList = styled.ul`
  list-style-type: disk;
  padding: 0;
`;

const FileItem = styled.li`
  margin: 0.2rem 0;
`;

const FileLink = styled.a`
  color: var(--accent-primary);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`


const SheetMusic = () => {
  const renderScores = items =>
    items.map(project => (
      <Section key={project.project}>
        <SectionTitle>{project.project}</SectionTitle>
        {project.releases.map(release => (
          <div key={release.title}>
            <ReleaseTitle>{release.title}</ReleaseTitle>
            {release.compositions.map(composition => (
              <CompositionContainer key={composition.name}>
                <CompositionTitle>{composition.name}</CompositionTitle>
                <FileList>
                  <FileItem>
                    {console.log("Score Link:", composition.score)}
                    <FileLink href={composition.score} target="_blank" rel="noopener noreferrer">
                      View/Download Score
                    </FileLink>
                  </FileItem>
                  {composition.parts.map(part => (
                    <FileItem key={part.file}>
                      {console.log("Part Link:", part.file)}
                      <FileLink href={part.file} target="_blank" rel="noopener noreferrer">
                        {part.name}
                      </FileLink>
                    </FileItem>
                  ))}
                </FileList>
              </CompositionContainer>
            ))}
          </div>
        ))}
      </Section>
    ));

  return (
    <>
      <TitleRow title="Sheet Music" />
      <TextContainer center="true" >
        <p>※ Scores & Parts for Selected Compositions/Projects ※</p>
        <p>This is an ongoing project, so scores and parts are being uploaded bit by bit, and I am working on improving the layout of this page</p>
      </TextContainer>
      <ScoresContainer>{renderScores(scores)}</ScoresContainer>
    </>
  )
};

export default SheetMusic;


//!TODO research Folder Creation and PDF hosting
// Make a score object to iterate over

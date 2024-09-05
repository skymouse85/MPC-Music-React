import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HomeIconSVG from '../assets/icons/lightblueVibesAsset 1.svg';  // Correctly named SVG import

const HomeLink = styled(Link)`
//   display: inline-block;
  margin: 0 10px;  // Default spacing for larger screens
  width: 60px;  // Default size for larger screens
  height: 60px;  // Default size
  flex-grow: 1;

  &:hover, &:focus {
    opacity: 0.8;  // Visual feedback on hover/focus
    transform: scale(1.1);  // Enlarges the icon
  }

  @media (max-width: 600px) {
    margin: 0 5px;  // Smaller margin for tighter spaces
  }
`;

const HomeIcon = () => {
    return (
        <HomeLink to="/">
            <img src={HomeIconSVG} alt="Home" style={{ width: '60px', height: '60px' }} />
        </HomeLink>
    );
}

export default HomeIcon;

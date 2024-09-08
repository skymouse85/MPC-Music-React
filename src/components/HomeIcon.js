import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HomeIconSVG from '../assets/icons/lightblueVibesAsset 1.svg';  // Correctly named SVG import

const HomeLink = styled(Link)`
  margin: 0 10px;  // Default spacing for larger screens
  width: 80px;  // Default size for larger screens
  height: 80px;  // Default size
  justify-self: center;

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
            <img src={HomeIconSVG} alt="Home"  />
        </HomeLink>
    );
}

export default HomeIcon;

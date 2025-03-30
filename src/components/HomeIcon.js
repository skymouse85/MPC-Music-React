import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HomeIconSVG from '../srcAssets/icons/lightblueVibesAsset 1.svg';

const HomeLink = styled(Link)`
  margin: 0 10px;
  width: 80px;
  height: 80px;
  justify-self: center;
  display: inline-block;

  &:hover img,
  &:focus img {
    transform: scale(1.08);
    opacity: 0.9;
  }

  @media (max-width: 600px) {
    margin: 0 5px;
    width: 60px;
    height: 60px;
  }
`;

const HomeLogo = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease, opacity 0.3s ease;
`;

const HomeIcon = () => {
  return (
    <HomeLink to="/">
      <HomeLogo src={HomeIconSVG} alt="Home" />
    </HomeLink>
  );
};

export default HomeIcon;

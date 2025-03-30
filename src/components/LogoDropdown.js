import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoSrc from '../srcAssets/icons/BlackVibes.svg';
import menuItems from '../config/navigation';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin-right: 3em;

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 1em;
  }
`;

const LogoImage = styled.img`
  width: 80px;
  height: 80px;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.9));
  animation: pulse 1.5s ease-in-out infinite;
  transition: transform 0.3s ease, filter 0.3s ease;

  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.6));
  }

  @media (max-width: 600px) {
    width: 60px;
    height: 60px;
  }

  @keyframes pulse {
    0%, 100% {
      filter: drop-shadow(0 4px 12px rgba(0, 0, 0, .75));
    }
    50% {
      filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.6));
    }
  }
`;



const DropdownContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

  @media (max-width: 600px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

const DropdownItem = styled(Link)`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #f1f1f1;
  }

  @media (max-width: 600px) {
    padding: 10px 14px;
    font-size: 0.9rem;
  }
`;

const LogoDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContainer
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <LogoImage src={logoSrc} alt="Logo" />
      <DropdownContent isOpen={isOpen}>
        {menuItems.map(item => (
          <DropdownItem to={item.path} key={item.name}>
            {item.name}
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default LogoDropdown;

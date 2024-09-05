import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoSrc from '../assets/icons/BlackVibes.svg';
import menuItems from '../config/navigation';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin-right: 3em;
`;

const DropdownContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

const DropdownItem = styled(Link)`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const LogoDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContainer onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
     <img src={logoSrc} alt="Logo" style={{ width: '80px', height: '80px' }} />
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

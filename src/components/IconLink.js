import styled from 'styled-components';

const IconWrapper = styled.a`
  display: inline-block;
  width: 28px;
  height: 28px;
  transition: filter 0.3s ease;

  img {
    width: 100%;
    height: auto;
    display: block;
    transition: filter 0.3s ease;
  }

  &:hover img {
    filter: brightness(0) saturate(100%) invert(64%) sepia(19%) 
            saturate(650%) hue-rotate(169deg) brightness(95%) contrast(85%);
  }

  @media (max-width: 600px) {
    width: 22px;
    height: 22px;
  }
`;

const IconLink = ({ href, icon, title, ...props }) => (
  <IconWrapper href={href} title={title} {...props}>
    <img src={icon} alt={title} />
  </IconWrapper>
);

export default IconLink;

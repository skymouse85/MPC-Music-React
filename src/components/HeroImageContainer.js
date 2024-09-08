import React from "react";
import styled from 'styled-components';

const HeroImageContainer = styled.div`
    width: 100%;
    // height: 650px;
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    text-alilgn: cneter;
`;

export default HeroImageContainer;
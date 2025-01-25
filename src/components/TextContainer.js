import React from "react";
import styled from "styled-components";

const TextContainer = styled.div`   
    padding: 20px;
    margin-top: 20px;
    margin-left: 50px;
    margin-right: 50px;
    background-color: var(--ui-background); // Using CSS variable from global styles
    color: var(--text-primary); // Inheriting text color from global styles
    font-family: 'Roboto', sans-serif; // Example of setting a default font
    border-radius: 8px; // Optional: adds rounded corners
    text-align: ${props => props.center ? 'center' : 'left'};  // Default to left if no 'center' prop is provided
    // width: 100%
`

export default TextContainer;
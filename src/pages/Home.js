import Header from "../components/Header"
import MainImage from "../components/MainImage"
import HeroImageContainer from "../components/HeroImageContainer";
import colorField from "../srcAssets/images/colorField.jpg"
import React from "react";
import styled from "styled-components";

function Main() {
    return (
        <>
            <Header />
            <HeroImageContainer>
                <MainImage src={colorField} alt='colorField' />
            </HeroImageContainer>

        </>
    );
}

export default Main;
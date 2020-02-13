// import React from 'react';
import styled from 'styled-components';

const HeroMessage = styled.p`
    font-family: "Open Sans";
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    font-size: 28px;
    line-height: 36px;
    text-align: left;
    
    @media only screen and (min-width: 400px) {
        & {
            font-size: 32px;
            line-height: 42px;
        }
    
     @media only screen and (min-width: 600px) {
        & {
            font-size: 36px;
            line-height: 48px;
        }
        
      @media only screen and (min-width: 800px) {
        & {
            font-size: 48px;
            line-height: 56px;
        }
        
     @media only screen and (min-width: 1000px) {
        & {
            font-size: 72px;
            line-height: 80px;
        }
    `;

export default HeroMessage;
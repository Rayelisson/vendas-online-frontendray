/* eslint-disable prettier/prettier */

import styled from "styled-components";


interface DisplayFlexProps {
   margin?: string;
}


export const DisplayFlex = styled.div`
   display: flex;

`;


export const DisplayFlexJudtifyRight = styled(DisplayFlex)`
   justify-content: right;

`;

export const DisplayFlexJudtifyCenter = styled(DisplayFlex)`
   justify-content: center;

`;

export const DisplayFlexJustifyBetWeen = styled(DisplayFlex)<DisplayFlexProps>`
   display: flex;
   justify-content: space-between;
   ${(props) => (props.margin ? `margin: ${props.margin}` : '')};
`;
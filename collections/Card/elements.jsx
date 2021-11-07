import styled from "styled-components";

import { SectionContainer, SectionAnchor, SectionParagraph } from "~/components";


export const StyledCardTitle = styled(({ ...props }) => <SectionAnchor {...props} />)`
    font-size: 18px;
    font-weight: 700;
    line-height: 0;

    &:visited {
        color: inherit;
    }
`;

export const StyledCardContainer = styled(({ width, color, ...props }) => <SectionContainer {...props} />)`
    display: flex;
    align-items: center;
    margin: 2rem 2.5rem;
    background: ${({color}) => color};
    width: ${({width}) => width}%;
    min-height: 150px;
    transition: all .3s ease;
    border-radius: .5rem;
    border: 3px solid transparent;

    &:hover {
        border: 3px solid blue;
    }

    &:hover ${StyledCardTitle} {
        text-decoration: underline;
        color: blue;
    }
`;

export const StyledCardImageContainer = styled(({ ...props }) => <div {...props} />)`
    flex-basis: 30%;
    text-align: center;

    @media (max-width: 1024px) {
        flex-basis: 15%;   
    }
`;

export const StyledCardContent = styled(({ ...props }) => <SectionParagraph {...props} />)`
    padding-right: 2.5rem;
`;

export const StyledCardContentContainer = styled(({ ...props }) => <div {...props} />)`
    flex-basis: 70%;

    @media (max-width: 1024px) {
        flex-basis: 85%;
    }
`;

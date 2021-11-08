import styled from "styled-components";

import { SectionContainer, SectionAnchor, SectionParagraph } from "~/components";


export const StyledCardTitle = styled(({ ...props }) => <SectionAnchor {...props} />)`
    font-size: 1.15rem;
    font-weight: 700;
    line-height: 1.6;
    color: inherit;

    &:visited {
        color: inherit;
    }

    @media (max-width: 1024px) {
        font-size: 1rem;
    }
`;

export const StyledCardContainer = styled(({ width, color, ...props }) => <SectionContainer {...props} />)`
    display: flex;
    align-items: center;
    margin: 0;
    padding: 1rem 0;
    background: ${({color}) => color};
    width: ${({width}) => width}%;
    transition: all .3s ease;
    border-radius: .5rem;
    border: 3px solid transparent;

    &:hover {
        border: 3px solid #006EFD;
    }

    &:hover ${StyledCardTitle} {
        text-decoration: underline;
        color: blue;
    }

    @media (max-width: 1024px) {
        margin: .75rem 1.2rem;
        padding: 1rem 0;
    }
`;

export const StyledCardImageContainer = styled(({ ...props }) => <div {...props} />)`
    flex-basis: 30%;
    text-align: center;

    @media (max-width: 1024px) {
        & img {
            max-width: 50px;
            max-height: 50px;
        }
        flex-basis: 25%;   
    }
`;

export const StyledCardContent = styled(({ ...props }) => <SectionParagraph {...props} />)`
    padding-right: 3rem;
    margin: 0;

    @media (max-width: 1024px) {
        font-size: .8rem;
        padding-right: .25rem;
    }
`;

export const StyledCardContentContainer = styled(({ ...props }) => <div {...props} />)`
    flex-basis: 70%;

    @media (max-width: 1024px) {
        flex-basis: 75%;
    }
`;

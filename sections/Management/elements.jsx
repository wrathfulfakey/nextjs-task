import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading, SectionAnchor } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledSectionAnchor = styled((props) => <SectionAnchor {...props} />) `
  &:hover {
    color: #006EFD;
    text-decoration: underline;
  }
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  line-height: 1.4;
  font-size: 2.3rem;
  color: black;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

export const StyledSubtitle = styled((props) => <SectionSubheading {...props} />)`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: .85rem;
  }
`;

export const StyledTitleContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  text-align: center;
  font-family: sans-serif;
  margin: 1rem 0 2.5rem;

  
  @media (max-width: 1024px) {
    margin: .8rem 0 1.5rem;      
  }
`;

export const StyledContentContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0 16rem;
  background: url(background.png) no-repeat top left;
  background-size: contain;

  @media (max-width: 1024px) {
    padding: 0 .5rem;      
  }

  @media (max-width: 1440px) {
    padding: 0 3rem;
  }
`;
  
  export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  flex-basis: 50%;
  max-width: 328px;

  @media (max-width: 1024px) {
    margin: 0 auto;
    flex-basis: 100%;
  }
`;

export const StyledCardsContainer = styled(({ ...props}) => <div {...props} />)`
  width: 100%;
  display: flex;
  flex-basis: 50%;
  margin: 1rem 0;
  align-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    flex-basis: 100%; 
  }
`;  

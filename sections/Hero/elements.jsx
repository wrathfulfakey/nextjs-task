import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading, SectionAnchor } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledSectionAnchor = styled((props) => <SectionAnchor {...props} />) `
  &:hover {
    color: blue;
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

  
  @media (max-width: 1280px) {
    margin: .8rem 0 1.5rem;      
  }
`;

export const StyledContentContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-wrap: wrap;
  padding: 0 16rem;

  @media (max-width: 1280px) {
    padding: 0 .5rem;      
  }
  `;
  
  export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-height: 65rem;
  max-width: 100%;
  height: 100%;
  flex-basis: 40%;
  background: url(background.png) no-repeat center center;
  background-size: 100% 100%;

  @media (max-width: 1280px) {
    flex-basis: 100%;
    max-width: 35%;
    margin: 0 auto;
  }
`;

export const StyledCardsContainer = styled(({ ...props}) => <div {...props} />)`
  width: 100%;
  display: flex;
  flex-basis: 60%;
  align-content: space-between;
  flex-wrap: wrap;
  margin: 1.5rem 0;

  @media (max-width: 1280px) {
    flex-basis: 100%;         
  }
`;  

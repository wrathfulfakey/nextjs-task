import Image from "next/image";
import { Card } from "../../collections/Card/Card";
import { StyledCardsContainer } from "./elements";
import {
  StyledTitleContainer,
  StyledContainer,
  StyledTitle,
  StyledSubtitle,
  StyledContentContainer,
  StyledImageContainer,
} from "./elements";

export const Hero = ({ image, title, subtitle, card1, card2, card3, ...props }) => {
  return (
    <StyledContainer {...props}>
      <StyledTitleContainer>
        <StyledTitle>{title}</StyledTitle>

        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </StyledTitleContainer>

      <StyledContentContainer>
        <StyledImageContainer>
          <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
        </StyledImageContainer>

        <StyledCardsContainer {...props}>
          <Card {...card1} />
          <Card {...card2} />
          <Card {...card3} />
        </StyledCardsContainer>
      </StyledContentContainer>
    </StyledContainer>
  );
};

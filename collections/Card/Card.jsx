import Image from "next/image";
import ReactHtmlParser from "react-html-parser";

import { 
    StyledCardTitle, 
    StyledCardContent,
    StyledCardContentContainer, 
    StyledCardImageContainer,
    StyledCardContainer,
} from "./elements";

export const Card = ({title, content, image, width, color, ...props}) => {
    return (
    <StyledCardContainer width={width} color={color}>
        <StyledCardImageContainer>
          <Image src={image.src} alt="card image" width={image.width} height={image.height} />
        </StyledCardImageContainer>

        <StyledCardContentContainer>
           <StyledCardTitle href="#">{title}</StyledCardTitle>
            
            <StyledCardContent>{ReactHtmlParser(content)}</StyledCardContent>
        </StyledCardContentContainer>
    </StyledCardContainer>
    )

}
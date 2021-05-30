import React from "react";
import { BigTitleText } from "../style";
import {
  SecondLine,
  ImageWrapper,
  ImageContainer,
  ParaBox,
  FirstPanel,
} from "./style";
import { StyledImage, ParaText } from "@styles";
import { SplitWrapper, Row } from "../style";

const Hero = ({ data }) => {
  return (
    <FirstPanel>
      <SplitWrapper>
        <Row>
          <BigTitleText>World Cup 86 </BigTitleText>
          <ParaBox>
            <ParaText number="01">
              After scoring two contrasting goals in the 2–1 quarter-final win
              against England, his legend was cemented. The first goal was
              scored by striking the ball with his hand. It became known as the
              "Hand of God"
            </ParaText>
          </ParaBox>
        </Row>
        <SecondLine>
          <ImageWrapper>
            <ImageContainer>
              <StyledImage
                fluid={data.purge_people.childImageSharp.fluid}
                alt="People during the Great Purge"
                style={{ position: "absolute" }}
              />
            </ImageContainer>
          </ImageWrapper>
          <BigTitleText>La Mano De Dios</BigTitleText>
        </SecondLine>
      </SplitWrapper>
    </FirstPanel>
  );
};

export default Hero;

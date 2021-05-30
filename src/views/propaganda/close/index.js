import React from "react";
import {
  CloseSection,
  TopImage,
  BottomImage,
  StyledImage,
  Row,
  NormalText,
  HalfCol,
  BottomImageWrap,
} from "./style";
import { ParaText } from "@styles";

const Close = ({ data }) => {
  return (
    <CloseSection>
      <Row>
        <Row row>
          <TopImage data-scroll data-scroll-speed={2}>
            <StyledImage
              fluid={data.prop_poster5.childImageSharp.fluid}
              alt="Stalin's propaganda"
              imgStyle={{ objectFit: "contain" }}
            />
          </TopImage>
          <NormalText>
            Maradona was known for making "great plays" and doing "unimaginable"
            and "incredible things" with the ball during training sessions
          </NormalText>
        </Row>
        <Row>
          <BottomImageWrap>
            <BottomImage>
              <StyledImage
                fluid={data.prop_poster6.childImageSharp.fluid}
                alt="Stalin's propaganda"
                imgStyle={{ objectFit: "contain" }}
              />
            </BottomImage>
          </BottomImageWrap>
          <Row row>
            <HalfCol>
              <ParaText number="03">
                At the 1994 World Cup in the United States, Maradona played in
                only two games, scoring one goal against Greece, before being
                sent home after failing a drug test for ephedrine doping.
                Maradona had one of the most remarkable World Cup goal
                celebrations as he ran towards one of the sideline cameras
                shouting with a distorted face and bulging eyes.
              </ParaText>
            </HalfCol>
            <HalfCol>
              <ParaText number="04">
                Being short, but strong, he could hold the ball long enough with
                a defender on his back to wait for a teammate making a run or to
                find a gap for a quick shot. He showed leadership qualities on
                the field and captained Argentina in their World Cup campaigns
                of 1986, 1990, and 1994.
              </ParaText>
            </HalfCol>
          </Row>
        </Row>
      </Row>
    </CloseSection>
  );
};

export default Close;

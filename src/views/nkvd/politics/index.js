/* eslint react-hooks/exhaustive-deps: 0 */
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BigTitle } from "../style";
import { Row, Col } from "../about/style";
import {
  PoliticsSection,
  ParaWrapper,
  NormalText,
  FirstLine,
  SecondLine,
  ImageWrapper,
  SpinningText,
} from "./style";
import { ParaText, StyledImage } from "@styles";

gsap.registerPlugin(ScrollTrigger);

const Politics = ({ data }) => {
  let scrollContainer = useRef(null);
  let label = useRef(null);

  useEffect(() => {
    gsap.to(label, {
      rotation: 360,
      scrollTrigger: {
        scroller: "#___gatsby",
        trigger: scrollContainer,
        start: "-40% top",
        toggleActions: "play, pause, reverse, pause",
        scrub: true,
      },
    });

    ScrollTrigger.addEventListener("refresh", () => window.scroll.update());
    ScrollTrigger.refresh();
  }, []);

  return (
    <PoliticsSection ref={(el) => (scrollContainer = el)}>
      <FirstLine>
        <BigTitle>Control</BigTitle>
        <ImageWrapper>
          <StyledImage
            fluid={data.nkvd_police4.childImageSharp.fluid}
            alt="Stalin's NKVD"
            style={{ position: "absolute" }}
          />
        </ImageWrapper>
      </FirstLine>
      <SecondLine>
        <SpinningText ref={(el) => (label = el)}>AND</SpinningText>
        <BigTitle>Dribbling</BigTitle>
      </SecondLine>
      <Row>
        <Col>
          <ParaText number="03">
            Maradona left Napoli in disgrace in 1992. Despite interest from Real
            Madrid and Marseille, he signed for Sevilla, where he stayed for one
            year.In 1993, he played for Newell's Old Boys and in 1995 returned
            to Boca Juniors for a two-year stint.
          </ParaText>
        </Col>
        <Col>
          <StyledImage
            fluid={data.nkvd_police3.childImageSharp.fluid}
            alt="Stalin's Secret Police"
            style={{ position: "absolute" }}
          />
        </Col>
      </Row>
      <Row bottom pt>
        <ParaWrapper top>
          <NormalText>
            The beauty of Diego's game has a hereditary element – his natural
            ease with the ball – but it also owes a lot to his ability to learn:
            a lot of those brushstrokes,
          </NormalText>
        </ParaWrapper>
        <ParaWrapper bottom>
          <NormalText>
            those strokes of 'genius', are in fact a product of his hard work.
            Diego worked very hard to be the best.
          </NormalText>
        </ParaWrapper>
      </Row>
      <Row pt>
        <Col smaller>
          <StyledImage
            fluid={data.nkvd_police5.childImageSharp.fluid}
            alt="Stalin's Secret Police"
            style={{ position: "absolute" }}
          />
        </Col>
        <Col reverse smaller np>
          <ParaText number="04">
            Maradona became the coach of Argentina's national football team in
            November 2008. He was in charge of the team at the 2010 World Cup in
            South Africa before leaving at the end of the tournament.
          </ParaText>
        </Col>
      </Row>
    </PoliticsSection>
  );
};

export default Politics;

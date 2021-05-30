import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  HeroWrapper,
  BigTitle,
  ColItem,
  SubTitle,
  NumberWrapper,
  ParaWrapper,
  NormalText,
  AboutText,
  SplitWrapper,
  CaptionText,
} from "./style";
import { StyledImage, SectionNumber, Container, Overflow } from "@styles";

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ data }) => {
  let tl = gsap.timeline();
  let heroSection = useRef(null);
  let titleText = useRef([]);

  useEffect(() => {
    titleText.current.forEach((el) => {
      tl.from(el, {
        scrollTrigger: {
          trigger: heroSection,
          start: "top center",
          end: "center center",
          toggleActions: "play none none none",
          scroller: "#___gatsby",
          scrub: true,
        },
        yPercent: -100,
      });
    });

    ScrollTrigger.addEventListener("refresh", () => window.scroll.update());
    ScrollTrigger.refresh();
  }, [tl, heroSection, titleText]);

  return (
    <Container>
      <NumberWrapper data-scroll data-scroll-speed={1}>
        <SectionNumber>1</SectionNumber>
      </NumberWrapper>
      <HeroWrapper ref={(el) => (heroSection = el)}>
        <ColItem>
          <BigTitle>
            <Overflow>
              <div ref={(el) => (titleText.current[0] = el)}>Debut</div>
            </Overflow>
            <Overflow>
              <div ref={(el) => (titleText.current[1] = el)}>Year</div>
            </Overflow>
            <Overflow>
              <div ref={(el) => (titleText.current[2] = el)}>1976</div>
            </Overflow>
          </BigTitle>
          <Overflow>
            <SubTitle ref={(el) => (titleText.current[3] = el)}>
              Oct 30, 1960—2020
            </SubTitle>
          </Overflow>
        </ColItem>
        <ColItem image>
          <StyledImage
            data-scroll
            data-scroll-speed={-1}
            fluid={data.fyp_people.childImageSharp.fluid}
            alt="People during the Five Year Plan"
            style={{ position: "absolute" }}
          />
        </ColItem>
      </HeroWrapper>
      <AboutText>
        <SplitWrapper>
          <ParaWrapper top>
            <CaptionText>10 days before his 16th birthday</CaptionText>
            <CaptionText> Maradona made his professional </CaptionText>
            <CaptionText>debut for Argentinos Juniors</CaptionText>
          </ParaWrapper>
          <ParaWrapper top>
            <NormalText>
              Maradona spent five years at Argentinos Juniors, from 1976 to
              1981, scoring 115 goals in 167 appearances
            </NormalText>
          </ParaWrapper>
        </SplitWrapper>
        <ParaWrapper>
          <NormalText>
            Maradona signed a contract with Boca Juniors on 20 February 1981. He
            made his debut two days later against Talleres de Córdoba.
          </NormalText>
        </ParaWrapper>
      </AboutText>
    </Container>
  );
};

export default Hero;

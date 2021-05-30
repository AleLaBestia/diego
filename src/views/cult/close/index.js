import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  AboutSection,
  Row,
  Col,
  ImageWrapper,
  StyledImage,
  TopLine,
  SecondLine,
  ThirdLine,
  BigTitle,
} from "./style";
import { Container, ParaText } from "@styles";

gsap.registerPlugin(ScrollTrigger);

const Close = ({ data }) => {
  let textRef = useRef([]);
  let sectionContainer = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      let tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .to(textRef.current[0], { left: "5.1%" }, 0)
        .to(textRef.current[1], { left: "5.1%" }, 0)
        .to(textRef.current[2], { left: "5.1%" }, 0);

      ScrollTrigger.create({
        trigger: sectionContainer,
        start: "top bottom",
        end: "+=2000 bottom",
        scroller: "#___gatsby",
        animation: tl,
        scrub: true,
      });

      ScrollTrigger.addEventListener("refresh", () => window.scroll.update());
      ScrollTrigger.refresh();
    }, 200);
  }, []);

  return (
    <AboutSection ref={(el) => (sectionContainer = el)}>
      <Container>
        <TopLine ref={(el) => (textRef.current[0] = el)}>
          <BigTitle>La Pelota</BigTitle>
        </TopLine>
        <SecondLine ref={(el) => (textRef.current[1] = el)}>
          <BigTitle>No se mancha</BigTitle>
        </SecondLine>

        <Row>
          <Col>
            <ParaText number="01">
              "Les ofrezco mil disculpas a los ingleses, pero volvería a
              hacerlo. Les robé la billetera sin que se dieran cuenta"
            </ParaText>
            <ParaText number="02">
              "Yo me equivoqué y pagué, pero la pelota no se mancha" "Escuché al
              Papa decir que la Iglesia se preocupaba por los chicos pobres.
              Pero ¡vendé el techo, fiera, hacé algo!"
            </ParaText>
          </Col>
          <Col>
            <ImageWrapper>
              <StyledImage
                fluid={data.cult_poster2.childImageSharp.fluid}
                alt="Cult of personality poster"
              />
            </ImageWrapper>
          </Col>
        </Row>
      </Container>
    </AboutSection>
  );
};

export default Close;

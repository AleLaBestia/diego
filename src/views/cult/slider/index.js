import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  SliderSection,
  SliderRow,
  StyledImage,
  ImageContainer,
  TextRow,
  Col,
} from "./style";
import { Container, ParaText } from "@styles";

gsap.registerPlugin(ScrollTrigger);

const Slider = ({ data }) => {
  let sectionContainer = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      let tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .to(sectionContainer, { xPercent: "-=50" });

      ScrollTrigger.create({
        trigger: sectionContainer,
        start: "top bottom",
        end: " +=2000 top",
        scroller: "#___gatsby",
        animation: tl,
        scrub: true,
      });

      ScrollTrigger.addEventListener("refresh", () => window.scroll.update());
      ScrollTrigger.refresh();
    }, 200);
  }, []);

  return (
    <SliderSection>
      <SliderRow ref={(el) => (sectionContainer = el)}>
        <ImageContainer>
          <StyledImage
            fluid={data.cult_poster3.childImageSharp.fluid}
            alt="Cult of personality poster"
          />
        </ImageContainer>
        <ImageContainer>
          <StyledImage
            fluid={data.cult_poster4.childImageSharp.fluid}
            alt="Cult of personality poster"
          />
        </ImageContainer>
        <ImageContainer>
          <StyledImage
            fluid={data.cult_poster5.childImageSharp.fluid}
            alt="Cult of personality poster"
          />
        </ImageContainer>
      </SliderRow>
      <Container>
        <TextRow>
          <Col>
            <ParaText number="03">
              "A Papá Noel le pediría que parara mi vida a los 25 años, para que
              pudiera jugar siempre a la pelota" "En nuestro fútbol había
              mafia... No la que mata. Una que es capaz de cobrar un penal que
              no existe y no dar uno que sí fue"
            </ParaText>
          </Col>
          <Col>
            <ParaText number="04">
              "He jugado el Barcelona-Real, pero el Boca-River es distinto. Se
              me inflama el pecho. Es como dormir con Julia Roberts" "Si ves que
              Humbertito la está enseñando a patear a los chicos de 15 años, te
              querés pegar un tiro en las pelotas"
            </ParaText>
          </Col>
        </TextRow>
      </Container>
    </SliderSection>
  );
};

export default Slider;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { AboutSection, Row, Col } from "./style";
import { StyledImage, Container, ImageAnim, ParaText } from "@styles";

gsap.registerPlugin(ScrollTrigger);

const About = ({ data }) => {
  let tl = gsap.timeline();
  let aboutSection = useRef(null);
  let image = useRef(null);

  useEffect(() => {
    tl.to(image, {
      scrollTrigger: {
        trigger: aboutSection,
        pin: true,
        scrub: true,
        start: "center center",
        end: "bottom top",
        scroller: "#___gatsby",
      },
      scaleY: 0,
    });

    ScrollTrigger.addEventListener("refresh", () => window.scroll.update());
    ScrollTrigger.refresh();
  }, [tl, aboutSection, image]);

  return (
    <AboutSection>
      <Container>
        <Row ref={(el) => (aboutSection = el)}>
          <Col>
            <ImageAnim ref={(el) => (image = el)} />
            <StyledImage
              fluid={data.fyp_poster1.childImageSharp.fluid}
              alt="Propaganda from the Five Year Plan"
              style={{ position: "absolute" }}
            />
          </Col>
          <Col>
            <ParaText number="01">
              After the 1982 World Cup, in June, Maradona was transferred to
              Barcelona in Spain for a then world record fee of £5 million .In
              1983, under coach César Luis Menotti, Barcelona and Maradona won
              the Copa del Rey (Spain's annual national cup competition),
              beating Real Madrid, and the Spanish Super Cup, beating Athletic
              Bilbao.
            </ParaText>
            <ParaText number="02">
              During his two injury-hit seasons at Barcelona, Maradona scored 38
              goals in 58 games. Maradona transferred to Napoli in Italy's Serie
              A for another world record fee, £6.9 million
            </ParaText>
          </Col>
        </Row>
      </Container>
    </AboutSection>
  );
};

export default About;

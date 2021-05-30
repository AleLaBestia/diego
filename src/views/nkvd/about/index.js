/* eslint react-hooks/exhaustive-deps: 0 */
import React from "react";
import { AboutSection, Row, Col } from "./style";
import { StyledImage, ParaText } from "@styles";

const About = ({ data }) => {
  return (
    <AboutSection>
      <Row>
        <Col>
          <ParaText number="01">
            At Napoli, Maradona reached the peak of his professional career: he
            soon inherited the captain's armband and quickly became an adored
            star among the club's fans; in his time there he elevated the team
            to the most successful era in its history.
          </ParaText>
          <ParaText number="02">
            Led by Maradona, Napoli won their first ever Serie A Italian
            Championship in 1986–87. Murals of Maradona were painted on the
            city's ancient buildings, and newborn children were named in his
            honour.
          </ParaText>
        </Col>
        <Col>
          <StyledImage
            fluid={data.nkvd_police2.childImageSharp.fluid}
            alt="Stalin's Secret Police"
            style={{ position: "absolute" }}
          />
        </Col>
      </Row>
    </AboutSection>
  );
};

export default About;

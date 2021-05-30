import React from "react";
import { AboutSection, ParaWrapper, NormalText, Row } from "./style";
import { Container } from "@styles";

const About = () => {
  return (
    <AboutSection>
      <Container>
        <Row textTop>
          <ParaWrapper top>
            <NormalText>
              His physical strengths were illustrated by his two goals against
              Belgium in the 1986 World Cup.
            </NormalText>
          </ParaWrapper>
        </Row>
        <ParaWrapper>
          <NormalText>
            he was also a strategist and an intelligent team player, with
            excellent spatial awareness, as well as being highly technical with
            the ball
          </NormalText>
        </ParaWrapper>
      </Container>
    </AboutSection>
  );
};

export default About;

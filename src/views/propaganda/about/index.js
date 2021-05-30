import React from "react";
import {
  AboutSection,
  Row,
  Col,
  StyledImage,
  NormalText,
  Line1,
  Line2,
} from "./style";
import { ParaText } from "@styles";

const About = ({ data }) => {
  return (
    <AboutSection>
      <Line1>
        <NormalText>
          One of Maradona's trademark moves was dribbling full-speed on the
          right wing, and on reaching the opponent's goal line
        </NormalText>
      </Line1>
      <Line2>
        <NormalText></NormalText>
      </Line2>
      <Row>
        <Col text>
          <ParaText number="01">
            Maradona is widely regarded as the best player of his
            generation.[133] He is considered one of the greatest players of all
            time by pundits, players, and managers,[4][73][167] and by some as
            the best player ever.
          </ParaText>
          <ParaText number="02">
            Known as one of the most skilful players in the game, he is regarded
            as one of the greatest dribblers and free kick takers in
            history.Though he's also listed as one of the most overrated players
            ever in other lists
          </ParaText>
        </Col>
        <Col>
          <StyledImage
            fluid={data.prop_poster4.childImageSharp.fluid}
            alt="Stalin's propaganda"
            imgStyle={{ objectFit: "contain" }}
          />
        </Col>
      </Row>
    </AboutSection>
  );
};

export default About;

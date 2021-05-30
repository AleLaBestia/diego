import React from "react";
import {
  ResultsSection,
  Row,
  TopRow,
  Col,
  BigTitle,
  NormalText,
  StyledImage,
  TopImage,
  BottomImage,
  HalfRow,
  HalfCol,
} from "./style";
import { Container, ParaText } from "@styles";

const Results = ({ data }) => {
  return (
    <ResultsSection>
      <Container>
        <TopRow>
          <BigTitle>Greatest</BigTitle>
          <BigTitle>Success</BigTitle>
        </TopRow>
        <Row>
          <Col image>
            <TopImage data-scroll data-scroll-speed={2}>
              <StyledImage
                fluid={data.fyp_poster2.childImageSharp.fluid}
                alt="Propaganda from the Five Year Plan"
                imgStyle={{ objectFit: "contain" }}
              />
            </TopImage>
            <BottomImage data-scroll data-scroll-speed={1}>
              <StyledImage
                fluid={data.fyp_poster3.childImageSharp.fluid}
                alt="Propaganda from the Five Year Plan"
                imgStyle={{ objectFit: "contain" }}
              />
            </BottomImage>
          </Col>
          <Col>
            <NormalText>
              Maradona captained the Argentine national team to victory in the
              1986 World Cup, winning the final against West Germany.
            </NormalText>
          </Col>
        </Row>
        <HalfRow>
          <HalfCol>
            <ParaText number="03">
              During the tournament, Maradona attempted a tournament and was
              fouled a record 53 times, winning his team twice as many free
              kicks as any player.Maradona scored or assisted 10 of Argentina's
              14 goals (71%)
            </ParaText>
          </HalfCol>
          <HalfCol>
            <ParaText number="04">
              By the end of the World Cup, Maradona went on to win the Golden
              Ball as the best player of the tournament by unanimous vote and
              was widely regarded to have won the World Cup virtually
              single-handedly, something that he later stated he did not
              entirely agree with.
            </ParaText>
          </HalfCol>
        </HalfRow>
      </Container>
    </ResultsSection>
  );
};

export default Results;

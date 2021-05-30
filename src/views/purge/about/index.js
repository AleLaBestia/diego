import React from "react";
import { BigTitleText, Row } from "../style";
import {
  SecondPanel,
  StyledImage,
  ParagraphWrapper,
  StyledSplitWrapper,
  StyledRow,
} from "./style";
import { ParaText } from "@styles";

const About = ({ data }) => {
  return (
    <SecondPanel>
      <Row>
        <StyledImage
          fluid={data.purge_rubble.childImageSharp.fluid}
          alt="Rubble during the Great Purge"
        />
      </Row>
      <StyledSplitWrapper>
        <Row>
          <StyledRow>
            <ParagraphWrapper>
              <ParaText number="02">
                Maradona captained Argentina again in the 1990 World Cup in
                Italy to yet another World Cup final. An ankle injury affected
                his overall performance, and he was much less dominant than four
                years earlier.
              </ParaText>
            </ParagraphWrapper>
            <ParagraphWrapper>
              <ParaText number="03">
                At the final in Rome, Argentina lost 1–0 to West Germany, the
                only goal being a controversial penalty scored by Andreas Brehme
                in the 85th minute, after Rudi Völler was adjudged to be fouled
              </ParaText>
            </ParagraphWrapper>
          </StyledRow>
          <BigTitleText></BigTitleText>
        </Row>
        <Row>
          <BigTitleText>Italia 1990—</BigTitleText>
          <StyledImage
            secondImage
            fluid={data.purge_soldiers.childImageSharp.fluid}
            alt="Soldiers during the Great Purge"
          />
          <StyledRow>
            <ParagraphWrapper>
              <ParaText number="04">
                Maradona was a technical leader: a guy who resolved all
                difficulties that may come up on the pitch. Firstly, he was in
                charge of making the miracles happen, that's something that
                gives team-mates a lot of confidence. Secondly, the scope of his
                celebrity was such that he absorbed all the pressures on behalf
                of his team-mates.
              </ParaText>
            </ParagraphWrapper>
          </StyledRow>
        </Row>
      </StyledSplitWrapper>
    </SecondPanel>
  );
};

export default About;

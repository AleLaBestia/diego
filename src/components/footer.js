import React from "react";
import styled from "styled-components";
import { Container } from "@styles";

const FooterWrapper = styled.footer`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100vh;
  background-color: var(--footer);
  padding-top: 20vh;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${(props) => props.bottom && `padding: 20vh 0 5vw;`};
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
const LinksList = styled.ul`
  padding: 0;
  margin: 0;
`;
const LinkWrapper = styled.li`
  list-style: none;
  padding: 0 0 1vw;
  margin: 0;
`;
const BigTitle = styled.h1`
  font-family: var(--font-family-serif);
  font-size: 16vw;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0;
  white-space: nowrap;
  line-height: 85%;
`;
const StyledLink = styled.a`
  position: relative;
  font-size: 2vw;
  text-transform: uppercase;
  text-decoration: none;
  color: inherit;

  :before {
    content: "";
    display: block;
    position: absolute;
    bottom: 5%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: currentColor;
    transition: transform 1.1s cubic-bezier(0.19, 1, 0.22, 1);
  }
  :before {
    transition-delay: 0s;
    transform: scaleX(0);
    transform-origin: left;
  }
  :hover:before {
    transform: scaleX(1);
  }
`;
const SmallText = styled.p`
  position: relative;
  font-size: 2vw;
  margin: 0;
`;
const BoldTitle = styled(SmallText)`
  font-weight: bold;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col>
            <BigTitle>Gracias</BigTitle>
            <BigTitle>Diego</BigTitle>
          </Col>
          <Col>
            <LinksList>
              <LinkWrapper>
                <BoldTitle>Sources used</BoldTitle>
              </LinkWrapper>
              <LinkWrapper>
                <StyledLink
                  href="https://www.cuatro.com/deportes/futbol/futbol-internacional/maradona-mejores-frases_18_3048945312.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cuatro.com
                </StyledLink>
              </LinkWrapper>
              <LinkWrapper>
                <StyledLink
                  href="https://www.infobae.com/deportes-2/2016/10/30/diego-maradona-56-anos-en-25-frases/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  infobae.com
                </StyledLink>
              </LinkWrapper>
              <LinkWrapper>
                <StyledLink
                  href="https://www.esquire.com/es/actualidad/g11650643/maradona-mejores-frases/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  esquire.com
                </StyledLink>
              </LinkWrapper>
              <LinkWrapper>
                <StyledLink
                  href="https://www.serargentino.com/gente/deportes/las-25-mejores-frases-de-maradona"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  serargentino.com
                </StyledLink>
              </LinkWrapper>
            </LinksList>
          </Col>
        </Row>
        <Row bottom>
          <SmallText>&copy; 2021</SmallText>
          <div>
            <StyledLink
              href="https://kyryloorlov.com?ref=stalin"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website by El Lobo
            </StyledLink>
          </div>
        </Row>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;

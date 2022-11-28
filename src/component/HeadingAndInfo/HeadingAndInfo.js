import React from "react";
import { Container, HighlightText } from "../common.styled";
import { Title, Text, Wrapper } from "./HeadingAndInfo.styled";

const HeadingAndInfo = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Hi, I’m Jarod!</Title>
        <Text>
          Director, motion designer and animator. <br /> I create motion{" "}
          <HighlightText>graphics, animation</HighlightText> and{" "}
          <HighlightText>vfx</HighlightText> for films, brands, agencies and
          people with <HighlightText>big ideas.</HighlightText>
        </Text>
      </Wrapper>
    </Container>
  );
};

export default HeadingAndInfo;

import React from "react";
import { Logo, Wrapper, Text } from "./copyright.styled";
const CopyRight = ({ logo }) => {
  return (
    <Wrapper>
      {logo && <Logo src="/images/logo.png" alt="#" />}
      <Text>2022 motionhaus All Rights Reserved</Text>
    </Wrapper>
  );
};

export default CopyRight;

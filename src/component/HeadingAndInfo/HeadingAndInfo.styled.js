import styled from "styled-components";
export const Wrapper = styled.div`
  max-width: 900px;
  padding: 60px 0;
`;
export const Title = styled.h2`
  font-family: "Archivo Black", sans-serif;
  font-size: 64px;
  font-weight: 400;
  line-height: 120%;
  color: #ac9555;
  @media only screen and (max-width: 1199px) {
    font-size: 56px;
  }
  @media only screen and (max-width: 767px) {
    font-size: 48px;
  }
  @media only screen and (max-width: 520px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 350px) {
    font-size: 36px;
  }
`;
export const Text = styled.p`
  font-family: "Adamina", serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 140%;
  color: #f0ede8;
  padding-top: 10px;
  @media only screen and (max-width: 1199px) {
    font-size: 28px;
  }
  @media only screen and (max-width: 767px) {
    font-size: 24px;
    br {
      display: none;
    }
  }
  @media only screen and (max-width: 520px) {
    font-size: 20px;
    line-height: 150%;
  }
  @media only screen and (max-width: 350px) {
    font-size: 18px;
  }
`;

// font-family: 'Adamina', serif;
// font-family: 'Archivo Black', sans-serif;
// font-family: 'Source Sans Pro', sans-serif;

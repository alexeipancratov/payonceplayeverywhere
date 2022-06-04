import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.primary};
`;

function GamesSection() {
  return <Wrapper />;
}

export default GamesSection;

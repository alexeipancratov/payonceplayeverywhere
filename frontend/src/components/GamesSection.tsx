import React from "react";
import styled from "styled-components";
import EldenRing from "../assets/elden-ring.jpg";
import Souldier from "../assets/souldier.jpg";
import Warhammer from "../assets/warhammer.jpg";
import Game from "./Game";

const Container = styled.section`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.primary};
`;

const GameRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.color.ternary};
  height: 75vh;
  margin: 0px 5vw 0px;
  @media (max-width: ${({ theme }) => theme.screenSize.laptopL}) {
    height: 200vw;
    justify-content: flex-end;
  }
`;

const GameRowLabel = styled.label`
  margin-bottom: 20px;
`;

const Games = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.screenSize.laptopL}) {
    flex-direction: column;
    justify-content: space-around;
    height: 200vw;
  }
`;

function GamesSection() {
  return (
    <Container>
      <GameRow>
        <GameRowLabel>Buy games</GameRowLabel>
        <Games>
          <Game name="Elden ring" image={EldenRing} />
          <Game name="Warhammer skulls" image={Warhammer} />
          <Game name="Souldiers" image={Souldier} />
        </Games>
      </GameRow>
    </Container>
  );
}

export default GamesSection;

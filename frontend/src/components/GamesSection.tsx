import React, { useEffect, useState } from "react";
import styled from "styled-components";
import EldenRing from "../assets/elden-ring.jpg";
import Souldier from "../assets/souldier.jpg";
import Warhammer from "../assets/warhammer.jpg";
import Game from "./Game";

export enum GameEnum {
  ELDEN_RING,
  WARHAMMER_SKULLS,
  SOULDIERS,
}

const GameRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.color.ternary};
  height: 75vh;
  margin: 0px 5vw 0px;
  @media (max-width: ${({ theme }) => theme.screenSize.laptopM}) {
    justify-content: flex-end;
    height: 200vh;
  }
`;

const GameRowLabel = styled.label`
  margin-bottom: 20px;
  font-weight: bold;
`;

const MobileLabel = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Games = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.screenSize.laptopM}) {
    flex-direction: column;
    justify-content: space-around;
    height: 200vh;
  }
`;

function GamesSection() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1024);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <GameRow>
      {isDesktop && <GameRowLabel>Buy or claim</GameRowLabel>}
      <Games>
        {!isDesktop && (
          <MobileLabel>
            <GameRowLabel>Buy or claim</GameRowLabel>
            <Game name="Elden ring" image={EldenRing} />
          </MobileLabel>
        )}
        {isDesktop && (
          <Game id={GameEnum.ELDEN_RING} name="Elden ring" image={EldenRing} />
        )}
        <Game
          id={GameEnum.WARHAMMER_SKULLS}
          name="Warhammer skulls"
          image={Warhammer}
        />
        <Game id={GameEnum.SOULDIERS} name="Souldiers" image={Souldier} />
      </Games>
    </GameRow>
  );
}

export default GamesSection;

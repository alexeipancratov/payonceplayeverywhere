import React, { useState } from "react";
import styled from "styled-components";
import { claimGame, buyGame } from "../services/GameService";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  @media (max-width: ${({ theme }) => theme.screenSize.laptopL}) {
    width: 300px;
  }
`;

const Image = styled.img``;

const GameInfo = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.secondary};
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.div`
  font-weight: bold;
`;

interface Props {
  image: string;
  name: string;
  id: number;
}

function Game({ id, image, name }: Props) {
  const [isClaimed, setIsClaimed] = useState<boolean>(false);

  const onBuy = async () => {
    await buyGame(name);
    setIsClaimed(true);
  };

  const onClaim = async () => {
    const isSuccess = await claimGame(id);
    setIsClaimed(isSuccess);
  };

  return (
    <Container>
      <Image src={image} />
      <GameInfo>
        <Label>{name}</Label>
        <Button onClick={() => onBuy()} label={isClaimed ? "Bought" : "Buy"} disabled={isClaimed} width={"30%"} />
        <Button onClick={() => onClaim()} label={isClaimed ? "Claimed" : "Claim"} disabled={isClaimed} width={"30%"} />
      </GameInfo>
    </Container>
  );
}

export default Game;

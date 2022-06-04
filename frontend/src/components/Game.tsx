import React from "react";
import styled from "styled-components";
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
}

function Game({ image, name }: Props) {
  return (
    <Container>
      <Image src={image} />
      <GameInfo>
        <Label>{name}</Label>
        <Button label="Buy" width={"30%"} />
      </GameInfo>
    </Container>
  );
}

export default Game;

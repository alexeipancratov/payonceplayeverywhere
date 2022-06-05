import React from "react";
import styled from "styled-components";
import { MetamaskButton } from "./MetamaskButton";

const StickyToolBarWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.color.secondary};
  padding: 1.5vh;
  overflow: hidden;
  width: 100%;
  z-index: 10;
`;

const PlayEverywhere = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.color.ternary};
  justify-self: center;
  align-self: center;
  grid-column: 2/3;
  @media (max-width: ${({ theme }) => theme.screenSize.mobileL}) {
    grid-column: 1/3;
  }
  @media (max-width: ${({ theme }) => theme.screenSize.mobileS}) {
    justify-self: baseline;
  }
`;

const ConnectWalletButton = styled.div`
  justify-self: center;
  grid-column: 3/3;
  @media (max-width: ${({ theme }) => theme.screenSize.mobileL}) {
    justify-self: flex-start;
  }
`;

function Toolbar() {
  return (
    <>
      <StickyToolBarWrapper>
        <PlayEverywhere>Pay Once, Play Everywhere</PlayEverywhere>
        <ConnectWalletButton>
          <MetamaskButton />
        </ConnectWalletButton>
      </StickyToolBarWrapper>
    </>
  );
}

export default Toolbar;

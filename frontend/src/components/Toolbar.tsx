import React from "react";
import styled from "styled-components";
import { MetamaskButton } from "./MetamaskButton";

const StickyToolBarWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.color.secondary};
  padding: 1vw;
  overflow: hidden;
  width: 100%;
`;

const PlayEverywhere = styled.span`
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
    justify-self: auto;
  }
`;

function Toolbar() {
  return (
    <>
      <StickyToolBarWrapper>
        <PlayEverywhere>PayOncePlayEverywhere</PlayEverywhere>
        <ConnectWalletButton>
          <MetamaskButton />
        </ConnectWalletButton>
      </StickyToolBarWrapper>
    </>
  );
}

export default Toolbar;

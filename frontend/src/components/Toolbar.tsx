import React from "react";
import styled from "styled-components";
import { MetamaskButton } from "./MetamaskButton";

const StickyToolBarWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.color.primary};
  padding: 0.5vw;
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
`;

const ConnectWalletButton = styled.div`
  justify-self: center;
  grid-column: 3/3;
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

import MetaMaskOnboarding from "@metamask/onboarding";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
declare let window: any;

const ONBOARD_TEXT = "Install";
const CONNECT_TEXT = "Connect";
const CONNECTED_TEXT = "Connected";

export function MetamaskButton() {
  const [buttonText, setButtonText] = useState(ONBOARD_TEXT);
  const [isConnected, setIsConnected] = useState(false);
  const [accounts, setAccounts] = useState<string[]>([]);
  const onboarding = useRef<MetaMaskOnboarding>();

  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        setIsConnected(true);
        setButtonText(CONNECTED_TEXT);
        (onboarding.current as MetaMaskOnboarding).stopOnboarding();
      } else {
        setButtonText(CONNECT_TEXT);
        setIsConnected(false);
      }
    }
  }, [accounts]);

  useEffect(() => {
    function handleNewAccounts(newAccounts: string[]) {
      setAccounts(newAccounts);
    }
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum
        .request({ method: "eth_accounts" })
        .then(handleNewAccounts);
      window.ethereum.on("accountsChanged", handleNewAccounts);
    }
  }, []);

  const onClick = () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((newAccounts: any) => {
          setAccounts(newAccounts);
        });
    } else {
      (onboarding.current as MetaMaskOnboarding).startOnboarding();
    }
  };
  return (
    <Button
      disabled={isConnected}
      onClick={onClick}
      label={buttonText}
      width="100%"
    />
  );
}

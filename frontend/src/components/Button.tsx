import React from "react";
import styled from "styled-components";

const MainButton = styled.button<{ width: string }>`
  appearance: none;
  background-color: ${({ theme }) => theme.color.black};
  border: 2px solid #1a1a1a;
  border-radius: 15px;
  box-sizing: border-box;
  color: ${({ disabled, theme }) =>
    !disabled ? theme.color.ternary : theme.color.primary};
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: ${(props) => props.width};
  will-change: transform;

  &:disabled {
    pointer-events: none;
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }
  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

interface Props {
  label: string;
  width: string;
  onClick: any;
  disabled?: boolean;
}

function Button({ label, onClick, width, disabled }: Props) {
  return (
    <MainButton disabled={disabled} width={width} onClick={onClick}>
      {label}
    </MainButton>
  );
}

export default Button;

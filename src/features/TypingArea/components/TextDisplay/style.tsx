import styled, { keyframes } from "styled-components";

export const TextContainer = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 28px;
  line-height: 1.5;
  color: white;
`;

const fadeIn = keyframes`
  from {
    opacity: 0.6;
  }
  to {
    opacity: 1;
  }
`;

export const CorrectChar = styled.b`
  color: #4e4e50;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

export const IncorrectChar = styled.b`
  color: #6f2232;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const blinkAnimation = keyframes`
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 0.6;
  }
`;

export const CurrentChar = styled.span`
  text-decoration: underline;
  color: #c3073f;
  text-decoration-color: #c3073f;
  text-decoration-thickness: 4px; /* увеличили толщину underline */
  text-underline-offset: 6px; /* увеличили отступ underline */
  animation: ${blinkAnimation} 3s infinite; /* добавили анимацию */
`;

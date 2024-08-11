import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  margin: 0 auto;
  border-top: 2px solid #c3073f;
  border-right: 2px solid #c3073f;
  border-bottom: 2px solid #c3073f;
  border-left: 4px solid #1a1a1d;
  background: transparent;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export default Spinner;

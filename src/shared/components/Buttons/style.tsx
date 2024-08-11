import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  width: fit-content;
  background: inherit;
  border: none;

  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.6;
    transition: all 0.3s ease-in-out;
  }
`;

export default Button;

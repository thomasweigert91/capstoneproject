import styled from "styled-components";
import {Icon} from "@iconify/react";

const StartRoutineButton = () => {
  return (
    <StartButton>
      <Icon
        icon="majesticons:rocket-3-start-line"
        width="36"
        height="36"
        title="Home"
        color="fcfbff"
      />

      <ButtonTextAccent>Start Routine</ButtonTextAccent>
    </StartButton>
  );
};

const ButtonTextAccent = styled.p`
  padding-left: 0.8rem;
  font-size: 1.25rem;
  color: #fcfbff;
`;
export const StartButton = styled.div`
  width: 15rem;
  border: 1px solid #8a878e;
  background-color: #735cdd;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 1rem;
  border-radius: 5px;
  box-shadow: 2px 2px 10px #c1bec7;
`;

export default StartRoutineButton;

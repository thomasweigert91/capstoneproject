import styled from "styled-components";
import {Icon} from "@iconify/react";

const NewRoutineButton = () => {
  return (
    <Button>
      <Icon
        icon="tabler:clipboard-list"
        width="36"
        height="36"
        title="Home"
        color="735CDD"
      />
      <ButtonText>CREATE</ButtonText>
    </Button>
  );
};

const Button = styled.div`
  width: 15rem;
  border: 1px solid #8a878e;
  background-color: #fcfbff;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 1rem;
  border-radius: 5px;
  box-shadow: 2px 2px 10px #c1bec7;
`;

const ButtonText = styled.p`
  padding-left: 0.8rem;
  font-size: 1.25rem;
  color: #211d29;
`;

export default NewRoutineButton;

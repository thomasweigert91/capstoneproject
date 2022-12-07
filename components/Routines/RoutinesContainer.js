import styled from "styled-components";
import ExploreButton from "../Buttons/ExploreButton";
import NewRoutineButton from "../Buttons/NewRoutineButton";

const RoutinesContainer = () => {
  return (
    <ButtonContainer>
      <ExploreButton />

      <NewRoutineButton />
    </ButtonContainer>
  );
};

const ButtonContainer = styled.section`
  width: 100%;
  height: 12rem;
  padding: 4.5rem 0;
  background-color: #fcfbff;
  display: flex;
  justify-content: center;
`;

export default RoutinesContainer;

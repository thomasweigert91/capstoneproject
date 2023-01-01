import styled from "styled-components";
import DoneWorkout from "./DoneWorkout/DoneWorkout";

export const HomeContainer = () => {
  const doneWorkouts = JSON.parse(localStorage.getItem("doneworkouts"));

  return (
    <Container>
      {doneWorkouts.map(doneworkout => (
        <DoneWorkout key={doneworkout.id} doneworkout={doneworkout} />
      ))}
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: 100vh;
  padding: 4.6rem 0;
  background-color: #fcfbff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

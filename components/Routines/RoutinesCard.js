import styled from "styled-components";
import StartRoutineButton from "../Buttons/StartRoutineButton";
import Link from "next/link";

const RoutinesCard = ({workout}) => {
  return (
    <>
      <RoutinesCardContainer>
        <RoutineName>{workout.name}</RoutineName>
        <Link href={`/workouts/${workout.id}`}>
          <StartRoutineButton />
        </Link>
      </RoutinesCardContainer>
    </>
  );
};

const RoutinesCardContainer = styled.div`
  width: 20rem;
  background-color: #fcfbff;
  height: 10rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  margin: 1rem;
  border: 1.5px solid #c1bec7;
`;

const RoutineName = styled.h2`
  margin: 0;
  color: #211d29;
  text-transform: capitalize;
`;

export default RoutinesCard;

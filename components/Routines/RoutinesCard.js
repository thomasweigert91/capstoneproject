import styled from "styled-components";
import StartRoutineButton from "../Buttons/StartRoutineButton";
import Link from "next/link";
import {Icon} from "@iconify/react";

const RoutinesCard = ({workout, deleteWorkout}) => {
  return (
    <>
      <RoutinesCardContainer>
        <DeleteIcon
          icon="material-symbols:delete-forever-outline"
          width="25"
          height="25"
          color="#D5000B"
          title="Back"
          onClick={() => deleteWorkout(workout.id)}
        />
        <RoutineName>{workout.name}</RoutineName>
        <Link href={`/workouts/${workout.id}`} style={{textDecoration: "none"}}>
          <StartRoutineButton />
        </Link>
      </RoutinesCardContainer>
    </>
  );
};

const DeleteIcon = styled(Icon)`
  position: absolute;
  top: 0.25rem;
  right: 0.5rem;
`;

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
  position: relative;
`;

const RoutineName = styled.h2`
  margin: 0;
  color: #211d29;
  text-transform: capitalize;
`;

export default RoutinesCard;

import styled from "styled-components";
import StartRoutineButton from "../Buttons/StartRoutineButton";
import Link from "next/link";
import {Icon} from "@iconify/react";
import useLocalStorage from "../Utils/useLocalStorage";

const RoutinesCard = ({workout, deleteWorkout}) => {
  const [singleWorkout, setSingleWorkout] = useLocalStorage("workout", []);
  console.log(singleWorkout);
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
        <Link
          href={`/workouts/${workout.id}`}
          style={{textDecoration: "none"}}
          onClick={() => setSingleWorkout(workout)}
        >
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
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  margin: 1rem;
  border: 1.5px solid #c1bec7;
  position: relative;
  box-shadow: 0.3px 1.5px 1.2px rgba(0, 0, 0, 0.01),
    0.8px 3.5px 2.9px rgba(0, 0, 0, 0.016),
    1.4px 6.3px 5.1px rgba(0, 0, 0, 0.022),
    2.2px 10.4px 8.5px rgba(0, 0, 0, 0.028),
    3.7px 17.2px 14px rgba(0, 0, 0, 0.034),
    6.5px 30.1px 24.5px rgba(0, 0, 0, 0.043), 14px 65px 53px rgba(0, 0, 0, 0.06);
`;

const RoutineName = styled.h2`
  margin: 0;
  color: #211d29;
  text-transform: capitalize;
`;

export default RoutinesCard;

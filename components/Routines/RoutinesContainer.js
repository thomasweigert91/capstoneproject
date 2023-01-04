import React from "react";
import styled from "styled-components";
import ExploreButton from "../Buttons/ExploreButton";
import RoutinesCard from "./RoutinesCard";
import {useEffect} from "react";
import NewRoutineButton from "../Buttons/NewRoutineButton";
import useLocalStorage from "../Utils/useLocalStorage";

const RoutinesContainer = () => {
  const [workouts, setWorkouts] = useLocalStorage("workouts", []);

  /*---------------------GET WORKOUTS OUT OF THE LS-------------------------*/

  function setWorkoutInLocalStorage(id) {
    const workout = workouts.find(w => w.id === id);
    localStorage.setItem("workout", JSON.stringify(workout));
  }

  /*---------------------DELETE FUNCTION FOR ROUTINE CARDS-------------------------*/

  function deleteWorkout(id) {
    const updatedWorkouts = workouts.filter(workout => workout.id !== id);
    setWorkouts(updatedWorkouts);
  }

  /*---------------------RENDER-------------------------*/

  return (
    <>
      <ButtonContainer>
        <ExploreButton />
        <NewRoutineButton />
      </ButtonContainer>
      <CreatedRoutinesContainer>
        {workouts?.map((workout, index) => (
          <RoutinesCard
            key={index}
            workout={workout}
            deleteWorkout={deleteWorkout}
            setWorkoutInLocalStorage={setWorkoutInLocalStorage}
          />
        ))}
      </CreatedRoutinesContainer>
    </>
  );
};

export default RoutinesContainer;

const ButtonContainer = styled.section`
  width: 100%;
  height: 12rem;
  padding: 4.5rem 0;
  background-color: #fcfbff;
  display: flex;
  justify-content: center;
`;

const CreatedRoutinesContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

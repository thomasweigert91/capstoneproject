import React from "react";
import styled from "styled-components";
import ExploreButton from "../Buttons/ExploreButton";
import RoutinesCard from "./RoutinesCard";
import {useState, useEffect} from "react";
import NewRoutineButton from "../Buttons/NewRoutineButton";

const RoutinesContainer = () => {
  const [workouts, setWorkouts] = useState([]);

  /*---------------------GET WORKOUTS OUT OF THE LS-------------------------*/

  useEffect(() => {
    const retrievedData = JSON.parse(localStorage.getItem("workouts"));
    setWorkouts(retrievedData);
  }, []);

  /*---------------------DELETE FUNCTION FOR ROUTINE CARDS-------------------------*/

  function deleteWorkout(id) {
    const updatedWorkouts = workouts.filter(workout => workout.id !== id);
    setWorkouts(updatedWorkouts);
    localStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
  }

  /*---------------------RENDER-------------------------*/

  return (
    <>
      <ButtonContainer>
        <ExploreButton />
        <NewRoutineButton />
      </ButtonContainer>
      <CreatedRoutinesContainer>
        {workouts.map((workout, index) => (
          <RoutinesCard
            key={index}
            workout={workout}
            deleteWorkout={deleteWorkout}
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

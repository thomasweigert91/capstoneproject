import React from "react";
import {useRouter} from "next/router";
import WorkoutCard from "../../components/Workout/WorkoutCard";
import {WorkoutHeader} from "../../components/Workout/WorkoutHeader";
import styled from "styled-components";

const Workout = ({
  currentWeight,
  reps,
  lastWeight,
  handleCurrentWeightChange,
  handleRepsChange,
}) => {
  const router = useRouter();
  const {id} = router.query;
  const workouts = JSON.parse(localStorage.getItem("workouts"));
  const workout = workouts.find(workout => workout.id == id);
  const exercises = workout.exercises;

  return (
    <>
      <WorkoutHeader />
      <WorkoutContainer>
        {exercises.map(exercise => (
          <WorkoutCard
            key={exercise.id}
            exercise={exercise}
            workout={workout}
            currentWeight={currentWeight}
            reps={reps}
            lastWeight={lastWeight}
            handleCurrentWeightChange={handleCurrentWeightChange}
            handleRepsChange={handleRepsChange}
          />
        ))}
      </WorkoutContainer>
    </>
  );
};

const WorkoutContainer = styled.div`
  margin-top: 4.5rem;
`;

export default Workout;

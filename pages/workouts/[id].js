import React from "react";
import {useRouter} from "next/router";
import WorkoutCard from "../../components/Workout/WorkoutCard";
import {WorkoutHeader} from "../../components/Workout/WorkoutHeader";
import styled from "styled-components";
import {useState, useEffect} from "react";

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
  const [exercises, setExercises] = useState(
    JSON.parse(localStorage.getItem("workout"))?.exercises ?? workout.exercises
  );

  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <WorkoutHeader workout={workout} />

      <WorkoutContainer>
        {exercises?.map((exercise, index) => (
          <WorkoutCard
            key={exercise.id}
            exercise={exercise}
            workout={workout}
            currentWeight={currentWeight}
            reps={reps}
            exerciseIndex={index}
            lastWeight={lastWeight}
            handleCurrentWeightChange={handleCurrentWeightChange}
            handleRepsChange={handleRepsChange}
            setExercises={setExercises}
            exercises={exercises}
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

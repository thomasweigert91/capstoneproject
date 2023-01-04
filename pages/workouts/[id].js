import React from "react";
import {useRouter} from "next/router";
import WorkoutCard from "../../components/Workout/WorkoutCard";
import {WorkoutHeader} from "../../components/Workout/WorkoutHeader";
import styled from "styled-components";
import {useState, useEffect} from "react";
import {Icon} from "@iconify/react";
import useLocalStorage from "../../components/Utils/useLocalStorage";

const Workout = ({
  currentWeight,
  reps,
  lastWeight,
  handleCurrentWeightChange,
  handleRepsChange,
}) => {
  const [singleWorkout, setSingleWorkout] = useLocalStorage("workout", []);
  const [exercises, setExercises] = useState(
    JSON.parse(localStorage.getItem("workout")).exercises
  );

  console.log(exercises);

  // setExercises({...singleWorkout, exercises:[...exercises, newExercise]})

  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const elapsedMinutes = Math.floor(elapsedTime / 60);
  const elapsedSeconds = elapsedTime % 60;

  const elapsedTimeString = `${elapsedMinutes
    .toString()
    .padStart(2, "0")}:${elapsedSeconds.toString().padStart(2, "0")}`;

  return (
    <>
      <WorkoutHeader workout={singleWorkout} elapsedTime={elapsedTimeString} />

      <WorkoutContainer>
        <StatsContainer>
          <StatsSubContainer>
            <Icon
              icon="bx:stopwatch"
              width="36"
              height="36"
              title="Home"
              color="735CDD"
            />
            {elapsedTimeString}
          </StatsSubContainer>
          <StatsSubContainer>
            <Icon
              icon="pajamas:weight"
              width="36"
              height="36"
              title="Home"
              color="735CDD"
            />
            Volume
          </StatsSubContainer>
        </StatsContainer>

        {exercises?.map((exercise, index) => (
          <WorkoutCard
            key={exercise.id}
            exercise={exercise}
            workout={singleWorkout}
            currentWeight={currentWeight}
            reps={reps}
            exerciseIndex={index}
            lastWeight={lastWeight}
            handleCurrentWeightChange={handleCurrentWeightChange}
            handleRepsChange={handleRepsChange}
            setExercises={setExercises}
            exercises={exercises}
            singleWorkout={singleWorkout}
            setSingleWorkout={setSingleWorkout}
          />
        ))}
      </WorkoutContainer>
    </>
  );
};

const WorkoutContainer = styled.div`
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
`;

const StatsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StatsSubContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default Workout;

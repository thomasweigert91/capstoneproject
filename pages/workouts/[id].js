import React from "react";
import {useRouter} from "next/router";
import WorkoutCard from "../../components/Workout/WorkoutCard";
import {WorkoutHeader} from "../../components/Workout/WorkoutHeader";
import styled from "styled-components";
import {useState, useEffect} from "react";
import {Icon} from "@iconify/react";

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
  const [totalVolume, setTotalVolume] = useState(0);
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

  function calculateTotalVolumeAndSetState() {
    const sets = workout.exercises[0].sets;
    const newTotalVolume = calculateTotalVolume(sets);
    setTotalVolume(newTotalVolume);
    console.log(totalVolume);
  }
  function calculateTotalVolume(sets) {
    return sets?.reduce((total, set) => {
      return total + set.weight * set.reps;
    }, 0);
  }
  return (
    <>
      <WorkoutHeader workout={workout} elapsedTime={elapsedTimeString} />

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
            {totalVolume}
          </StatsSubContainer>
        </StatsContainer>

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
            calculateTotalVolumeAndSetState={calculateTotalVolumeAndSetState}
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

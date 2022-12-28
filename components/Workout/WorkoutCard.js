import React from "react";
import styled from "styled-components";
import {Icon} from "@iconify/react";
import {AddSetButton} from "../Buttons/AddSetButton";
import {useState} from "react";
import {WorkoutSetComp} from "./WorkoutCardComponents/WorkoutSetComp";

const WorkoutCard = ({
  exercise,
  workout,
  currentWeight,
  reps,
  lastWeight,
  handleCurrentWeightChange,
  handleLastWeight,
}) => {
  const [exercises, setExercises] = useState(
    localStorage.getItem("workout", JSON.stringify(workout.exercises))
  );

  const [workoutSets, setWorkoutSets] = useState([]);
  const [setId, setSetId] = useState(0);

  const handleAddSetButtonClick = () => {
    setSetId(setId + 1);
    setWorkoutSets([...workoutSets, {id: setId, data: {}}]);
  };

  const handleSaveSetButtonClick = () => {
    const updatedSets = workoutSets.map(set => {
      if (set.id === setId) {
        return {
          ...set,
          data: {
            setId: setId,
            lastWeight: lastWeight,
            currentWeight: currentWeight,
            reps: reps,
          },
        };
      }
      return set;
    });

    setWorkoutSets(updatedSets);

    const updatedWorkout = {
      ...workout,
      sets: workoutSets,
    };

    localStorage.setItem("workout", JSON.stringify(updatedWorkout));
    console.log(updatedWorkout);
    console.log(updatedWorkout.sets);
  };

  return (
    <>
      <ExerciseCardHead>
        <ExerciseImage src={exercise.gifUrl} />
        <ExerciseName>{exercise.name}</ExerciseName>
      </ExerciseCardHead>
      <SetTableHeadContainer>
        <TrackingTableHeadText>Set</TrackingTableHeadText>
        <TrackingTableHeadText>Last</TrackingTableHeadText>
        <TrackingTableHeadText>KG</TrackingTableHeadText>
        <TrackingTableHeadText>Reps</TrackingTableHeadText>
        <Icon
          icon="material-symbols:done"
          width="25"
          height="25"
          title="Workout"
          color="#8A878E"
        />
      </SetTableHeadContainer>
      <SetContainer>
        {workoutSets.map((set, index) => (
          <WorkoutSetComp
            key={index}
            currentWeight={currentWeight}
            reps={reps}
            lastWeight={lastWeight}
            handleCurrentWeightChange={handleCurrentWeightChange}
            handleLastWeight={handleLastWeight}
            handleSaveSetButtonClick={handleSaveSetButtonClick}
            workout={workout}
            exercise={exercise}
            setId={setId}
            workoutSets={workoutSets}
            setWorkoutSets={setWorkoutSets}
          >
            {set}
          </WorkoutSetComp>
        ))}
        <AddSetButton onClick={handleAddSetButtonClick} />
      </SetContainer>
    </>
  );
};

const ExerciseCardHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 1rem auto;
  padding: 0 1rem;
`;

const ExerciseName = styled.h3`
  color: #735cdd;
  font-size: 1.5rem;
  margin-left: 2rem;
  text-transform: capitalize;
  text-decoration: none;
`;

const ExerciseImage = styled.img`
  width: 4rem;
`;

const SetTableHeadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  height: 1.5rem;
  border-bottom: 1px solid #c1bec7;
`;

const TrackingTableHeadText = styled.p`
  color: #8a878e;
`;

const SetContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default WorkoutCard;

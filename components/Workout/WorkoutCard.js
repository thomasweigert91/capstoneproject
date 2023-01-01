import React from "react";
import styled from "styled-components";
import {Icon} from "@iconify/react";
import {AddSetButton} from "../Buttons/AddSetButton";
import {DeleteSetButton} from "../Buttons/DeleteSetButton";

import {WorkoutSetComp} from "./WorkoutCardComponents/WorkoutSetComp";
import {v4} from "uuid";

const WorkoutCard = ({
  exercise,
  workout,
  exerciseIndex,
  setExercises,
  exercises,
}) => {
  function addSet() {
    let data = exercises;
    const newSet = {
      id: v4(),
      weight: 0,
      reps: 0,
    };
    data = data.map((exercise, index) => {
      if (index === exerciseIndex) {
        return {
          ...exercise,
          sets: [...(data[exerciseIndex].sets || []), newSet],
        };
      } else {
        return exercise;
      }
    });
    setExercises(data);
  }

  function deleteLastSet() {
    if (exercises[exerciseIndex].sets.length > 0) {
      const data = exercises;
      data[exerciseIndex].sets.pop();
      setExercises(data);
    }
  }

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
        {exercise.sets?.map((set, index) => (
          <WorkoutSetComp
            key={index}
            set={set}
            exerciseIndex={exerciseIndex}
            setIndex={index}
            workout={workout}
          />
        ))}
        <ButtonContainer>
          <AddSetButton onClick={() => addSet()} />
          <DeleteSetButton onClick={deleteLastSet} />
        </ButtonContainer>
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

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
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
  margin-bottom: 3rem;
`;

export default WorkoutCard;

import React from "react";
import {Icon} from "@iconify/react";
import styled from "styled-components";

export const WorkoutSetComp = ({
  currentWeight,
  reps,
  lastWeight,
  handleCurrentWeightChange,
  handleRepsChange,
  setCount,
  workout,
}) => {
  const handleSaveSetButtonClick = () => {
    workout.exercises.forEach(exercise => {
      if (!exercise.sets) {
        exercise.sets = [];
      }
      exercise.sets.push({
        setCount: setCount,
        lastWeight: lastWeight,
        currentWeight: currentWeight,
        reps: reps,
      });
    });
    localStorage.setItem("workout", JSON.stringify(workout));
    console.log(workout);
  };

  return (
    <>
      <WorkoutSetCompContainer>
        <WorkoutSetText>{setCount}</WorkoutSetText>
        <WorkoutSetText>LAST</WorkoutSetText>
        <WorkoutSetText>
          <InputField
            type="number"
            onChange={handleCurrentWeightChange}
            placeholder={"weight"}
          />
        </WorkoutSetText>
        <WorkoutSetText>
          <InputField
            type="number"
            onChange={handleRepsChange}
            placeholder={"reps"}
          />
        </WorkoutSetText>
        <Icon
          icon="fluent:checkbox-checked-20-filled"
          width="36"
          height="36"
          title="Checkbox"
          color="#8A878E"
          onClick={handleSaveSetButtonClick}
        />
      </WorkoutSetCompContainer>
    </>
  );
};

const WorkoutSetCompContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.7rem;
  height: 1.5rem;
  width: 100%;
  margin: 0.5rem;
`;

const InputField = styled.input`
  width: 3.5rem;
  height: 1.75rem;
  margin: 0;
  text-align: center;
`;

const WorkoutSetText = styled.p`
  color: #211d29;
`;

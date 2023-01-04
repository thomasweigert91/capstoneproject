import React from "react";
import {Icon} from "@iconify/react";
import {useState} from "react";
import styled from "styled-components";
import {v4} from "uuid";

import useLocalStorage from "../../Utils/useLocalStorage";

export const WorkoutSetComp = ({set, exerciseIndex, setIndex}) => {
  const [currentWeight, setCurrentWeight] = useState(0);
  const [reps, setReps] = useState(0);
  const [savedSet, setSavedSet] = useState(false);
  const [singleWorkout, setSingleWorkout] = useLocalStorage("workout", []);

  const handleCurrentWeightChange = event => {
    setCurrentWeight(event.target.value);
  };

  const handleRepsChange = event => {
    setReps(event.target.value);
  };

  console.log(setSingleWorkout);
  function saveSet() {
    let data = singleWorkout;
    console.log(data);
    const newSet = {
      id: v4(),
      weight: currentWeight,
      reps: reps,
    };

    if (data.exercises[exerciseIndex].sets?.some(item => item.id === set.id)) {
      data = {
        ...data,
        exercises: data.exercises.map((exercise, index) => {
          if (index === exerciseIndex) {
            return {
              ...exercise,
              sets: exercise.sets.map(item => {
                if (item.id === set.id) {
                  return {...item, weight: currentWeight, reps: reps};
                } else {
                  return item;
                }
              }),
            };
          } else {
            return exercise;
          }
        }),
      };
    } else {
      data = {
        ...data,
        exercises: data.exercises.map((exercise, index) => {
          if (index === exerciseIndex) {
            return {
              ...exercise,
              sets: [...(data.exercises[exerciseIndex].sets || []), newSet],
            };
          } else {
            return exercise;
          }
        }),
      };
    }

    localStorage.setItem("workout", JSON.stringify(data));
    setSavedSet(!savedSet);
  }

  return (
    <>
      <WorkoutSetCompContainer
        style={{backgroundColor: savedSet ? "#AAFFC5" : "#FCFBFF"}}
      >
        <WorkoutSetText>{setIndex + 1}</WorkoutSetText>
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
          color={savedSet ? "#09D148" : "#8A878E"}
          onClick={saveSet}
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
  height: 2rem;
  width: 100%;
  margin: 0.5rem;
`;

const InputField = styled.input`
  width: 3.5rem;
  height: 1.75rem;
  margin: 0;
  text-align: center;
  border: none;
  background-color: transparent;
`;

const WorkoutSetText = styled.p`
  color: #211d29;
`;

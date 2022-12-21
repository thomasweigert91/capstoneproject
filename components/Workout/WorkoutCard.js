import React from "react";
import Link from "next/link";
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
  const [setCount, setSetCount] = useState(0);

  const [workoutSets, setWorkoutSets] = useState([]);
  const handleAddSetButtonClick = () => {
    setSetCount(workoutSets.length + 1);
    setWorkoutSets([...workoutSets, <WorkoutSetComp key={workout.id} />]);
  };

  return (
    <>
      <ExerciseCardHead>
        <ExerciseImage src={exercise.gifUrl} />
        <ExerciseName href={`/exercise/${exercise.id}`}>
          {exercise.name}
        </ExerciseName>
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
            setCount={setCount}
            workout={workout}
            exercise={exercise}
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

const ExerciseName = styled(Link)`
  color: #735cdd;
  font-size: 1.5rem;
  margin-left: 2rem;
  text-transform: capitalize;
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

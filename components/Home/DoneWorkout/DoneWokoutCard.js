import React from "react";

import styled from "styled-components";
import DoneWorkoutSetComp from "./DoneWorkoutSetComp";

export const DoneWokoutCard = ({exercise}) => {
  const sets = exercise.sets;

  return (
    <Card>
      <ExerciseImage src={exercise.gifUrl} />
      <DoneWorkoutHeading>{exercise.name}</DoneWorkoutHeading>
      <MuscEquipContainer>
        <MuscEquip>
          <MuscEquipHeading>Bodypart</MuscEquipHeading>
          <MuscEquipDetail>{exercise.bodyPart}</MuscEquipDetail>
        </MuscEquip>
        <MuscEquip>
          <MuscEquipHeading>Equipment</MuscEquipHeading>
          <MuscEquipDetail>{exercise.equipment}</MuscEquipDetail>
        </MuscEquip>
      </MuscEquipContainer>
      <SetContainer>
        {sets
          ? sets?.map(set => <DoneWorkoutSetComp key={set.id} set={set} />)
          : "No sets saved!"}
      </SetContainer>
    </Card>
  );
};

const Card = styled.div`
  width: 80%;
  border: 1px solid #c1bec7;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1rem;
  border-radius: 5px;
  box-shadow: 4.1px 7.9px 12.8px rgba(0, 0, 0, 0.057),
    33px 63px 102px rgba(0, 0, 0, 0.11);
  padding: 1rem;
`;

const DoneWorkoutHeading = styled.h2`
  color: #735cdd;
  text-transform: capitalize;
  display: flex;
  align-items: center;
`;

const MuscEquipContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SetContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
`;

const MuscEquip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto 1rem;
  padding: 0;
`;

const MuscEquipHeading = styled.p`
  font-size: 0.8rem;
  color: #8a878e;
`;

const MuscEquipDetail = styled.p`
  text-transform: capitalize;
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #211d29;
`;

const ExerciseImage = styled.img`
  width: 8rem;
  margin-right: 1rem;
`;

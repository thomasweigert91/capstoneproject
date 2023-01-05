import React from "react";
import styled from "styled-components";

const DoneWorkoutSetComp = ({set}) => {
  return (
    <SetCard>
      {set.weight}kg x {set.reps} Repetitions
    </SetCard>
  );
};
const SetCard = styled.div`
  margin: 0.3rem;
  font-size: 1.2rem;
  color: #211d29;
`;

export default DoneWorkoutSetComp;

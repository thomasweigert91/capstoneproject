import React from "react";
import styled from "styled-components";

const DoneWorkout = ({doneworkout}) => {
  return (
    <DoneWorkoutCard>
      <DoneWorkoutName>{doneworkout.name}</DoneWorkoutName>
      <DoneWorkoutStatsContainer>
        <StatsContainer>
          <StatsCaption>Time</StatsCaption>
          {doneworkout.time}
        </StatsContainer>
        <StatsContainer>
          <StatsCaption>Volume</StatsCaption>
          totalWeight
        </StatsContainer>
      </DoneWorkoutStatsContainer>
      <MoreDetailsButton>Show more details</MoreDetailsButton>
    </DoneWorkoutCard>
  );
};

const DoneWorkoutCard = styled.div`
  width: 80%;
  background-color: #fcfbff;
  border: 1px solid #8a878e;

  border-radius: 5px;
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem 0;
`;

const DoneWorkoutName = styled.h3`
  font-size: 2rem;
  margin: 0;
  top: 1rem;
`;

const DoneWorkoutStatsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20rem;
  top: 3.5rem;
`;

const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StatsCaption = styled.p`
  color: #8a878e;
`;

const MoreDetailsButton = styled.div`
  bottom: 1rem;
  background-color: #735cdd;
  margin-top: 2rem;
  padding: 0.75rem;
  border-radius: 5px;
  color: #fcfbff;
`;

export default DoneWorkout;

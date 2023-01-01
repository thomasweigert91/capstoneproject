import React from "react";
import styled from "styled-components";

const DoneWorkout = ({doneworkout}) => {
  return (
    <DoneWorkoutCard>
      <DoneWorkoutName>{doneworkout.name}</DoneWorkoutName>
      <DoneWorkoutStatsContainer>
        <StatsContainer>
          <StatsCaption>Time</StatsCaption>
        </StatsContainer>
        <StatsContainer>
          <StatsCaption>Volume</StatsCaption>
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
  height: 13rem;
  border-radius: 5px;
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const DoneWorkoutName = styled.h3`
  font-size: 2rem;
  margin: 0;
  position: absolute;
  top: 1rem;
`;

const DoneWorkoutStatsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20rem;
  position: absolute;
  top: 3.5rem;
`;

const StatsContainer = styled.div`
  display: flex;
`;

const StatsCaption = styled.p`
  color: #8a878e;
`;

const MoreDetailsButton = styled.div`
  position: absolute;
  bottom: 1rem;
  background-color: #735cdd;
  padding: 0.75rem;
  border-radius: 5px;
  color: #fcfbff;
`;

export default DoneWorkout;

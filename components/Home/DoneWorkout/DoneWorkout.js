import React from "react";
import styled from "styled-components";
import Link from "next/link";
import {useState} from "react";
import {useEffect} from "react";

const DoneWorkout = ({doneworkout}) => {
  const [totalWeight, setTotalWeight] = useState(0);

  function calculateTotalWeight() {
    let totalWeight = 0;

    doneworkout.exercises?.forEach(exercise => {
      exercise.sets?.forEach(set => {
        totalWeight += set.weight * set.reps;
      });
    });

    return totalWeight;
  }

  useEffect(() => {
    setTotalWeight(calculateTotalWeight());
  }, [totalWeight]);

  return (
    <DoneWorkoutCard>
      <DoneWorkoutName>{doneworkout.name}</DoneWorkoutName>
      <DoneWorkoutStatsContainer>
        <StatsContainer>
          <StatsCaption>Time</StatsCaption>
          <StatsText>{doneworkout.time}</StatsText>
        </StatsContainer>
        <StatsContainer>
          <StatsCaption>Volume</StatsCaption>
          <StatsText>{totalWeight} kg</StatsText>
        </StatsContainer>
      </DoneWorkoutStatsContainer>
      <Link
        href={`/doneworkout/${doneworkout.id}`}
        style={{textDecoration: "none"}}
      >
        <MoreDetailsButton>Show more details</MoreDetailsButton>
      </Link>
    </DoneWorkoutCard>
  );
};

const DoneWorkoutCard = styled.div`
  width: 80%;
  background-color: #fcfbff;
  border: 1px solid #c1bec7;
  border-radius: 5px;
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem 0;

  box-shadow: 1.6px 1.8px 1.8px rgba(0, 0, 0, 0.016),
    4.1px 4.5px 4.6px rgba(0, 0, 0, 0.022),
    8.3px 9.2px 9.4px rgba(0, 0, 0, 0.028),
    17.2px 19px 19.3px rgba(0, 0, 0, 0.034), 47px 52px 53px rgba(0, 0, 0, 0.05);
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
  font-size: 0.8rem;
  margin-bottom: 0;
`;

const StatsText = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 0;
  color: #211d29;
`;

const MoreDetailsButton = styled.div`
  bottom: 1rem;
  background-color: #735cdd;
  margin-top: 2rem;
  padding: 0.75rem;
  border-radius: 5px;
  color: #fcfbff;
  box-shadow: 0.6px 2.9px 4.6px rgba(0, 0, 0, 0.06),
    1.8px 8.1px 12.8px rgba(0, 0, 0, 0.036),
    4.2px 19.6px 30.8px rgba(0, 0, 0, 0.025),
    14px 65px 102px rgba(0, 0, 0, 0.015);
`;

export default DoneWorkout;

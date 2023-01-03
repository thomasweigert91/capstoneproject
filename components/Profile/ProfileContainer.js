import React from "react";
import styled from "styled-components";
import {Icon} from "@iconify/react";
import DoneWorkout from "../Home/DoneWorkout/DoneWorkout";

const ProfileContainer = () => {
  const workouts = JSON.parse(localStorage.getItem("doneworkouts"));
  const workoutsCount = workouts.length;

  return (
    <>
      <Body>
        <Icon
          icon="mdi:user-circle-outline"
          width="80"
          height="80"
          color="#735cdd"
          title="Profilepicture"
        />

        <PersonalContainer>
          <p style={{fontSize: "1.5rem", fontWeight: "500"}}>USERNAME</p>
          <div>Done Workouts: {workoutsCount}</div>
        </PersonalContainer>
        <StatsContainer>Stats</StatsContainer>
        <DashboardContainer>Dashboard</DashboardContainer>
        <DoneWorkoutsContainer>
          {workouts?.map(doneworkout => (
            <DoneWorkout key={doneworkout.id} doneworkout={doneworkout} />
          ))}
        </DoneWorkoutsContainer>
      </Body>
    </>
  );
};

const Body = styled.div`
  margin-top: 6rem;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 6rem;
  position: relative;
`;

const PersonalContainer = styled.div`
  position: absolute;
  top: -1.25rem;
  left: 6rem;
`;

const StatsContainer = styled.div`
  height: 12rem;
  margin-top: 1rem;
  border-top: 1px solid #c1bec7;
  border-bottom: 1px solid #c1bec7;
`;

const DashboardContainer = styled.div`
  border-bottom: 1px solid #c1bec7;
  height: 10rem;
`;

const DoneWorkoutsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ProfileContainer;

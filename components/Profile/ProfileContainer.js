import React, {useEffect} from "react";
import styled from "styled-components";
import {Icon} from "@iconify/react";
import DoneWorkout from "../Home/DoneWorkout/DoneWorkout";
import {useState} from "react";
import StatsButton from "../Buttons/ProfileButtons/StatsButton";
import ExerciseButton from "../Buttons/ProfileButtons/ExerciseButton"
import MeasurmentsButton from "../Buttons/ProfileButtons/MeasurmentsButton";
import CalenderButton from "../Buttons/ProfileButtons/CalenderButton";
import Link from "next/link";
const ProfileContainer = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    setWorkouts(JSON.parse(localStorage?.getItem("doneworkouts")));
  }, []);

  const workoutsCount = workouts?.length;

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
        <Dashboard>
          <DashboardContainer>
            <StatsButton />
            <Link href={"/explore"} style={{textDecoration: "none"}}>
            <ExerciseButton />
            </Link>
            <MeasurmentsButton />
            <CalenderButton />
          </DashboardContainer>
        </Dashboard>
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

const Dashboard = styled.section`
  height: 10rem;
  border-bottom: 1px solid #c1bec7;
`;

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 0.5rem;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const DoneWorkoutsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ProfileContainer;

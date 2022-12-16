import React from "react";
import {useRouter} from "next/router";
import WorkoutCard from "../../components/Workout/WorkoutCard";
import {WorkoutHeader} from "../../components/Workout/WorkoutHeader";
import styled from "styled-components";

const Workout = () => {
  const router = useRouter();
  const {id} = router.query;
  console.log(id);

  const workouts = JSON.parse(localStorage.getItem("workouts"));

  const workout = workouts.find(workout => workout.id == id);
  console.log(workouts);
  console.log(workout);

  return (
    <>
      <WorkoutHeader />
      <WorkoutContainer>
        <WorkoutCard key={workout.id} workout={workout} />
      </WorkoutContainer>
    </>
  );
};

const WorkoutContainer = styled.div`
  margin-top: 4.5rem;
`;

export default Workout;

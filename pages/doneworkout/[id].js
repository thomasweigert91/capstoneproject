import React, {useEffect} from "react";
import {SiteTitle} from "../../components/Routines/RoutinesHeader";
import {useRouter} from "next/router";
import useLocalStorage from "../../components/Utils/useLocalStorage";
import {useState} from "react";
import Link from "next/link";
import {Icon} from "@iconify/react";
import styled from "styled-components";
import {DoneWokoutCard} from "../../components/Home/DoneWorkout/DoneWokoutCard";

const DoneWorkout = () => {
  const router = useRouter();
  const {id} = router.query;
  const [doneWorkouts] = useLocalStorage("doneworkouts", []);
  const [selectedWorkout, setSelectedWorkout] = useState({});


  useEffect(() => {
    const workout = doneWorkouts?.find(workout => workout.id === id);
    setSelectedWorkout(workout);
  }, [id, doneWorkouts]);



  return (
    <>
      <HeaderContainer>
        <Link href="/">
          <BackIcon
            icon="material-symbols:arrow-back-ios"
            width="35"
            height="35"
            color="735CDD"
            title="Back"
          />
        </Link>
        <SiteTitle>{selectedWorkout?.name}</SiteTitle>
      </HeaderContainer>
      <BodyContainer>
        {selectedWorkout?.exercises?.map(exercise => (
          <DoneWokoutCard key={exercise.id} exercise={exercise}  />
        ))}
      </BodyContainer>
    </>
  );
};

const BodyContainer = styled.section`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const BackIcon = styled(Icon)`
  position: absolute;
  left: 20px;
  top: 20px;
`;

const HeaderContainer = styled.section`
  width: 100%;
  background-color: #fcfbff;
  height: 4.5rem;
  position: fixed;
  box-shadow: 0px 0px 10px #463f3a;
  top: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default DoneWorkout;

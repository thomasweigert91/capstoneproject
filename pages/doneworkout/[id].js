import React from "react";
import {HeaderContainer} from "../../components/Home/HomeHeader";
import {SiteTitle} from "../../components/Routines/RoutinesHeader";
import {useRouter} from "next/router";

const DoneWorkout = () => {
  const router = useRouter();
  const {id} = router.query;

  return (
    <>
      <HeaderContainer>
        <SiteTitle>{id}</SiteTitle>
      </HeaderContainer>
    </>
  );
};

export default DoneWorkout;

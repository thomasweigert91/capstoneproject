import styled from "styled-components";
import {Icon} from "@iconify/react";
import Link from "next/link";
import {v4} from "uuid";

export const WorkoutHeader = ({workout, elapsedTime}) => {
  const handleCancelWorkoutButtonClick = () => {
    if (localStorage.getItem("workout")) {
      localStorage.removeItem("workout");
    }
  };

  const handleSaveWorkoutButtonClick = () => {
    const currentWorkout = JSON.parse(localStorage.getItem("workout"));
    if (currentWorkout) {
      const savedWorkout = {
        name: currentWorkout.name,
        id: v4(),
        time: elapsedTime,
        exercises: currentWorkout.exercises,
      };
      let doneWorkouts = JSON.parse(localStorage.getItem("doneworkouts")) || [];
      doneWorkouts.push(savedWorkout);
      localStorage.setItem("doneworkouts", JSON.stringify(doneWorkouts));
      localStorage.removeItem("workout");
    }
  };

  return (
    <HeaderContainer>
      <Link href={"/routines"}>
        <QuitIcon
          icon="mdi:stop-remove-outline"
          width="35"
          height="35"
          color="735CDD"
          title="Back"
          onClick={handleCancelWorkoutButtonClick}
        />
      </Link>
      <SiteTitle>{workout.name}</SiteTitle>
      <Link href={"/"}>
        <SaveIcon
          icon="material-symbols:save-outline"
          width="35"
          height="35"
          color="735CDD"
          title="Save"
          onClick={handleSaveWorkoutButtonClick}
        />
      </Link>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.section`
  width: 100%;
  background-color: #fcfbff;
  height: 4.5rem;
  position: fixed;
  box-shadow: 0px 0px 10px #463f3a;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const QuitIcon = styled(Icon)`
  position: absolute;
  left: 20px;
  top: 20px;
`;

const SaveIcon = styled(Icon)`
  position: absolute;
  right: 20px;
  top: 20px;
`;

const SiteTitle = styled.h2`
  color: #8a878e;
`;

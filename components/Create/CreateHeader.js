import styled from "styled-components";
import {Icon} from "@iconify/react";
import Link from "next/link";

export const CreateHeader = ({
  handleSave,
  selectedExercises,
  workoutName,
  handleWorkoutNameChange,
}) => {
  return (
    <HeaderContainer>
      <Link href="/routines">
        <BackIcon
          icon="material-symbols:arrow-back-ios"
          width="35"
          height="35"
          color="735CDD"
          title="Back"
        />
      </Link>
      <RoutineName
        placeholder="Enter Routine Name"
        type={"text"}
        value={workoutName}
        onChange={handleWorkoutNameChange}
      ></RoutineName>
      <SaveIcon
        icon="material-symbols:save-outline"
        width="35"
        height="35"
        color="735CDD"
        title="Save"
        onClick={() => handleSave(selectedExercises)}
      />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.section`
  width: 100%;
  background-color: #fcfbff;
  height: 4.5rem;
  position: absolute;
  box-shadow: 0px 0px 10px #463f3a;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const RoutineName = styled.input`
  width: 14rem;
  height: 3rem;
  text-align: center;
  font-size: 1.25rem;
  border: none;
  text-transform: capitalize;
`;

const BackIcon = styled(Icon)`
  position: absolute;
  left: 20px;
  top: 20px;
`;

const SaveIcon = styled(Icon)`
  position: absolute;
  right: 20px;
  top: 20px;
`;

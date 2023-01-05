import React from "react";
import {Icon} from "@iconify/react";
import {ButtonText} from "./CalenderButton";

import BasicProfileButton from "./BasicProfileButton";

const ExerciseButton = () => {
  return (
    <BasicProfileButton>
      <Icon
        icon="icon-park-outline:dumbbell"
        width="24"
        height="24"
        title="Home"
        color="735CDD"
      />
      <ButtonText>Exercises</ButtonText>
    </BasicProfileButton>
  );
};

export default ExerciseButton;

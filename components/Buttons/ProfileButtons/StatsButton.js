import React from "react";
import BasicProfileButton from "./BasicProfileButton";
import {Icon} from "@iconify/react";
import { ButtonText } from "./CalenderButton";

const StatsButton = () => {
  return (
    <BasicProfileButton>
      <Icon
        icon="mdi:graph-timeline-variant"
        width="24"
        height="24"
        title="Home"
        color="735CDD"
      /> 
      <ButtonText>Stats</ButtonText>
    </BasicProfileButton>
  );
};

export default StatsButton;

import React from "react";
import styled from "styled-components";
import BasicProfileButton from "./BasicProfileButton";
import {Icon} from "@iconify/react";

const StatsButton = () => {
  return (
    <BasicProfileButton>
      <Icon
        icon="tabler:clipboard-list"
        width="36"
        height="36"
        title="Home"
        color="735CDD"
      />
    </BasicProfileButton>
  );
};

export default StatsButton;

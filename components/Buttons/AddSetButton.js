import React from "react";
import styled from "styled-components";
import {Icon} from "@iconify/react";

export const AddSetButton = ({onClick}) => {
  return (
    <AddButton onClick={onClick}>
      <Icon
        icon="material-symbols:add"
        width="25"
        height="25"
        title="Workout"
        color="#735cdd"
      />
      Add Set
    </AddButton>
  );
};

const AddButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #8a878e;
  width: 10rem;
  height: 2.25rem;
  border-radius: 5px;
  margin-top: 1rem;
`;

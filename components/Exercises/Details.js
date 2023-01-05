import React from "react";
import styled from "styled-components";
import {Icon} from "@iconify/react";

export const Details = ({exerciseDetail}) => {
  const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail;

  return (
    <>
      <DetailsContainer>
        <ExerciseName>{name}</ExerciseName>
        <DetailsImage src={gifUrl} alt={name} />
        <DetailsIconStack>
          <DetailsIconContainer>
            <DetailsIcon
              icon="icon-park-outline:dumbbell"
              width="36"
              height="36"
              title="Workout"
              color="#211D29"
            />
            <DetailsName>{equipment}</DetailsName>
          </DetailsIconContainer>
          <DetailsIconContainer>
            <DetailsIcon
              icon="icon-park-outline:dumbbell"
              width="36"
              height="36"
              title="Workout"
              color="#211D29"
            />
            <DetailsName>{bodyPart}</DetailsName>
          </DetailsIconContainer>
          <DetailsIconContainer>
            <DetailsIcon
              icon="icon-park-outline:dumbbell"
              width="36"
              height="36"
              title="Workout"
              color="#211D29"
            />
            <DetailsName>{target}</DetailsName>
          </DetailsIconContainer>
        </DetailsIconStack>
      </DetailsContainer>
    </>
  );
};

const ExerciseName = styled.h3`
  padding: 0;
  color: #211d29;
  font-size: 2rem;
  text-transform: capitalize;
`;

const DetailsIcon = styled(Icon)`
  background-color: #735cdd;
  width: 4rem;
  height: 4rem;
  padding: 0.5rem;
  border-radius: 999px;
`;

const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1rem auto;
`;

const DetailsIconStack = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
`;

const DetailsIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DetailsName = styled.p`
  text-transform: capitalize;
  font-size: 1.15rem;
`;

const DetailsImage = styled.img``;

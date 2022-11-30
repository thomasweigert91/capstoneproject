import styled from "styled-components";
import {Icon} from "@iconify/react";
import Link from "next/link";

export const ExercisesHeader = () => {
  return (
    <HeaderContainer>
      <Link href="/">
        <Icon
          icon="material-symbols:arrow-back-ios"
          width="35"
          height="35"
          color="735CDD"
          title="Back"
        />
      </Link>
      <SiteTitle>Add exercises</SiteTitle>
      <Icon
        icon="ic:outline-save-alt"
        width="35"
        height="35"
        title="Save"
        color="735CDD"
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
  justify-content: space-around;
`;

const SiteTitle = styled.h2`
  color: #8a878e;
  font-weight: 400;
  font-size: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
`;

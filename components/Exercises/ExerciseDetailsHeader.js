import styled from "styled-components";
import {Icon} from "@iconify/react";
import Link from "next/link";

export const ExerciseDetailsHeader = () => {
  return (
    <HeaderContainer>
      <Link href="/explore">
        <BackIcon
          icon="material-symbols:arrow-back-ios"
          width="35"
          height="35"
          color="735CDD"
          title="Back"
        />
      </Link>
      <SiteTitle>Details</SiteTitle>
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

const SiteTitle = styled.h2`
  color: #8a878e;
  font-weight: 400;
  font-size: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
`;

const BackIcon = styled(Icon)`
  position: absolute;
  left: 20px;
  top: 20px;
`;

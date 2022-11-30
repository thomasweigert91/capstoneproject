import styled from "styled-components";
import {Icon} from "@iconify/react";
import ActiveLink from "./ActiveLink";

export default function Navigation() {
  return (
    <NavigationContainer>
      <ActiveLink href="/">
        <Icon
          icon="material-symbols:home-outline"
          width="60"
          height="60"
          title="Home"
        />
      </ActiveLink>
      <ActiveLink href="/routines">
        <Icon
          icon="icon-park-outline:dumbbell"
          width="60"
          height="60"
          title="Workout"
        />
      </ActiveLink>
      <ActiveLink href="/profile">
        <Icon icon="pajamas:profile" width="55" height="55" title="Profile" />
      </ActiveLink>
    </NavigationContainer>
  );
}

const NavigationContainer = styled.nav`
  width: 100%;
  background-color: #fcfbff;
  height: 5rem;
  position: absolute;
  box-shadow: 0px 0px 10px #463f3a;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

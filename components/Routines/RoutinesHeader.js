import styled from "styled-components";

export const WorkoutHeader = () => {
  return (
    <HeaderContainer>
      <SiteTitle>Routines</SiteTitle>
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

import styled from "styled-components";

export const HomeHeader = () => {
  return (
    <HeaderContainer>
      <AppTitle>TRAINIFY</AppTitle>
    </HeaderContainer>
  );
};

export const HeaderContainer = styled.section`
  width: 100%;
  background-color: #fcfbff;
  height: 4.5rem;
  position: fixed;
  box-shadow: 0px 0px 10px #463f3a;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const AppTitle = styled.h1`
  color: #735cdd;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`;

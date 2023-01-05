import styled from "styled-components";

export const Container = styled.section`
  height: 100%;
  padding: 2rem 0;
  background-color: #fcfbff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4.5rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const SearchButton = styled.button`
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 0 5px 5px 0;
  background-color: #735cdd;
  box-shadow: 0 0 15px #c1bec7;
`;

export const SearchBar = styled.input`
  height: 3rem;
  width: 16rem;
  border: none;
  border-radius: 5px 0 0 5px;
  background-color: #fcfbff;
  color: #211d29;
  text-align: center;
  box-shadow: 0 0 15px #c1bec7;
`;

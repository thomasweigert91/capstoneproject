import styled from "styled-components";
import {Icon} from "@iconify/react";
import {useState, useEffect} from "react";
import HorizontalScroll from "./HorizontalScroll";
import Exercises from "../Exercises/Exercises";

import {exerciseOptions, fetchData} from "../Utils/fetchData";

const ExploreContainer = () => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      console.log(bodyPart);

      const searchedExercises = exercisesData.filter(
        exercise =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      console.log(searchedExercises);

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Container>
      <SearchContainer>
        <SearchBar
          value={search}
          onChange={e => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <SearchButton onClick={handleSearch}>
          {" "}
          <Icon
            icon="material-symbols:search-rounded"
            width="36"
            height="36"
            title="Home"
            color="fcfbff"
          />
        </SearchButton>
      </SearchContainer>

      <HorizontalScroll
        data={bodyParts}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  background-color: #fcfbff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const SearchButton = styled.button`
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 0 5px 5px 0;
  background-color: #735cdd;
  box-shadow: 0 0 15px #c1bec7;
`;

const SearchBar = styled.input`
  height: 3rem;
  width: 16rem;
  border: none;
  border-radius: 5px 0 0 5px;
  background-color: #fcfbff;
  color: #211d29;
  text-align: center;
  box-shadow: 0 0 15px #c1bec7;
`;

export default ExploreContainer;

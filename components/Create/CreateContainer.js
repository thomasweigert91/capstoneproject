import {Icon} from "@iconify/react";
import {useState, useEffect} from "react";
import HorizontalScroll from "../Explore/HorizontalScroll";
import CreateExercisesContainer from "./CreateExerciseContainer";
import {Container} from "../../style/Create/createStyling";
import {SearchContainer} from "../../style/Create/createStyling";
import {SearchBar} from "../../style/Create/createStyling";
import {SearchButton} from "../../style/Create/createStyling";
import {exerciseOptions, fetchData} from "../Utils/fetchData";

const CreateContainer = ({selectedExercises, toggleExercise}) => {
  /*------------------------STATES----------------------------*/
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  /*------------------------FETCH BODYPART LIST-------------------------*/
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

  /*------------------------SEARCH FUNCTION-------------------------*/

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        exercise =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  /*----------------------------RENDER-------------------------------*/

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
      <CreateExercisesContainer
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
        selectedExercises={selectedExercises}
        toggleExercise={toggleExercise}
      />
    </Container>
  );
};

export default CreateContainer;

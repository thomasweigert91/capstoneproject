import styled from "styled-components";
import {useEffect} from "react";
import {exerciseOptions} from "../Utils/fetchData";
import {fetchData} from "../Utils/fetchData";
import ExerciseCard from "../Exercises/ExerciseCard";

const Exercises = ({exercises, setExercises, bodyPart}) => {
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `
                    https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);

  return (
    <ExercisesContainer>
      <ExercisesHeading>See results</ExercisesHeading>
      <ExercisesDiv>
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </ExercisesDiv>
    </ExercisesContainer>
  );
};

const ExercisesContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ExercisesDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ExercisesHeading = styled.p``;

export default Exercises;

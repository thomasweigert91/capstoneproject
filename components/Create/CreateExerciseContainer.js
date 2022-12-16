import styled from "styled-components";
import {useEffect} from "react";
import {exerciseOptions} from "../Utils/fetchData";
import {fetchData} from "../Utils/fetchData";
import CreateExerciseCard from "./CreateExerciseCard";

const CreateExercisesContainer = ({
  exercises,
  setExercises,
  bodyPart,
  toggleExercise,
}) => {
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
        {exercises.map(exercise => (
          <CreateExerciseCard
            key={exercise.id}
            exercise={exercise}
            onClick={() => toggleExercise(exercise)}
          />
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

const ExercisesHeading = styled.p`
  font-size: 1rem;
`;

export default CreateExercisesContainer;

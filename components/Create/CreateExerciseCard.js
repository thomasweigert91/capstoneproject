import styled from "styled-components";

const CreateExerciseCard = ({exercise, toggleExercise, selectedExercises}) => {
  return (
    <ExerciseCard
      onClick={() => toggleExercise(exercise)}
      style={{
        backgroundColor: selectedExercises.includes(exercise)
          ? "#C5BCF1"
          : "#FCFBFF",
      }}
    >
      <ExerciseImage
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
      ></ExerciseImage>
      <TagContainer>
        <Tag>{exercise.bodyPart}</Tag>
        <Tag>{exercise.target}</Tag>
      </TagContainer>
      <ExerciseName>{exercise.name}</ExerciseName>
    </ExerciseCard>
  );
};

const ExerciseImage = styled.img`
  width: 12rem;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const ExerciseName = styled.h3`
  margin-top: 1rem;
  padding: 0;
  color: #211d29;
  font-size: 1.5rem;
`;

const Tag = styled.div`
  background-color: #735cdd;
  color: #fcfbff;
  border-radius: 15px;
  border: 1px solid #8a878e;
  width: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
`;

const ExerciseCard = styled.div`
  text-decoration: none;
  color: #211d29;
  text-transform: capitalize;
  margin: 1rem auto;
  border: 1px solid #8a878e;
  border-radius: 5px;
  padding: 1rem;
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0.3px 1.5px 1.2px rgba(0, 0, 0, 0.01),
    0.8px 3.5px 2.9px rgba(0, 0, 0, 0.016),
    1.4px 6.3px 5.1px rgba(0, 0, 0, 0.022),
    2.2px 10.4px 8.5px rgba(0, 0, 0, 0.028),
    3.7px 17.2px 14px rgba(0, 0, 0, 0.034),
    6.5px 30.1px 24.5px rgba(0, 0, 0, 0.043), 14px 65px 53px rgba(0, 0, 0, 0.06);
`;

export default CreateExerciseCard;

import styled from "styled-components";

const CreateExerciseCard = ({exercise, onClick}) => {
  return (
    <ExerciseCard onClick={onClick}>
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

const ExerciseImage = styled.img``;

const TagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ExerciseName = styled.h3`
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
  margin: 2rem auto;
  border-top: 1px solid #8a878e;
  padding: 1rem;
`;

export default CreateExerciseCard;

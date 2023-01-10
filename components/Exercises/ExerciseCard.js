import styled from "styled-components";
import Link from "next/link";

const ExerciseCard = ({exercise}) => {
  return (
    <ExerciseLink href={`/exercise/${exercise.id}`}>
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
    </ExerciseLink>
  );
};

const ExerciseImage = styled.img`
  width: 13rem;
`;

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

const ExerciseLink = styled(Link)`
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
`;

export default ExerciseCard;

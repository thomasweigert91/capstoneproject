import styled from "styled-components";

const BodyPart = ({item, setBodyPart, bodyPart}) => {
  const isCurrentBodyPart = item === bodyPart;

  return (
    <BodyPartCard
      onClick={() => setBodyPart(item)}
      style={{color: isCurrentBodyPart ? "#735CDD" : "#211D29"}}
    >
      <BodyPartName>{item}</BodyPartName>
    </BodyPartCard>
  );
};

const BodyPartCard = styled.div`
  align-items: center;
  justify-content: center;
  width: 7rem;
  height: 7rem;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const BodyPartName = styled.p`
  text-transform: capitalize;
  font-size: 1rem;
`;

export default BodyPart;

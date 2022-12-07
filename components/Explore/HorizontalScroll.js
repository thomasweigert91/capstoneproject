import styled from "styled-components";
import BodyPart from "./BodyPart";

const HorizontalScroll = ({data, bodyPart, setBodyPart}) => {
  return (
    <HorizontalScrollContainer>
      {data.map(item => (
        <BodyPart
          key={item.id}
          item={item}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      ))}
    </HorizontalScrollContainer>
  );
};

const HorizontalScrollContainer = styled.div`
  width: 100vw;

  margin: 1rem auto;
  display: flex;
  padding: 1rem;
  align-items: center;
  overflow-y: hidden;
  margin-bottom: 3rem;
  height: 5rem;
`;

export default HorizontalScroll;

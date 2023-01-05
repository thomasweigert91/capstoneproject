import styled from "styled-components";
import {Icon} from "@iconify/react";
import Link from "next/link";
import Button from "./Button";

const NewRoutineButton = () => {
  return (
    <Button>
      <Icon
        icon="tabler:clipboard-list"
        width="36"
        height="36"
        title="Home"
        color="735CDD"
      />
      <Link href="/create" style={{textDecoration: "none"}}>
        <ButtonText>CREATE</ButtonText>
      </Link>
    </Button>
  );
};

const ButtonText = styled.p`
  padding-left: 0.8rem;
  font-size: 1.25rem;
  color: #211d29;
`;

export default NewRoutineButton;

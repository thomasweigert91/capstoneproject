import React from "react";
import styled from "styled-components";
import {Icon} from "@iconify/react";
import Link from "next/link";
import Button from "./Button";

const ExploreButton = () => {
  return (
    <Button>
      <Icon
        icon="material-symbols:search-rounded"
        width="36"
        height="36"
        title="Home"
        color="735CDD"
      />
      <Link href="/explore" style={{textDecoration: "none"}}>
        <ButtonText>EXPLORE</ButtonText>
      </Link>
    </Button>
  );
};

const ButtonText = styled.p`
  padding-left: 0.8rem;
  font-size: 1.25rem;
  color: #211d29;
`;

export default ExploreButton;

import React from "react";
import styled from "@emotion/styled";
import { Banner } from "./Banner";

export const ProductBanner: React.FC = () => {
  const items = [
    {
      __typename: "banner_1",
      imageUrl: "/assets/mock/list-products-banner-3.png",
    },
  ];

  return (
    <Container>
      {items.map((i, idx) => (
        <Banner key={idx} {...i} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  height: 323px;
  background-color: ${(props) => props.theme.palette.primary.main};
`;

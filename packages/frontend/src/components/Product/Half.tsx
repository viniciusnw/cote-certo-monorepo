import React from "react";
import styled from "@emotion/styled";
import { Paper, Typography, Button as MuiButton } from "@material-ui/core";

import { ProductProps } from "./";
import { formatCurrency } from "./../../utils";

export const Half: React.FC<ProductProps> = (props) => {
  return (
    <Container elevation={0}>
      <ImageContent>
        <Image src={props.imageUrl} />
      </ImageContent>

      <PriceContent>
        <Typography color="textPrimary" variant="caption">
          A partir de:
        </Typography>
        <br />
        <Typography color="textPrimary" variant="button">
          {formatCurrency(props.minPrice)}
        </Typography>
      </PriceContent>

      <TitleContent>
        <Typography color="primary" variant="caption">
          <b>{props.title}</b>
        </Typography>
      </TitleContent>

      <Button variant="contained" color="primary">
        <Typography variant="caption">
          <b>Ver preços</b>
        </Typography>
      </Button>
    </Container>
  );
};

const Container = styled(Paper)`
  display: grid;
  padding: 0.6rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.palette.grey[100]};
`;

const ImageContent = styled.div`
  position: relative;
  border-radius: 1rem;
`;

const TitleContent = styled.div`
  min-height: 60px;
  margin: 0rem 0 0.5rem 0;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const PriceContent = styled.div`
  margin: 0.4rem 0 0 0;
`;

const Button = styled(MuiButton)`
  border-radius: 1rem;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin: 0 -0.6rem -0.6rem -0.6rem;
`;

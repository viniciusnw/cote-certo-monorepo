import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {
  Paper,
  Typography,
  Box as MuiBox,
  Chip as MuiChip,
  Button as MuiButton,
  Divider as MuiDivider,
} from "@material-ui/core";
import { CreditCard as MuiCreditCardIcon } from "@material-ui/icons";

import { ProductProps } from "./";
import { formatCurrency } from "./../../utils";
import { Spaces } from "./../PageContainer";

export const Full: React.FC<ProductProps> = (props) => {
  return (
    <Container elevation={0}>
      <ImageContent>
        <Chip size="small" color="primary" label={props.category} />
        <Image src={props.imageUrl} />
      </ImageContent>

      <TitleContent>
        <Typography color="primary" variant="h6">
          {props.title}
        </Typography>
      </TitleContent>

      <PriceContent>
        <Typography color="textPrimary" variant="caption">
          A partir de:
        </Typography>
        <br />
        <Typography color="textPrimary" variant="button">
          {formatCurrency(props.minPrice)}
        </Typography>
        <Spaces size={4} />
        <Typography color="textPrimary" variant="caption">
          Em {props.stores} loja(s)
        </Typography>
      </PriceContent>

      <Divider light />

      <Box my={1}>
        <CreditCardIcon fontSize="small" />
        <Typography color="textPrimary" variant="caption">
          Ver parcelamento
        </Typography>
      </Box>

      <Button variant="contained" color="primary">
        <Typography variant="body2">
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
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
      }
      ${props.theme.breakpoints.down("xs")} {
      }
    `};
`;

const ImageContent = styled.div`
  position: relative;
  margin-bottom: 1.4rem;
  border-radius: 1rem;
`;

const TitleContent = styled.div`
  min-height: 50px;
`;

const Chip = styled(MuiChip)`
  margin: 0.6rem;
  position: absolute;
  .MuiChip-label {
    color: #fff;
    font-weight: ${(props) => props.theme.typography.h6.fontWeight};
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const CreditCardIcon = styled(MuiCreditCardIcon)`
  margin-right: 0.3rem;
  color: ${(props) => props.theme.palette.text.primary};
`;

const PriceContent = styled.div`
  margin: 0.2rem 0 0.5rem 0;
`;

const Divider = styled(MuiDivider)`
  margin: 0 -0.6rem;
`;

const Button = styled(MuiButton)`
  border-radius: 1rem;
  padding-top: 0.85rem;
  padding-bottom: 0.85rem;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin: 0 -0.6rem -0.6rem -0.6rem;
`;

const Box = styled(MuiBox)`
  display: flex;
  align-items: center;
`;

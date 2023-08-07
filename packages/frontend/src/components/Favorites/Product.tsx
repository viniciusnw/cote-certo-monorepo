import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { DeleteForever as DeleteForeverIcon } from "@material-ui/icons";
import {
  Typography,
  IconButton,
  Container as MuiContainer,
  Divider as MuiDivider,
} from "@material-ui/core";

import { Link } from "./../Link";
import { ProductProps } from "./../Product";
import { formatCurrency } from "./../../utils";

export const Product: React.FC<ProductProps> = (props) => {
  return (
    <Container maxWidth="sm">
      <ImageContainer src={props.imageUrl} />

      <TypographyContainer>
        <Typography variant="h6" color="textPrimary">
          {props.title}
        </Typography>

        <div>
          <Typography variant="h3" color="primary">
            <b>{formatCurrency(props.price)}</b>
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Em {props.installment?.installment}x de{" "}
            {formatCurrency(props.installment?.value)}{" "}
            {props.installment?.interestRate ? `sem juros` : `com juros`}
          </Typography>
        </div>
      </TypographyContainer>

      <DeleteContainer>
        <IconButton color="default" component="span">
          <DeleteForeverIcon />
        </IconButton>
      </DeleteContainer>

      <Divider />
    </Container>
  );
};

const Container = styled(MuiContainer)`
  gap: 1rem;
  display: grid;
  position: relative;
  padding: 1rem 1.6rem;
  grid-template-columns: min-content 1fr min-content;
  &:last-child {
    .MuiDivider-root {
      display: none;
    }
  }
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        padding: 1rem 0;
      }
    `}
`;

const Divider = styled(MuiDivider)`
  left: 50%;
  bottom: 0;
  width: 90%;
  position: absolute;
  transform: translateX(-50%);
  background-color: ${(props) => props.theme.palette.grey[300]};
`;

const ImageContainer = styled.div<any>`
  width: 136px;
  display: flex;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${(props) => props.src});
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        width: 80px;
      }
    `}
`;

const TypographyContainer = styled.div`
  gap: 1rem;
  display: flex;
  padding: 1rem 0;
  flex-direction: column;
  justify-content: space-between;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        gap: 0.5rem;
      }
    `}
`;

const DeleteContainer = styled.div``;

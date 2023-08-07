import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import {
  DeleteForever as DeleteForeverIcon,
  Close as CloseIcon,
  Check as CheckIcon,
} from "@material-ui/icons";

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
        <Typography variant="body1" color="textPrimary">
          {props.title}
        </Typography>

        <CompareContent>
          <Typography variant="subtitle2" color="primary" align="center">
            <b>{formatCurrency(props.price)}</b>
          </Typography>
          <Typography variant="subtitle2" color="textPrimary" align="center">
            <b>{formatCurrency(props.price)}</b>
          </Typography>
          <FreeShippingContent>
            {props.shipping?.value ? (
              <CloseIcon fontSize="small" color="error" />
            ) : (
              <CheckIcon fontSize="small" color="primary" />
            )}
          </FreeShippingContent>
        </CompareContent>
      </TypographyContainer>

      <DeleteContainer>
        <IconButton color="default" component="span">
          <DeleteForeverIcon fontSize="small" />
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
        gap: 0.5rem;
        padding: 1rem .1rem;
      }
    `}
`;

export const Divider = styled(MuiDivider)`
  left: 50%;
  bottom: 0;
  width: 90%;
  position: absolute;
  transform: translateX(-50%);
  background-color: ${(props) => props.theme.palette.grey[300]};
`;

const CompareContent = styled.div`
  gap: 1rem;
  display: grid;
  padding-top: 1rem;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        gap: 0.5rem;
      }
    `}
`;

const FreeShippingContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

const DeleteContainer = styled.div`
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        right: 0;
        position: absolute;
      }
    `}
`;

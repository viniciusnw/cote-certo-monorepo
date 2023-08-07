import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Typography, Button, Container } from "@material-ui/core";

import { Link } from "./../Link";

type BannerProps = {
  __typename: string;
  subtitle?: string;
  buttonText?: string;
  backgroundColor?: string;
  title?: string;
  imageUrl: string;
  urlRedirect: string;
};

export const Banner: React.FC<BannerProps> = (props) => {
  return (
    <>
      {props.__typename == "banner_1" && (
        <SlideContainer maxWidth="xl">
          <BannerTextContent>
            <Title variant="h4">{props.title}</Title>
            <SubTitle color="textPrimary" variant="h1">
              {props.subtitle}
            </SubTitle>

            <div>
              <BannerButton size="medium" variant="outlined">
                {props.buttonText}
              </BannerButton>
            </div>
          </BannerTextContent>

          <ImageContent size="contain" imageUrl={props.imageUrl} />
        </SlideContainer>
      )}

      {props.__typename == "banner_2" && (
        <SlideContainer2 maxWidth="xl">
          <LinkStyled href={props.urlRedirect}>
            <ImageContent size="cover" imageUrl={props.imageUrl} />
          </LinkStyled>
        </SlideContainer2>
      )}
    </>
  );
};

const SlideContainer = styled(Container)`
  padding: 0;
  padding: 0;
  height: 100%;
  display: grid;
  position: relative;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
      }
    `};
`;

const BannerTextContent = styled.div`
  z-index: 9;
  display: grid;
  text-align: right;
  position: relative;
  grid-template-rows: 1fr 1fr 1fr;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;
        position: absolute;
        background: rgba(0, 0, 0, 0.6);
      }
    `};
`;

const Title = styled(Typography)`
  align-self: end;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        font-size: 1.5rem;
      }
    `}
`;

const SubTitle = styled(Typography)`
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("md")} {
        font-size: 5rem;
      }
      ${props.theme.breakpoints.down("sm")} {
        font-size: 4rem;
      }
      ${props.theme.breakpoints.down("xs")} {
        font-size: 3rem;
        color: #fff;
      }
    `}
`;

const BannerButton = styled(Button)`
  border-radius: 40px;
  .MuiButton-label {
    font-weight: 600;
  }
`;

type ImageContentProps = {
  imageUrl: string;
  size: "cover" | "contain" | "initial";
};

const ImageContent = styled.div<ImageContentProps>`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: ${(props) => props.size};
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        background-size: cover;
      }
    `}
  background-image: url(${(props) => props.imageUrl});
`;

const SlideContainer2 = styled(Container)`
  padding: 0;
  height: 100%;
  display: grid;
  position: relative;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;
`;

const LinkStyled = styled(Link)`
  height: 100%;
  display: block;
`;

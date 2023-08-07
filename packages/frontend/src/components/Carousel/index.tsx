import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import SlickSlider, { Settings } from "react-slick";

import { Banner } from "./Banner";
import { Features } from "./Features";

export const Carousel: React.FC = () => {
  const settings: Settings = {
    dots: true,
    speed: 500,
    arrows: false,
    infinite: true,
    // autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
  };

  const items = [
    {
      __typename: "banner_1",
      subtitle: "Televisores",
      buttonText: "Ver produtos",
      backgroundColor: "#39D064",
      title: "Os melhores preços de",
      imageUrl: "/assets/mock/carousel/slider-1.png",
      urlRedirect: "/categoria?name=televisores",
    },
    {
      __typename: "banner_1",
      subtitle: "Televisores",
      buttonText: "Ver produtos",
      backgroundColor: "#5f9ea0",
      title: "Os melhores preços de",
      imageUrl: "/assets/mock/carousel/slider-1.png",
      urlRedirect: "/categoria?name=televisores",
    },
    {
      __typename: "banner_1",
      subtitle: "Televisores",
      buttonText: "Ver produtos",
      backgroundColor: "#39D064",
      title: "Os melhores preços de",
      imageUrl: "/assets/mock/carousel/slider-1.png",
      urlRedirect: "/categoria?name=televisores",
    },
    {
      __typename: "banner_2",
      imageUrl: "/assets/mock/carousel/banner-1.png",
      urlRedirect: "/categoria?name=televisores",
    },
  ];

  return (
    <>
      <Slider>
        <SlickSlider {...settings}>
          {items.map((i, idx) => (
            <Slide bgColor={i.backgroundColor} key={idx}>
              <Banner {...i} />
            </Slide>
          ))}
        </SlickSlider>
      </Slider>

      <Features />
    </>
  );
};

const Slider = styled.div`
  max-width: 100vw;
  position: relative;
  max-height: 470px;
  .slick-slide > div {
    max-height: 470px;
  }
  .slick-dots {
    bottom: 1rem;
    position: absolute;

    li {
      width: 0.8rem;
      height: 0.8rem;
      button {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background-color: #fff;
        &:before {
          content: none;
        }
      }
    }

    li.slick-active button {
      background-color: #777;
      &:before {
        content: none;
      }
    }
  }
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("md")} {
        .slick-slide > div {
          height: 300px;
        }
      }
      ${props.theme.breakpoints.down("sm")} {
        .slick-slide > div {
          height: 240px;
        }
      }
      ${props.theme.breakpoints.down("xs")} {
        .slick-slide > div {
          height: 300px;
        }
      }
    `};
`;

const Slide = styled.div<{ bgColor?: string }>`
  height: 486px;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("md")} {
        height: 300px;
      }
      ${props.theme.breakpoints.down("sm")} {
        height: 240px;
      }
      ${props.theme.breakpoints.down("xs")} {
        height: 300px;
      }
    `};
  background-color: ${(props) =>
    props.bgColor || props.theme.palette.primary.main};
`;

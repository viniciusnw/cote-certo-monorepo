import React from "react";
import styled from "@emotion/styled";

type BannerProps = {
  __typename: string;
  imageUrl: string;
};

export const Banner: React.FC<BannerProps> = (props) => {
  return (
    <>
      {props.__typename == "banner_1" && (
        <ImageContent imageUrl={props.imageUrl} />
      )}
    </>
  );
};

const ImageContent = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 100%;
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${(props) => props.imageUrl});
`;

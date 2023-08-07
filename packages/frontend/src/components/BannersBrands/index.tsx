import React from 'react';
import styled from '@emotion/styled';
import { Grid as MuiGrid, Container } from '@material-ui/core';
import { css } from '@emotion/react';

export const BannersBrands: React.FC = () => {
  return (
    <Container maxWidth='lg'>
      <MuiGrid container spacing={3}>
        <MuiGrid xs={12} md={9} item>
          <CustomGrid container spacing={3}>
            <MuiGrid item xs={8}>
              <ImageContenTv />
            </MuiGrid>
            <MuiGrid item xs={4}>
              <ImageContentSony />
            </MuiGrid>
            <MuiGrid item xs={4}>
              <ImageContentOex />
            </MuiGrid>
            <MuiGrid item xs={8}>
              <ImageContentXiaomi />
            </MuiGrid>
          </CustomGrid>
        </MuiGrid>

        <MuiGrid xs={12} md={3} item>
          <MuiGrid container>
            <MuiGrid item xs={12}>
              <ImageContentIphone />
            </MuiGrid>
          </MuiGrid>
        </MuiGrid>
      </MuiGrid>
    </Container>
  );
};

const CustomGrid = styled(MuiGrid)`
  ${(props) =>
    css`
      ${props.theme.breakpoints.down('xs')} {
        text-align: center;
        justify-content: center;
        grid-template-columns: repeat(1, 1fr);
        gap: 1rem;
        padding: 0px;
        .MuiGrid-grid-xs-4 {
          flex-grow: 0;
          max-width: 66%;
          flex-basis: 66.333333%;
        }
      }
    `};
`;

const ImageContentIphone = styled.div`
  width: 100%;
  height: 521px;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 10px;
  background-image: url(${() => '/assets/mock/bannersMarcas/iphone.png'});
`;

const ImageContentXiaomi = styled.div`
  height: 245px;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 10px;
  background-image: url(${() => '/assets/mock/bannersMarcas/xiaomi.png'});
  ${(props) =>
    css`
      ${props.theme.breakpoints.down('xs')} {
        background-size: contain;
      }
    `};
`;

const ImageContentSony = styled.div`
  height: 245px;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 10px;
  background-image: url(${() => '/assets/mock/bannersMarcas/sony.png'});
`;

const ImageContentOex = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  height: 245px;
  border-radius: 10px;
  background-image: url(${() => '/assets/mock/bannersMarcas/oex.png'});
`;

const ImageContenTv = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  height: 245px;
  border-radius: 10px;
  background-image: url(${() => '/assets/mock/bannersMarcas/tv.png'});
  ${(props) =>
    css`
      ${props.theme.breakpoints.down('xs')} {
        background-size: contain;
      }
    `};
`;

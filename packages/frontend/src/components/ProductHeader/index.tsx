import React from "react";
import styled from "@emotion/styled";
import { Line } from "react-chartjs-2";
import { Rating } from "@material-ui/lab";
import ImageGallery from "react-image-gallery";
import { useTheme, css } from "@emotion/react";
import {
  Typography,
  Container as MuiContainer,
  Box,
  Button,
} from "@material-ui/core";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import {
  NotificationsActiveOutlined as NotificationsIcon,
  FavoriteBorderOutlined as FavoriteBorderIcon,
  InsertChartOutlinedRounded as ChartIcon,
} from "@material-ui/icons";
import { Link } from "../Link";
import { Spaces } from "../PageContainer";
import { width, formatCurrency, calculoDias } from "../../utils";

export const ProductHeader: React.FC = () => {
  const [imageGalleryPosition, setImageGalleryPosition] = React.useState<
    "bottom" | "top" | "right" | "left" | undefined
  >("bottom");

  const theme = useTheme();

  const ProductHeader = {
    title: "Sony PlayStation 5 825GB Standard cor branco e preto",
    rating: 4.5,
    price: 6749.1,
    stores: 2,
    chartData: {
      weekly: {
        labels: [
          "Segunda",
          "Terça",
          "Quarta",
          "Quinta",
          "Sexta",
          "Sabado",
          "Quinta",
        ],
        values: [10, 25, 10, 5, 20, 15, 45, 50],
      },
      monthly: {
        labels: [
          "Janeiro",
          "Fevereiro",
          "Março",
          "Abril",
          "Maio",
          "Junho",
          "Julho",
          "Agosto",
        ],
        values: [10, 25, 10, 5, 20, 15, 45, 50],
      },
    },
    gallery: [
      {
        original: "/assets/mock/product/image.png",
        thumbnail: "/assets/mock/product/image-thumb.png",
      },
      {
        original: "/assets/mock/product/image.png",
        thumbnail: "/assets/mock/product/image-thumb.png",
      },
      {
        original: "/assets/mock/product/image.png",
        thumbnail: "/assets/mock/product/image-thumb.png",
      },
    ],
    priceRange: {
      lowestPrice: {
        date: new Date(2021, 6, 1),
        value: 5479.1,
      },
      biggestPrice: {
        date: new Date(),
        value: 6749.1,
      },
    },
  };

  const ChartData = {
    labels: ProductHeader.chartData.monthly.labels,
    datasets: [
      {
        fill: false,
        data: ProductHeader.chartData.monthly.values,
        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.main,
      },
    ],
  };

  const ChartOptions = {
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: false,
    },
  };

  React.useEffect(() => {
    setImageGalleryPosition(
      width() < theme.breakpoints.values.md ? "left" : "bottom"
    );
  });
  return (
    <BoxStyled>
      <Container maxWidth="lg">
        <GalleryContainer>
          <ImageGallery
            showNav={false}
            showPlayButton={false}
            showFullscreenButton={false}
            items={ProductHeader.gallery}
            thumbnailPosition={imageGalleryPosition}
          />
        </GalleryContainer>

        <InfosContainer>
          <Typography variant="h3" color="textPrimary">
            {ProductHeader.title}
          </Typography>

          <RatingContainer my={2}>
            <Rating
              value={4.5}
              size="small"
              onChange={(event, newValue) => console.log(newValue)}
            />
            <Spaces size={2} />
            <Typography color="textPrimary" variant="caption">
              <b>{ProductHeader.rating}</b>
            </Typography>
          </RatingContainer>

          <Box my={2}>
            <Typography color="textPrimary" variant="caption">
              a partir de:
            </Typography>

            <PriceContainer>
              <Typography color="primary" variant="h4">
                <b>{formatCurrency(ProductHeader.price)}</b>
              </Typography>
              <Spaces size={2} />
              <Typography color="textPrimary" variant="caption">
                Em{" "}
                <Typography color="primary" variant="inherit">
                  <b style={{ fontWeight: 500 }}>
                    {ProductHeader.stores} lojas
                  </b>
                </Typography>
              </Typography>
            </PriceContainer>
          </Box>

          <ActionsContainer my={2}>
            <Button
              size="large"
              color="primary"
              variant="contained"
              startIcon={<NotificationsIconStyled />}
            >
              <Typography variant="body2">
                <b style={{ whiteSpace: "nowrap" }}>Criar alerta de preço</b>
              </Typography>
            </Button>

            <SocialShareContainer>
              <WhatsappShareButton url={"/"}>
                <WhatsappIcon size={28} round={true} />
              </WhatsappShareButton>
              <FacebookShareButton url={"/"}>
                <FacebookIcon size={28} round={true} />
              </FacebookShareButton>
              <TwitterShareButton url={"/"}>
                <TwitterIcon size={28} round={true} />
              </TwitterShareButton>
            </SocialShareContainer>
          </ActionsContainer>

          <Box my={1}>
            <Button
              size="large"
              color="primary"
              startIcon={<FavoriteBorderIcon color="primary" />}
            >
              Salvar produto
            </Button>

            <Button
              size="large"
              color="primary"
              startIcon={<ChartIcon color="primary" />}
            >
              Comparar
            </Button>
          </Box>
        </InfosContainer>

        <GraphContainer>
          <GraphContent>
            <Line data={ChartData} options={ChartOptions} />
          </GraphContent>

          <GraphInfosContent>
            <GraphInfosGrid>
              <Typography color="textPrimary" variant="caption">
                Menor preço
              </Typography>
              <Typography color="textPrimary" variant="caption">
                {calculoDias(ProductHeader.priceRange.lowestPrice.date)}
              </Typography>
              <Typography color="textPrimary" variant="body2">
                <b>
                  {formatCurrency(ProductHeader.priceRange.lowestPrice.value)}
                </b>
              </Typography>
            </GraphInfosGrid>

            <GraphInfosGrid>
              <Typography color="textPrimary" variant="caption">
                Maior preço
              </Typography>
              <Typography color="textPrimary" variant="caption">
                {calculoDias(ProductHeader.priceRange.biggestPrice.date)}
              </Typography>
              <Typography color="textPrimary" variant="body2">
                <b>
                  {formatCurrency(ProductHeader.priceRange.biggestPrice.value)}
                </b>
              </Typography>
            </GraphInfosGrid>
          </GraphInfosContent>
        </GraphContainer>
      </Container>
    </BoxStyled>
  );
};

const BoxStyled = styled(Box)`
  padding: 2rem 0;
`;

const Container = styled(MuiContainer)`
  gap: 3rem;
  display: grid;
  grid-template-columns: 1fr 1.3fr auto;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
      }
    `}
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        gap: 1.5rem;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
      }
    `}
`;

const GalleryContainer = styled.div`
  .image-gallery-thumbnails {
    .image-gallery-thumbnails-container {
      gap: 0.4rem;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      ${(props) =>
        css`
          ${props.theme.breakpoints.down("sm")} {
            flex-direction: column;
          }
        `}
    }

    .image-gallery-thumbnail {
      padding: 0;
      width: 70px;
      height: 70px;
      border: none;
      border-width: 1px;
      border-style: solid;
      border-radius: 0.3rem;
      border-color: ${(props) => props.theme.palette.grey[500]};
      &.active,
      &:hover {
        border-width: 1px;
        border-style: solid;
        border-color: ${(props) => props.theme.palette.primary.main};
      }
    }
  }
  .image-gallery-swipe {
    ${(props) =>
      css`
        ${props.theme.breakpoints.down("sm")} {
          margin: 0 16%;
        }
      `}
    ${(props) =>
      css`
        ${props.theme.breakpoints.down("xs")} {
          margin: 0;
        }
      `}
  }
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        grid-column: span 2;
      }
    `}
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        grid-column: span 1;
      }
    `}
`;

const InfosContainer = styled.div``;

const PriceContainer = styled.div`
  display: grid;
  align-items: end;
  grid-template-columns: min-content min-content auto;
`;

const RatingContainer = styled(Box)`
  display: grid;
  align-items: center;
  grid-template-columns: min-content min-content min-content;
`;

const ActionsContainer = styled(Box)`
  gap: 2rem;
  display: grid;
  grid-template-columns: min-content min-content;
`;

const SocialShareContainer = styled.div`
  gap: 0.3rem;
  display: grid;
  grid-template-columns: repeat(3, min-content);
`;

const GraphContainer = styled.div`
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        padding: 0 8%;
      }
    `}
`;

const GraphContent = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.palette.grey[100]};
`;

const GraphInfosContent = styled.div`
  gap: 1rem;
  display: grid;
  margin-top: 1rem;
  position: relative;
  grid-template-columns: repeat(2, 1fr);
`;

const GraphInfosGrid = styled.div`
  gap: 0.1rem;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
`;

const NotificationsIconStyled = styled(NotificationsIcon)`
  color: ${(props) => props.theme.palette.common.white};
`;

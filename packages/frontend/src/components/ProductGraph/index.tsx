import React from "react";
import styled from "@emotion/styled";
import { Line } from "react-chartjs-2";
import { useTheme, css } from "@emotion/react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  ButtonGroup,
  TextField,
  InputAdornment,
  Container as MuiContainer,
} from "@material-ui/core";

import {
  Add as AddIcon,
  Remove as RemoveIcon,
  NotificationsActiveOutlined as NotificationsIcon,
} from "@material-ui/icons";

import { Link } from "../Link";

export const ProductGraph: React.FC = () => {
  const [graphType, setGraphType] = React.useState<"weekly" | "monthly">(
    "monthly"
  );

  const theme = useTheme();

  const ProductGraph = {
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
        values: [10, 25, 10, 5, 20, 15, 45],
      },
      monthly: {
        labels: [
          "Fevereiro",
          "Março",
          "Abril",
          "Maio",
          "Junho",
          "Julho",
          "Agosto",
        ],
        values: [25, 10, 5, 20, 15, 45, 50],
      },
    },
  };

  const ChartData = {
    labels: ProductGraph.chartData[graphType].labels,
    datasets: [
      {
        fill: false,
        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.main,
        data: ProductGraph.chartData[graphType].values,
      },
    ],
  };

  const ChartOptions = {
    plugins: {
      legend: false,
    },
  };

  return (
    <Box mt={8}>
      <Container maxWidth="lg">
        <GraphHeader>
          <GraphHeaderContent>
            <Typography variant="h6" color="textPrimary">
              Historico de preços
            </Typography>

            <ButtonGroup variant="contained">
              <Button
                size="small"
                onClick={() => setGraphType("monthly")}
                color={`${graphType == "monthly" ? "primary" : "default"}`}
              >
                últimos 6 meses
              </Button>
              <Button
                size="small"
                onClick={() => setGraphType("weekly")}
                color={`${graphType == "weekly" ? "primary" : "default"}`}
              >
                última semana
              </Button>
            </ButtonGroup>
          </GraphHeaderContent>
        </GraphHeader>

        <GraphContainer>
          <Graph>
            <Line data={ChartData} options={ChartOptions} />
          </Graph>
          <GraphAlertContainer>
            <GraphAlert>
              <Typography variant="h6" color="textPrimary" align="center">
                Quanto você gostaria de pagar?
              </Typography>

              <Typography variant="body2" color="textPrimary" align="center">
                Indique quanto você gostaria de pagar, que a gente te avisa
                quando chegar no valor.
              </Typography>

              <GraphAlertInputContainer>
                <IconButton color="primary" component="span">
                  <RemoveIcon color="primary" />
                </IconButton>
                <TextField
                  value={45000}
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">R$</InputAdornment>
                    ),
                  }}
                />
                <IconButton color="primary" component="span">
                  <AddIcon color="primary" />
                </IconButton>
              </GraphAlertInputContainer>

              <Typography variant="caption" color="textPrimary" align="center">
                Menor preço hoje: <b>R$ 5.849,00</b>
              </Typography>

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
            </GraphAlert>
          </GraphAlertContainer>
        </GraphContainer>
      </Container>
    </Box>
  );
};

const Container = styled(MuiContainer)`
  gap: 2rem;
  display: grid;
  align-items: center;
  grid-template-rows: auto 1fr;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        grid-template-rows: 1fr;
      }
    `}
`;

const GraphHeader = styled(Box)`
  gap: 4.5rem;
  display: grid;
  grid-template-columns: 3fr 1fr;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        gap: 0;
        grid-template-columns: 1fr;
      }
    `}
`;

const GraphHeaderContent = styled(Box)`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
`;

const GraphContainer = styled.div`
  gap: 3rem;
  display: grid;
  align-items: center;
  grid-template-columns: 3fr 1fr;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("sm")} {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
      }
    `}
`;

const Graph = styled.div``;

const GraphAlertContainer = styled.div`
  height: 100%;
  padding-top: 0.5rem;
  padding-bottom: 2rem;
`;

const GraphAlert = styled.div`
  height: 100%;
  display: grid;
  gap: 1rem;
  padding: 2rem 1rem;
  border-radius: 15px;
  grid-template-rows: min-content auto min-content auto min-content;
  border: 2px solid ${(props) => props.theme.palette.primary.main};
`;

const GraphAlertInputContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: min-content 1fr min-content;
`;

const NotificationsIconStyled = styled(NotificationsIcon)`
  color: ${(props) => props.theme.palette.common.white};
`;

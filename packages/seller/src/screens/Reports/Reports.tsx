import React from "react";
import { useTheme, css } from "@emotion/react";
import styled from "@emotion/styled";
import { Bar, Line } from "react-chartjs-2";
import { Container, Grid, Typography, Box } from "@material-ui/core";

import { MenuLinksIcons } from "./../../components/MenuLinksIcons";
import { Main } from "./../../components/PageContainer";
import { Header } from "./../../components/Header";
import { Footer } from "./../../components/Footer";
import { breakpoints } from "./../../utils";

const Reports = () => {
  const theme = useTheme();

  const LineChartData = {
    labels: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
    ],
    datasets: [
      {
        fill: false,
        label: '',
        borderColor: theme.palette.secondary.main,
        backgroundColor: theme.palette.primary.main,
        data: [25, 10, 5, 20, 15, 45, 50],
      },
    ],
  };

  const LineChartOptions = {
    responsive: true,
    indexAxis: breakpoints() == 'xs' ? 'y' : 'x',
    plugins: {
      legend: false,
    },
  };

  const BarChartData = {
    labels: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho"
    ],
    datasets: [{
      label: 'Playstation 5',
      data: [10, 25, 50, 80, 35, 70, 100],
      backgroundColor: '#00C192',
      stack: 'Stack 0',
    },
    {
      label: 'Nintendo 3DS',
      data: [20, 30, 50, 35, 55, 50, 40],
      backgroundColor: '#001011',
      stack: 'Stack 1',
    },
    {
      label: 'Xbox One',
      data: [30, 45, 55, 22, 30, 89, 70],
      backgroundColor: '#093A3E',
      stack: 'Stack 2',
    }]
  };

  const BarChartOptions = {
    plugins: {
      title: {
        display: true,
        text: ''
      },
    },
    responsive: true,
    indexAxis: breakpoints() == 'xs' ? 'y' : 'x',
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
  }

  return (
    <>
      <Header />

      <Main>
        <Container maxWidth="lg">
          <Grid container>
            <Grid sm={3} xs={12} item>
              <MenuLinksIcons />
            </Grid>

            <GridContent sm={9} xs={12} item>
              <Grid sm={12} item>
                <Typography variant="h3" color="textPrimary">
                  Relatórios
                </Typography>
              </Grid>

              <Grid sm={12} item>
                <Box my={4}>
                  <Typography variant="body1" color="textPrimary">
                    <b>Visitas ao perfil da loja</b>
                  </Typography>
                  <br />
                  <br />
                  <div>
                    {
                      breakpoints() == 'xs'
                        ? <Line height={800} data={LineChartData} options={LineChartOptions} />
                        : <Line data={LineChartData} options={LineChartOptions} />
                    }
                  </div>
                </Box>

                <Box my={8}>
                  <Typography variant="body1" color="textPrimary">
                    <b>Produtos mais acessados</b>
                  </Typography>
                  <div>
                    {
                      breakpoints() == 'xs'
                        ? <Bar height={900} data={BarChartData} options={BarChartOptions} />
                        : <Bar data={BarChartData} options={BarChartOptions} />
                    }
                  </div>
                </Box>
              </Grid>
            </GridContent>
          </Grid>
        </Container>
      </Main>

      <Footer />
    </>
  );
};

const GridContent = styled(Grid)`
  padding-left: 3rem;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        padding-left: 0rem;
      }
    `}
`;

export default Reports;

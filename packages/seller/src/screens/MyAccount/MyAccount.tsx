import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Grid, AppBar, Tabs, Tab, Box, Typography } from "@material-ui/core";

import { MenuLinksIcons } from "./../../components/MenuLinksIcons";
import { Main } from "./../../components/PageContainer";
import { Header } from "./../../components/Header";
import { Footer } from "./../../components/Footer";
import { Stores } from "../../components/Stores";

const MyAccount = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, value: any) => {
    setTabValue(value);
  };
  return (
    <>
      <Header />

      <Main>
        <Container maxWidth="lg">
          <Grid container>
            <Grid sm={3} xs={12} item>
              <MenuLinksIcons />
            </Grid>

            <GridContent sm={9} item>
              <AppBar position="static" color="default">
                <Tabs
                  value={tabValue}
                  textColor="primary"
                  variant="scrollable"
                  scrollButtons="auto"
                  indicatorColor="primary"
                  onChange={handleTabChange}
                >
                  <Tab label="Configurações de loja" />
                  <Tab label="Metodos de pagamento" />
                  <Tab label="Redes sociais" />
                  <Tab label="Meus dados" />
                </Tabs>
              </AppBar>

              <TabPanel value={tabValue} index={0}>
                <Stores />
              </TabPanel>
              <TabPanel value={tabValue} index={1}>
                <Typography color='textPrimary'>
                  Metodos de pagamento
                </Typography>
              </TabPanel>
              <TabPanel value={tabValue} index={2}>
                <Typography color='textPrimary'>
                  Redes sociais
                </Typography>
              </TabPanel>
              <TabPanel value={tabValue} index={3}>
                <Typography color='textPrimary'>
                  Meus dados
                </Typography>
              </TabPanel>
            </GridContent>
          </Grid>
        </Container>
      </Main>

      <Footer />
    </>
  );
};

const TabPanel: React.FC<{ value: number, index: number }> = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <TabPanelCntainer>
          {children}
        </TabPanelCntainer>
      )}
    </div>
  );
}

const TabPanelCntainer = styled.div`
  margin-top: 2rem;
`

const GridContent = styled(Grid)`
  padding-left: 3rem;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        padding-left: 0rem;
      }
    `}
`;

export default MyAccount;

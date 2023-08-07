import React from "react";
import styled from "@emotion/styled";
import { Grid as MuiGrid, Typography } from "@material-ui/core";

const productOne = [
  {
    CPU: "AMD (customizado)",
    GPU: "AMD (customizado)",
    Memoria: "SSD 512GB",
    RAM: "16GB(compartilhado)",
    Wireless: "Wi-if ac",
    Bluetooth: "5.1",
  },
];

const productTwo = [
  {
    CPU: "AMD (customizado)",
    GPU: "AMD (customizado)",
    Memoria: "SSD 512GB",
    RAM: "16GB(compartilhado)",
    Wireless: "Wi-if ac",
    Bluetooth: "5.1",
  },
];

const Productdescription = `O PlayStation 5 será o console mais poderoso quando for anunciado, o
    que está previsto para 2020. Além da configuração atualizada, trazendo
    um chip customizado da AMD, virá com SSD embarcado e controle Wifi.`;

export const ProductDetailsList: React.FC = () => {
  return (
    <MuiGrid container spacing={3}>
      <MuiGrid item xs={12}>
        <Typography variant="h5" color="textPrimary">
          Detalhes do produto e ficha técnica:
        </Typography>
      </MuiGrid>
      <MuiGrid item xs={12}>
        <Typography variant="body2" color="textPrimary">
          {Productdescription}
        </Typography>
      </MuiGrid>
      <CustomGrid container>
        {productOne.map((i, index) => (
          <MuiGrid item xs={6} md={6}>
            <li key={index}>
              {Object.entries(i).map((item) => (
                <ul>
                  <Typography variant="body2" color="textPrimary">
                    {
                      <>
                        <b>{`${item[0]}: `} </b>
                        {item[1]}
                      </>
                    }
                  </Typography>
                </ul>
              ))}
            </li>
          </MuiGrid>
        ))}
        {productTwo.map((i, index) => (
          <MuiGrid item xs={6} md={6}>
            <li key={index}>
              {Object.entries(i).map((item) => (
                <ul>
                  <Typography variant="body2" color="textPrimary">
                    {
                      <>
                        <b>{`${item[0]}: `} </b>
                        {item[1]}
                      </>
                    }
                  </Typography>
                </ul>
              ))}
            </li>
          </MuiGrid>
        ))}
      </CustomGrid>
    </MuiGrid>
  );
};

const CustomGrid = styled(MuiGrid)`
  ul {
    padding-left: 1rem;
    margin: 0px;
  }
`;

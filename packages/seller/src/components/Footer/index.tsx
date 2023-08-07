import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Typography, Container as MuiContainer } from "@material-ui/core";


export const Footer: React.FC = () => {
  return (
    <FooterSection>
      <MuiContainer maxWidth="lg">
        <BottomSection>
          <Typography variant="body2" align="center" color="textPrimary">
            Copyright {new Date().getFullYear()} - CoteCerto. Todos os Direitos
            Reservados.
          </Typography>
        </BottomSection>
      </MuiContainer>
    </FooterSection>
  );
};

const FooterSection = styled.div`
  margin-top: 2.5rem;
  padding: 0.5rem 0;
  background-color: ${(props) => props.theme.palette.grey[100]};
`;

const BottomSection = styled.div`
  padding: 1rem;
`;

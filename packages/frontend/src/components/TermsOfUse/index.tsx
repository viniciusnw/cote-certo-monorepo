import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { MenuLinks } from "../MenuLinks";

import { Grid, Container, Box as MuiBox, Typography } from "@material-ui/core";

const terms = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Pellentesque pharetra gravida sapien, sed malesuada lacus
  commodo et. Vestibulum ultrices, turpis sed mollis luctus,
  turpis leo consectetur magna, at sollicitudin nisl enim id nibh.
  Aliquam ut congue metus. Nulla posuere viverra turpis ac tempus.
  Proin tempus in libero vel hendrerit. Suspendisse sit amet dolor
  posuere, congue velit a, rhoncus eros. Aliquam molestie dui non
  mauris rhoncus, eu rhoncus eros iaculis. Phasellus massa nunc,
  tincidunt at pretium nec, dignissim vitae felis. Vivamus vel
  sagittis urna, vitae posuere nibh. Etiam ac lobortis turpis,
  pellentesque auctor turpis. Phasellus vehicula lobortis
  pellentesque. Donec et congue odio. Pellentesque iaculis sapien
  nisi, ac dapibus enim vulputate vel. Etiam in placerat orci. Sed
  a pretium nunc, eget porttitor est. Etiam vel lectus tempus,
  blandit mauris id, hendrerit arcu. Donec sed commodo neque, ut
  ornare purus. Nullam faucibus elementum diam, id vulputate
  mauris rutrum ut. Nam placerat, purus a fringilla sodales, diam
  nisi varius metus, sed ornare mi neque sit amet neque. Praesent
  eget felis dignissim nisi dictum varius in sit amet erat. Nulla
  auctor sit amet risus sed venenatis. Sed accumsan in enim non
  laoreet. Morbi ipsum sapien, tincidunt a viverra quis, dapibus
  quis eros. Sed ornare nisi malesuada tortor feugiat suscipit.
  Praesent faucibus justo eget lectus pharetra, vitae dictum sem
  vulputate. In facilisis bibendum urna id dictum. Praesent
  consectetur purus in massa tempor fringilla. Nulla bibendum eros
  et faucibus porta. Pellentesque aliquam feugiat ipsum eu
  iaculis. Praesent tincidunt nisl non nulla blandit lobortis eu
  et purus. Nullam at felis ut arcu aliquet porttitor. Maecenas
  dictum libero ac libero tincidunt, sit amet sagittis massa
  eleifend. Aenean venenatis justo quis velit sollicitudin
  interdum. Etiam scelerisque, orci vitae gravida bibendum, augue
  elit pellentesque leo, ut venenatis ex leo vitae tortor.`,
  ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Pellentesque pharetra gravida sapien, sed malesuada lacus
  commodo et. Vestibulum ultrices, turpis sed mollis luctus,
  turpis leo consectetur magna, at sollicitudin nisl enim id nibh.
  Aliquam ut congue metus. Nulla posuere viverra turpis ac tempus.
  Proin tempus in libero vel hendrerit. Suspendisse sit amet dolor
  posuere, congue velit a, rhoncus eros. Aliquam molestie dui non
  mauris rhoncus, eu rhoncus eros iaculis. Phasellus massa nunc,
  tincidunt at pretium nec, dignissim vitae felis. Vivamus vel
  sagittis urna, vitae posuere nibh. Etiam ac lobortis turpis,
  pellentesque auctor turpis. Phasellus vehicula lobortis
  pellentesque. Donec et congue odio. Pellentesque iaculis sapien
  nisi, ac dapibus enim vulputate vel. Etiam in placerat orci. Sed
  a pretium nunc, eget porttitor est. Etiam vel lectus tempus,
  blandit mauris id, hendrerit arcu. Donec sed commodo neque, ut
  ornare purus. Nullam faucibus elementum diam, id vulputate
  mauris rutrum ut. Nam placerat, purus a fringilla sodales, diam`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Pellentesque pharetra gravida sapien, sed malesuada lacus
  commodo et. Vestibulum ultrices, turpis sed mollis luctus,
  turpis leo consectetur magna, at sollicitudin nisl enim id nibh.
  Aliquam ut congue metus. Nulla posuere viverra turpis ac tempus.
  Proin tempus in libero vel hendrerit. Suspendisse sit amet dolor
  posuere, congue velit a, rhoncus eros. Aliquam molestie dui non
  mauris rhoncus, eu rhoncus eros iaculis. Phasellus massa nunc,
  tincidunt at pretium nec, dignissim vitae felis. Vivamus vel
  sagittis urna, vitae posuere nibh. Etiam ac lobortis turpis,`,
];

export const TermsOfUse: React.FC = () => {
  return (
    <BoxStyled>
      <Container maxWidth="lg">
        <GridContent sm={12} container>
          <GridLinks sm={3} xs={12} item>
            <MenuLinks />
          </GridLinks>
          <GridTerms sm={9} container item spacing={2}>
            <Grid sm={12} item>
              <Typography variant="h3" color="textPrimary">
                Termos de uso
              </Typography>
            </Grid>
            {terms.map((i, index) => (
              <Grid sm={12} item>
                <Typography key={index} variant="inherit" color="textPrimary">
                  {i}
                </Typography>
              </Grid>
            ))}
          </GridTerms>
        </GridContent>
      </Container>
    </BoxStyled>
  );
};

const BoxStyled = styled(MuiBox)`
  background-color: ${(props) => props.theme.palette.grey[200]};
  padding-top: 1rem;
  margin-bottom: -20px;
`;

const GridLinks = styled(Grid)`
  background-color: ${(props) => props.theme.palette.common.white};
  border-radius: 6px;
  text-align: left;
  height: 255px;
  ol {
    margin-top: 1rem;
  }
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("md")} {
        height: 290px;
      }
      ${props.theme.breakpoints.down("xs")} {
        margin-bottom: 2rem;
        height: auto;
      }
    `}
`;

const GridTerms = styled(Grid)`
  padding-left: 3rem;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        padding-left: 0;
      }
    `}
`;

const GridContent = styled(Grid)`
  padding: 2rem 0 2rem 0;
`;

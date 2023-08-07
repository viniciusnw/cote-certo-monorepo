import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Typography, Grid, Divider, Box } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

import { breakpoints } from "./../../utils";

type ReviewProps = {
  date: string
  text: string
  name: string
  rating: number
}

export const Review: React.FC<ReviewProps> = (props) => {

  return (
    <React.Fragment>
      <GridInformation container>
        <Grid xs={6} item>
          <Grid container>
            <Grid md={6} xs={12} item>
              <Typography variant="body1" color="textPrimary">
                {props.date}
              </Typography>
            </Grid>
            <Grid md={6} xs={12} item>
              <Typography variant="body1" color="textPrimary">
                por, {props.name}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <GridRating xs={6} item>
          <Rating
            readOnly
            value={props.rating}
            size={breakpoints() == 'xs' ? 'small' : 'medium'}
            onChange={(event, newValue) => console.log(newValue)}
          />
        </GridRating>
        <GridDivider xs={12} item>
          <Box my={1}>
            <Divider light />
          </Box>
        </GridDivider>
        <Grid sm={12} item>
          <Typography variant="subtitle2" color="textPrimary">
            {props.text}
          </Typography>
        </Grid>
      </GridInformation>
    </React.Fragment>
  );
};

const GridDivider = styled(Grid)`
  padding: 0 0 1rem 0;
`;

const GridRating = styled(Grid)`
  text-align: right;
`;

const GridInformation = styled(Grid)`
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;
  background-color: ${(props) => props.theme.palette.common.white};
`;

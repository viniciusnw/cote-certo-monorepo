import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";

export const Accordeon: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const itens = [
    {
      title: "Comprar no CoteCerto é seguro?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra gravida sapien, sed malesuada lacus commodo et. Vestibulum ultrices, turpis sed mollis luctus, turpis leo consectetur magna, at sollicitudin nisl enim id nibh. Aliquam ut congue metus.",
    },
    {
      title: "Como funciona o alerta de preço?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra gravida sapien, sed malesuada lacus commodo et. Vestibulum ultrices, turpis sed mollis luctus, turpis leo consectetur magna, at sollicitudin nisl enim id nibh. Aliquam ut congue metus.",
    },
    {
      title: "Precisa de cartão de crédito para comprar?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra gravida sapien, sed malesuada lacus commodo et. Vestibulum ultrices, turpis sed mollis luctus, turpis leo consectetur magna, at sollicitudin nisl enim id nibh. Aliquam ut congue metus.",
    },
    {
      title: "Como funciona o alerta de preço?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra gravida sapien, sed malesuada lacus commodo et. Vestibulum ultrices, turpis sed mollis luctus, turpis leo consectetur magna, at sollicitudin nisl enim id nibh. Aliquam ut congue metus.",
    },
    {
      title: "Precisa de cartão de crédito para comprar?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra gravida sapien, sed malesuada lacus commodo et. Vestibulum ultrices, turpis sed mollis luctus, turpis leo consectetur magna, at sollicitudin nisl enim id nibh. Aliquam ut congue metus.",
    },
  ];
  return (
    <CustomGridModal item container>
      {itens.map((i, index) => (
        <div>
          <GridAccordion
            key={index}
            expanded={expanded === `panel[${index}]`}
            onChange={handleChange(`panel[${index}]`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel[${index}]bh-content`}
              id={`panel[${index}]bh-header`}
            >
              <Typography variant="h5" color="textPrimary">
                {i.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="inherit" color="textPrimary">
                {i.text}
              </Typography>
            </AccordionDetails>
          </GridAccordion>
        </div>
      ))}
    </CustomGridModal>
  );
};

const GridAccordion = styled(Accordion)`
  margin: 0.8rem 0 0 0;
  border-radius: 6px;
  .MuiTypography-body1 {
    color: ${(props) => props.theme.palette.common.black};
  }
  .MuiAccordionDetails-root {
    padding-top: 0;
  }
`;
const CustomGridModal = styled(Grid)`
  margin-top: 1.5rem;
`;

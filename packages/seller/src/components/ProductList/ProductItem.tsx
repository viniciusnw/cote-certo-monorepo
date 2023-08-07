import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {
  KeyboardArrowRight as KeyboardArrowRightIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Edit as EditIcon
} from '@material-ui/icons';
import {
  TableCell,
  TableRow,
  Typography,
  Switch,
  Button,
  Collapse,
  IconButton,
  Table,
  TableBody,
  Box,
  TableHead
} from '@material-ui/core'

import { breakpoints } from "./../../utils";

type Product = {
  id: string,
  name: string
  image: string
  price: string
  categories: Array<string>
  enabled: boolean
}

export const ProductItem: React.FC<Product> = (product) => {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState<boolean>(product.enabled || false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.checked);
  };

  if (breakpoints() == 'xs')
    return (
      <React.Fragment>
        <TableRow>
          <TableCell>
            <Image src={product.image} />
          </TableCell>

          <TableCell>
            <Typography variant='body2' color='textPrimary'>
              {product.name}
            </Typography>
          </TableCell>

          <TableCell>
            <IconButton size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
            </IconButton>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCellStyled style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Typography variant='body2' color='textPrimary'>
                          Categorias
                        </Typography>
                      </TableCell>

                      <TableCell>
                        <Typography variant='body2' color='textPrimary'>
                          Preço(R$)
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align="left">
                        <Typography variant='caption' color='textSecondary'>
                          {product.categories.map((catName, idx) => `${catName}${product.categories.length == idx + 1 ? '' : ', '} `)}
                        </Typography>
                      </TableCell>

                      <TableCell align="left">
                        <Typography variant='caption' color='textSecondary'>
                          {product.price}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>

                  <TableHead>
                    <TableRow>
                      <TableCell colSpan={2}>
                        <Typography variant='body2' color='textPrimary'>
                          Ativar/Desativar
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align="left">
                        <Switch
                          size="small"
                          name="Active"
                          color="secondary"
                          checked={state}
                          onChange={handleChange}
                        />
                      </TableCell>

                      <TableCell align="left">
                        <Button variant='outlined' color='primary' href={"/"}>
                          <Typography variant='caption' color='primary'>
                            editar
                          </Typography>
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCellStyled>
        </TableRow>
      </React.Fragment>
    )
  else
    return (
      <TableRow>
        <TableCellStyled>
          <Image src={product.image} />
        </TableCellStyled>

        <TableCellStyled>
          <Typography color='textPrimary'>
            {product.name}
          </Typography>
        </TableCellStyled>

        <TableCellStyled align="left">{product.price}</TableCellStyled>

        <TableCellStyled align="left">
          {product.categories.map((catName, idx) => `${catName}${product.categories.length == idx + 1 ? '' : ', '} `)}
        </TableCellStyled>

        <TableCellStyled align='left'>
          <Switch
            name="Active"
            size='medium'
            color='secondary'
            checked={state}
            onChange={handleChange}
          />
        </TableCellStyled>

        <TableCellStyled align='left'>
          <IconButton>
            <EditIcon fontSize="small" />
          </IconButton>
        </TableCellStyled>
      </TableRow>
    );
};

const Image = styled.img`
  width: 100px;
  height: 100px;
  ${(props) =>
    css`
    ${props.theme.breakpoints.down("xs")} {
      width: 50px;
      height: 50px;
    }
  `}
`

const TableCellStyled = styled(TableCell)`
  border-width: .5rem;
  border-color: #F2ECFF;
`
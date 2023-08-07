import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {
  Grid, Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableFooter,
  TablePagination,
  Button,
  Typography
} from '@material-ui/core'

import { Publish, AddBox } from '@material-ui/icons'
import { ProductItem } from './ProductItem'

import thumb from '../../assets/static/product/image.png'

const rows = [
  createData('Playstation 5 - Sony / 1TB Playstation 5', '2', '6.184,00', ['Consoles', 'Games'], false),
  createData('Playstation 5 - Sony / 1TB', '3', '6.184,00', ['Consoles', 'Games'], true),
  createData('Playstation 5 - Sony / 1TB', '4', '6.184,00', ['Consoles', 'Games'], false),
  createData('Playstation 5 - Sony / 1TB', '0', '6.184,00', ['Consoles', 'Games'], false),
  createData('Playstation 5 - Sony / 1TB', '5', '6.184,00', ['Consoles', 'Games'], true),
  createData('Playstation 5 - Sony / 1TB', '6', '6.184,00', ['Consoles', 'Games'], true),
  createData('Playstation 5 - Sony / 1TB', '7', '6.184,00', ['Consoles', 'Games'], true),
  createData('Playstation 5 - Sony / 1TB', '10', '6.184,00', ['Consoles', 'Games'], false),
  createData('Playstation 5 - Sony / 1TB', '11', '6.184,00', ['Consoles', 'Games'], false),
  createData('Playstation 5 - Sony / 1TB', '12', '6.184,00', ['Consoles', 'Games'], true),
  createData('Playstation 5 - Sony / 1TB', '13', '6.184,00', ['Consoles', 'Games'], false),
  createData('Playstation 5 - Sony / 1TB', '14', '6.184,00', ['Consoles', 'Games'], true),
];

function createData(name: string, id: string, price: string, categories: Array<string>, enabled: boolean) {
  return {
    id,
    name,
    image: thumb,
    price,
    categories,
    enabled
  };
}

export const ProductList: React.FC = () => {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  return (
    <>
      <Grid container>
        
        <GridTitle sm={6} xs={12} item>
          <Typography variant="h3" color="textPrimary">
            Produtos
          </Typography>
        </GridTitle>

        <GridButtons sm={6} xs={12} item>
          <ActionButtons>
            <Button startIcon={<PublishIcon />} variant="contained" color="secondary">
              <Typography variant="body2">
                <b>Importar</b>
              </Typography>
            </Button>
            <Button startIcon={<AddBoxIcon />} variant="contained" color="secondary">
              <Typography variant="body2">
                <b>Adicionar</b>
              </Typography>
            </Button>
          </ActionButtons>
        </GridButtons>

        <GridList xs={12} item>
          <TableContainerStyled>
            <Table size="small">
              <TableHeadStyled>

                <TableHeadDesktop>
                  <TableCell colSpan={2}>
                    <Typography variant='body2' color='textSecondary'>
                      <b>Produto</b>
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant='body2' color='textSecondary'>
                      <b>
                        Preço(R$)
                      </b>
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant='body2' color='textSecondary'>
                      <b>
                        Categoria(s)
                      </b>
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant='body2' color='textSecondary'>
                      <b>
                        Ativar/Desativar
                      </b>
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant='body2' color='textSecondary'>
                      <b>
                        Editar
                      </b>
                    </Typography>
                  </TableCell>
                </TableHeadDesktop>

                <TableHeadMobile>
                  <TableCell colSpan={5}>
                    <Typography variant='body2' color='textSecondary'>
                      <b>Nome</b>
                    </Typography>
                  </TableCell>
                </TableHeadMobile>

              </TableHeadStyled>

              <TableBody>
                <TableRow>
                  <TableCell colSpan={5}></TableCell>
                </TableRow>
              </TableBody>

              <TableBodyStyled>
                {rows.map((row, idx) => (
                  <ProductItem key={idx} {...row} />
                ))}
              </TableBodyStyled>

              <TableFooter>
                <TableRow>
                  <TablePagination
                    page={page}
                    colSpan={6}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    onPageChange={handleChangePage}
                    labelRowsPerPage='Itens por página'
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainerStyled>
        </GridList>
      </Grid>
    </>
  );
};

const TableHeadDesktop = styled(TableRow)`
  ${(props) =>
    css`
    ${props.theme.breakpoints.down("xs")} {
      display: none;
    }
  `}
`

const TableHeadMobile = styled(TableRow)`
  ${(props) =>
    css`
    ${props.theme.breakpoints.up("sm")} {
      display: none;
    }
  `}
`

const TableContainerStyled = styled(TableContainer)`
  min-height: 70vh;
`

const TableHeadStyled = styled(TableHead)`
  background-color: ${props => props.theme.palette.common.white};
`

const TableBodyStyled = styled(TableBody)`
  background-color: ${props => props.theme.palette.common.white};
`

const PublishIcon = styled(Publish)`
  color: ${(props) => props.theme.palette.common.white};
`

const AddBoxIcon = styled(AddBox)`
  color: ${(props) => props.theme.palette.common.white};
`

const ActionButtons = styled.div`
  gap: .5rem;
  display: grid;
  justify-content: end;
  grid-template-columns: min-content min-content;
`;

const GridList = styled(Grid)`
  margin-top: 1rem;
`;

const GridButtons = styled(Grid)`
  justify-content: flex-end;
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        justify-content: flex-start;
        margin-top: 1rem;
      }
    `}
`;

const GridTitle = styled(Grid)`
  align-self: center;
`;
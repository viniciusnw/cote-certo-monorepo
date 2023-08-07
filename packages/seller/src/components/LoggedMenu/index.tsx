import React from "react";
import styled from "@emotion/styled";
import { Link, Button, Menu, MenuItem, Typography, Avatar } from "@material-ui/core";
import { ArrowDropDown as ArrowDropDownIcon } from '@material-ui/icons';

import { useAuthenticationUserState } from '../../data/authentication/authenticationUserState';

export const LoggedMenu: React.FC = () => {
  const { user } = useAuthenticationUserState();
  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const userFirstName = user.nome?.split(' ')[0] || '';
  const userInitials = user.nome?.split(' ').map(letters => letters[0]);
  const initials = userInitials && [userInitials[0], ...userInitials.slice(-1)]
    .join('')
    .toUpperCase();

  return (
    <Container>
      <div>
        <Button
          onClick={handleMenu}
          startIcon={<Avatar alt={initials} src="/static/images/avatar/1.jpg" />}
          endIcon={<ArrowDropDownIcon />}
        >
          <Typography variant='caption'>
            Olá, {userFirstName}
          </Typography>
        </Button>

        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Typography color='textPrimary'>
              Profile
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography color='textPrimary'>
              My account
            </Typography>
          </MenuItem>
        </Menu>
      </div>
    </Container>
  );
};

const Container = styled.div`
  
`;
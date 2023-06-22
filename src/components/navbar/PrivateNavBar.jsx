import PropTypes from 'prop-types';

import { IconButton, MenuItem, Toolbar, Typography } from '@mui/material';
import {
  AccountCircle as AccountCircleIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import AvatarMenu from "../menu/AvatarMenu";


const menuItems = [
  {
    key: 'profile',
    icon: <AccountCircleIcon color="action" sx={{ mr: 2 }} />,
    title: 'Profile',
    redirectURL: "/profile",
  },
  {
    key: 'settings',
    icon: <SettingsIcon color="action" sx={{ mr: 2 }} />,
    title: 'Settings',
    redirectURL: "/settings",
  },
  {
    key: 'logout',
    icon: <LogoutIcon color="action" sx={{ mr: 2 }} />,
    title: 'Logout',
    redirectURL: "/bye",
  },
];

const PrivateNavBar = ({
  title,
}) => {
  const navigate = useNavigate();

  return (
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        sx={{
          marginRight: '36px',
        }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {title}
      </Typography>
      <AvatarMenu>
        {menuItems.map((item) => {
          return (
            <MenuItem key={item.key} onClick={() => navigate(item.redirectURL)}>
              {item.icon} {item.title}
            </MenuItem>
          );
        })}
      </AvatarMenu>
    </Toolbar>
  );
};

PrivateNavBar.propTypes = {
  title: PropTypes.string.isRequired,
};

PrivateNavBar.defaultProps = {
  title: ""
};


export default PrivateNavBar;

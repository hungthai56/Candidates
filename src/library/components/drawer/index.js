import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import { IcDropDown, IcFm } from 'assets/images/icons/icon-list';
import MenuItem from './MenuItem';
import MenuCollapse from './MenuCollapse';

const drawerWidth = 228;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  backgroundColor: '#FFD500',
  overflowX: 'hidden',
  '& .MuiListItemText-root:hover': {
    color: '#333333',
  },
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: '60px',
  backgroundColor: '#FFD500',
  '& .MuiListItemButton-root': {
    backgroundColor: '#FFD500',
  },
  '& .MuiListItemButton-root:hover': {
    backgroundColor: '#F7C100',
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '50px',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  boxShadow: 'rgb(0 0 0 / 25%) 0px 2px 4px',
  '& .MuiIconButton-root': {
    marginLeft: '60px',
  },
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  zIndex: 500,
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const StyledList = styled(List)(({ theme }) => ({
  height: 'calc(100vh - 50px)',
  overflowY: 'overlay',
  overflowX: 'hidden',
  zIndex: 100,
  '::-webkit-scrollbar': {
    display: 'none',
  },
}));

export default function MiniDrawer(props) {
  const { onToggle, Menu } = props;
  const [open, setOpen] = useState(true);

  const handleDrawerClose = () => {
    if (onToggle) {
      onToggle(!open);
    }
    setOpen(!open);
  };

  // Init menu
  const menus = Menu.map((item) => {
    switch (item.type) {
      case 'collapse':
        return (
          <MenuCollapse menuOpen={open} key={item.id} menu={item} level={1} />
        );
      case 'item':
        return <MenuItem menuOpen={open} key={item.id} item={item} level={1} />;
      default:
        return <p>Menu Items Error</p>;
    }
  });

  return (
    <Drawer
      variant="permanent"
      open={open}
      PaperProps={{ sx: { zIndex: 999 } }}
    >
      <DrawerHeader>
        <div className="pointer" onClick={() => window.location.assign('/')}>
          <IcFm className="style-iconFm" />
        </div>
        <IconButton onClick={handleDrawerClose}>
          <IcDropDown />
        </IconButton>
      </DrawerHeader>
      <StyledList>{menus}</StyledList>
    </Drawer>
  );
}

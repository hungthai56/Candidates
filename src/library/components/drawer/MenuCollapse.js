import React, { useEffect, useState, Fragment } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import { useDispatch, useSelector } from 'react-redux';
import IconArrowHead from 'assets/images/icons/sidebar/ic-arrow-head';
import uiActions from 'redux/ui/action';
import MenuItem from './MenuItem';

function MenuCollapse(props) {
    const { menu, level, menuOpen } = props;
    const { isOpen } = useSelector((state) => state.ui);
    const isActive = isOpen.findIndex((id) => id === menu.id) > -1;
    const [openSubMenu, setOpenSubmenu] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!!menu?.parentId && isActive) {
            dispatch({
                type: uiActions.SET_MENU,
                payload: [...isOpen, menu.parentId],
            });
        }
        if (isActive) {
            setOpenSubmenu(true);
        }
    }, [isActive]);

    const menus = menu?.subNav?.map((item) => {
        switch (item.type) {
            case 'collapse':
                return (
                    <MenuCollapse
                        menuOpen={menuOpen}
                        key={item.id}
                        menu={item}
                        level={level + 1}
                    />
                );
            case 'item':
                return (
                    <MenuItem
                        menuOpen={menuOpen}
                        key={item.id}
                        item={item}
                        level={level + 1}
                    />
                );
            default:
                return <p>Menu Items Error</p>;
        }
    });

    return (
        <>
            <ListItemButton
                key={menu.id}
                sx={{
                    fontWeight: openSubMenu ? '500' : '400',
                    minHeight: '47px',
                    backgroundColor: openSubMenu && '#FFEC8A',
                    pl: `${level * 15}px`,
                    gap: '10px',
                }}
                onClick={() => setOpenSubmenu(!openSubMenu)}
                // disabled={menu.isDisable}
            >
                <ListItemIcon sx={{ minWidth: 'unset' }}>
                    {menu.icon}
                </ListItemIcon>

                <ListItemText
                    sx={{ display: menuOpen ? 'block' : 'none' }}
                    disableTypography
                    primary={menu.title}
                />
                <div
                    style={{
                        transform: openSubMenu ? 'rotate(90deg)' : 'rotate(0)',
                        transition: 'transform .2s linear',
                        display: menuOpen ? 'block' : 'none',
                    }}
                >
                    <IconArrowHead />
                </div>
            </ListItemButton>
            <Collapse in={openSubMenu} timeout="auto">
                <List
                    component="div"
                    disablePadding
                    style={{
                        backgroundColor: '#FFDD33',
                    }}
                >
                    {menus}
                </List>
            </Collapse>
        </>
    );
}
export default MenuCollapse;

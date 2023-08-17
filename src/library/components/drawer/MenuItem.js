import React, { useEffect } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import uiActions from 'redux/ui/action';

function MenuItem(props) {
    const { item, level, menuOpen } = props;
    const dispatch = useDispatch();
    const history = useHistory();
    const { isOpen } = useSelector((state) => state.ui);
    const isActive = isOpen.findIndex((id) => id === item.id) > -1;

    const itemHandler = (id) => {
        history.push(item?.path);
        if (!!item?.parentId) {
            dispatch({
                type: uiActions.SET_MENU,
                payload: [...isOpen, item.parentId],
            });
        } else {
            dispatch({
                type: uiActions.SET_MENU,
                payload: [id],
            });
        }
    };

    useEffect(() => {
        const currentIndex = document.location.pathname
            .toString()
            .includes(item.path);
        if (currentIndex) {
            if (!!item?.parentId && isActive) {
                dispatch({
                    type: uiActions.SET_MENU,
                    payload: [...isOpen, item.parentId],
                });
            } else {
                dispatch({
                    type: uiActions.SET_MENU,
                    payload: [item.id],
                });
            }
        }
    }, [isActive]);

    const listItemButtonStyle = (active, menuLevel) => {
        let style = {
            fontWeight: active ? '700' : '400',
            minHeight: '47px',
            backgroundColor: '#FFE459',
        };
        if (menuLevel === 1) {
            return {
                ...style,
                backgroundColor: active && '#FFEC8A',
            };
        } else {
            return {
                ...style,
            };
        }
    };

    return (
        <ListItemButton
            key={item.id}
            sx={listItemButtonStyle(isActive, level)}
            onClick={() => itemHandler(item.id)}
            // disabled={item.isDisable}
        >
            <ListItemIcon sx={{ minWidth: '34px' }}>{item.icon}</ListItemIcon>
            <ListItemText
                sx={{ display: menuOpen ? 'block' : 'none' }}
                disableTypography
                primary={item.title}
            />
        </ListItemButton>
    );
}
export default MenuItem;

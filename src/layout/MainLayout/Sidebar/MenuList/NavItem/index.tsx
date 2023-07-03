import PropTypes from 'prop-types';
import { forwardRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Avatar, Chip, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material';
import { MENU_OPEN, SET_MENU } from 'store/actions/types';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import NavItemBadge from './NavItemBadge';
import { useAppSelector } from 'hooks/useAppSelector';
import { RootState } from 'store';
import { useAppDispatch } from 'hooks/useAppDispatch';
import setSideNavigationOpenedMenuItemId from 'store/actions/setSideNavigationOpenedMenuItemId';

const NavItem = ({ item, level }) => {
    const theme = useTheme();
    const dispatch = useAppDispatch();

    // const matchesSM = useMediaQuery(theme.breakpoints.down('lg'));

    const openedMenuItem = [useAppSelector((state: RootState) => state.site.sideNavigation.openedMenuItemId)];

    const Icon = item.icon;
    const itemIcon = item?.icon ? (
        <Icon stroke={1.5} size="1.3rem" />
    ) : (
        <FiberManualRecordIcon
            sx={{
                width: openedMenuItem.findIndex((id) => id === item?.id) > -1 ? 8 : 6,
                height: openedMenuItem.findIndex((id) => id === item?.id) > -1 ? 8 : 6
            }}
            fontSize={level > 0 ? 'inherit' : 'medium'}
        />
    );

    let itemTarget = '_self';
    if (item.target) {
        itemTarget = '_blank';
    }

    let listItemProps = {
        component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.url} target={itemTarget} />)
    };
    if (item?.external) {
        listItemProps = { component: 'a', href: item.url, target: itemTarget };
    }

    const itemHandler = (id) => {
        dispatch(setSideNavigationOpenedMenuItemId(id));

        // if (matchesSM) dispatch({ type: SET_MENU, opened: false });
    };

    useEffect(() => {
        const currentIndex = document.location.pathname
            .toString()
            .split('/')
            .findIndex((id) => id === item.id);
        if (currentIndex > -1) {
            dispatch({ type: MENU_OPEN, id: item.id });
        }
        // eslint-disable-next-line
    }, []);

    return (
        <ListItemButton
            {...listItemProps}
            disabled={item.disabled}
            sx={{
                borderRadius: 0,
                mb: 0.5,
                alignItems: 'flex-start',
                backgroundColor: openedMenuItem.findIndex((id) => id === item.id) > -1 ? 'red' : 'transparent',
                borderLeft: 'solid 3px transparent',
                borderColor: openedMenuItem.findIndex((id) => id === item.id) > -1 ? theme.palette.primary.main : 'transparent',
                py: level > 1 ? 1 : 1.25,
                pl: level > 1 ? `${level * 8}px` : `${level * 24}px`,
                marginLeft: level > 1 ? '26px' : 0,
                listStyle: 'none',
                zIndex: 2
            }}
            selected={openedMenuItem.findIndex((id) => id === item.id) > -1}
            onClick={() => itemHandler(item.id)}
            color="primary"
        >
            <ListItemIcon sx={{ my: 'auto', minWidth: !item?.icon ? 18 : 36 }}>{itemIcon}</ListItemIcon>
            <ListItemText
                primary={
                    <Typography variant={openedMenuItem.findIndex((id) => id === item.id) > -1 ? 'h5' : 'body1'} color="inherit">
                        {item.title}
                    </Typography>
                }
                secondary={
                    item.caption && (
                        <Typography variant="caption" display="block" gutterBottom>
                            {item.caption}
                        </Typography>
                    )
                }
            />
            {item.badge && <NavItemBadge content={item.badge} active={openedMenuItem.findIndex((id) => id === item.id) > -1} />}
            {item.chip && (
                <Chip
                    color={item.chip.color}
                    variant={item.chip.variant}
                    size={item.chip.size}
                    label={item.chip.label}
                    avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
                />
            )}
        </ListItemButton>
    );
};

NavItem.propTypes = {
    item: PropTypes.object,
    level: PropTypes.number
};

export default NavItem;

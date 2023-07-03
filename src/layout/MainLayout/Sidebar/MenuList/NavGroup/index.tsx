import PropTypes from 'prop-types';
import { Divider, List, Typography } from '@mui/material';
import NavItem from '../NavItem';
import NavCollapse from '../NavCollapse';
import { MenuCaptionTypography, SubMenuCaptionTypography } from './styles';

const NavGroup = ({ item, isLast }) => {
    const items = item.children?.map((menu) => {
        switch (menu.type) {
            case 'collapse':
                return <NavCollapse key={menu.id} menu={menu} level={1} />;
            case 'item':
                return <NavItem key={menu.id} item={menu} level={1} />;
            default:
                return (
                    <Typography key={menu.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });

    return (
        <>
            <List
                subheader={
                    item.title && (
                        <MenuCaptionTypography variant="caption" display="block" gutterBottom sx={{ paddingLeft: '16px' }}>
                            {item.title}
                            {item.caption && (
                                <SubMenuCaptionTypography variant="caption" display="block" gutterBottom>
                                    {item.caption}
                                </SubMenuCaptionTypography>
                            )}
                        </MenuCaptionTypography>
                    )
                }
            >
                {items}
            </List>

            {!isLast && <Divider sx={{ mt: 0.25, mb: 1.25 }} />}
        </>
    );
};

NavGroup.propTypes = {
    item: PropTypes.object
};

export default NavGroup;

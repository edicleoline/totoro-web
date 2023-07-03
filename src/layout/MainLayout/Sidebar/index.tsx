import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Box, Drawer, useMediaQuery } from '@mui/material';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { BrowserView, MobileView } from 'react-device-detect';
import MenuList from './MenuList';
import LogoSection from '../LogoSection';
import MenuCard from './MenuCard';
import { drawerWidth } from 'store/constant';

export interface SidebarProps {
    drawerOpen: boolean;
    drawerToggle?(): void;
    window?: Window;
}

const Sidebar = (props: SidebarProps) => {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

    const drawer = (
        <>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <Box sx={{ display: 'flex', p: 2, mx: 'auto' }}>
                    <LogoSection />
                </Box>
            </Box>
            <BrowserView>
                <PerfectScrollbar
                    component="div"
                    style={{
                        height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
                        paddingLeft: '0',
                        paddingRight: '0',
                        paddingTop: '12px'
                    }}
                >
                    <MenuList />
                    <MenuCard />
                </PerfectScrollbar>
            </BrowserView>
            <MobileView>
                <Box sx={{ px: 2 }}>
                    <MenuList />
                    <MenuCard />
                </Box>
            </MobileView>
        </>
    );

    const container = props.window ? () => window.document.body : undefined;

    return (
        <Box component="nav" sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : 'auto' }} aria-label="main-menu items">
            <Drawer
                container={container}
                variant={matchUpMd ? 'persistent' : 'temporary'}
                anchor="left"
                open={props.drawerOpen}
                onClose={props.drawerToggle}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        background: matchUpMd ? 'transparent' : '#ffffff',
                        color: theme.palette.text.primary,
                        borderRight: 'solid 1px #d9d9d9',
                        [theme.breakpoints.up('md')]: {
                            top: '65px'
                        }
                    }
                }}
                ModalProps={{ keepMounted: true }}
                color="inherit"
            >
                {drawer}
            </Drawer>
        </Box>
    );
};

export default Sidebar;

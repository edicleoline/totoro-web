import { useSelector } from 'react-redux';
import { RootState, store } from 'store';
import { Outlet } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';
// import Breadcrumbs from 'ui-component/extended/Breadcrumbs';
import Header from './Header';
import Sidebar from './Sidebar';
import { drawerWidth } from 'store/constant';
import { useAppDispatch } from 'hooks/useAppDispatch';
import setSideNavigationOpen from 'store/actions/setSideNavigationOpen';
import { Main } from './styles';

const MainLayout = () => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

    const dispatch = useAppDispatch();

    const sideNavigationOpen: boolean = useSelector((state: RootState) => state.site.sideNavigation.open);

    const handleLeftDrawerToggle = () => {
        dispatch(setSideNavigationOpen(!sideNavigationOpen));
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={0}
                sx={{
                    bgcolor: theme.palette.background.default,
                    transition: sideNavigationOpen ? theme.transitions.create('width') : 'none',
                    borderBottom: 'solid 1px #ddd',
                    boxShadow: '0px 0px 4px rgba(0,0,0,.1)',
                    zIndex: matchDownMd ? 1100 : 1300
                }}
            >
                <Toolbar>
                    <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
                </Toolbar>
            </AppBar>

            <Sidebar drawerOpen={!matchDownMd ? sideNavigationOpen : !sideNavigationOpen} drawerToggle={handleLeftDrawerToggle} />

            <Main theme={theme} sideNavigationOpen={sideNavigationOpen} drawerWidth={drawerWidth}>
                {/* <FixedNotification /> */}
                {/* breadcrumb */}
                {/* <Breadcrumbs separator={IconChevronRight} navigation={navigation} icon title rightAlign /> */}
                <Outlet />
            </Main>
        </Box>
    );
};

export default MainLayout;

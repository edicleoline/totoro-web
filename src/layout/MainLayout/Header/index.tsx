import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase } from '@mui/material';
import LogoSection from '../LogoSection';
// import SearchSection from './SearchSection';
import ProfileSection from './ProfileSection';
import NotificationSection from './NotificationSection';
import { IconMenu2 } from '@tabler/icons';
import ProjectSection from '../ProjectSection';

export interface HeaderProps {
    handleLeftDrawerToggle?(): void;
}

const Header = (props: HeaderProps) => {
    const theme = useTheme();

    return (
        <>
            <Box
                sx={{
                    width: 235,
                    display: 'flex',
                    [theme.breakpoints.down('md')]: {
                        width: 'auto'
                    }
                }}
            >
                <ButtonBase sx={{ borderRadius: '50%', overflow: 'hidden', marginRight: '16px' }}>
                    <Avatar
                        variant="rounded"
                        sx={{
                            transition: 'all .2s ease-in-out',
                            background: 'transparent',
                            color: theme.palette.neutral.main,
                            '&:hover': {
                                background: 'transparent',
                                color: theme.palette.primary[800]
                            }
                        }}
                        onClick={props.handleLeftDrawerToggle}
                        color="inherit"
                    >
                        <IconMenu2 stroke={1.5} size="1.3rem" />
                    </Avatar>
                </ButtonBase>
                <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
                    <LogoSection />
                </Box>
            </Box>

            {/* <SearchSection /> */}
            <ProjectSection />
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ flexGrow: 1 }} />

            {/* <ServerStateSection /> */}
            <NotificationSection />
            <ProfileSection />
        </>
    );
};

Header.propTypes = {
    handleLeftDrawerToggle: PropTypes.func
};

export default Header;

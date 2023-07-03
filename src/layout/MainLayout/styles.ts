import { styled } from '@mui/material/styles';

// export const MainContentSx = (theme: Theme) => {
//     return {
//         backgroundColor: theme.palette.background.paper,
//         width: '100%',
//         minHeight: 'calc(100vh - 88px)',
//         flexGrow: 1,
//         padding: '20px',
//         marginTop: '88px',
//         marginRight: '20px',
//         borderRadius: '6px'
//     };
// };

type MainProps = {
    sideNavigationOpen: boolean;
    drawerWidth: number;
};

export const Main = styled('main')<MainProps>(({ theme, sideNavigationOpen, drawerWidth }) => ({
    // ...theme.typography.mainContent,
    ...{
        backgroundColor: theme.palette.background.paper,
        width: '100%',
        minHeight: 'calc(100vh - 88px)',
        flexGrow: 1,
        padding: '20px',
        marginTop: '121px',
        marginRight: '0px',
        borderRadius: '6px'
    },
    // ...{ backgroundColor: 'red' },
    ...(!sideNavigationOpen && {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        [theme.breakpoints.up('md')]: {
            marginLeft: -(drawerWidth - 20),
            width: `calc(100% - ${drawerWidth}px)`
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px',
            width: `calc(100% - ${drawerWidth}px)`,
            padding: '16px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px',
            width: `calc(100% - ${drawerWidth}px)`,
            padding: '16px',
            marginRight: '10px'
        }
    }),
    ...(sideNavigationOpen && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        width: `calc(100% - ${drawerWidth}px)`,
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px'
        }
    })
}));

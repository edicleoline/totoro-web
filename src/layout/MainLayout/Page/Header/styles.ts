import { Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeaderContainer = styled('div')(({ theme }) => ({
    position: 'fixed',
    top: '65px',
    left: '260px',
    background: '#ffffff',
    width: '100%',
    zIndex: 1,
    borderBottom: 'solid 1px #d0d0d0',
    boxShadow: '0px 0px 4px rgba(0,0,0,.1)',
    transition: 'left 0.2s ease-in-out'
}));

export const GridHeaderWrapper = styled(Grid)(({ theme }) => ({
    height: 'auto',
    padding: '16px 16px'
}));

export const GridHeaderTitleContainer = styled('div')(({ theme }) => ({
    flex: 1,
    height: '100%',
    overflow: 'hidden',
    alignSelf: 'center'
}));

export const GridHeaderTitleWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    height: '100%',
    alignItems: 'stretch',
    flexDirection: 'row'
}));

export const HeaderTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 400
}));

import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const GridContainer = styled(Grid)(({ theme }) => ({
    width: 'auto'
}));

export const GridItemContainer = styled(Grid)(({ theme }) => ({
    width: 'auto'
}));

export const DividerContainer = styled('div')(({ theme }) => ({
    color: '#d9d9d9'
}));

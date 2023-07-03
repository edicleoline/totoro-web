import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MenuCaptionTypography = styled(Typography)(({ theme }) => ({
    fontSize: '0.875rem',
    fontWeight: 500,
    color: theme.palette.grey[700],
    padding: '6px',
    textTransform: 'capitalize',
    marginTop: '10px'
}));

export const SubMenuCaptionTypography = styled(Typography)(({ theme }) => ({
    fontSize: '0.6875rem',
    fontWeight: 500,
    color: theme.palette.grey[500],
    textTransform: 'capitalize'
}));

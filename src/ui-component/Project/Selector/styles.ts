import { Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const DropdownContainer = styled('div')(({ theme }) => ({
    display: 'inline-flex',
    flex: 1,
    flexDirection: 'column',
    maxWidth: '100%',
    minHeight: '24px',
    height: '64px',
    overflow: 'hidden',
    position: 'relative'
}));

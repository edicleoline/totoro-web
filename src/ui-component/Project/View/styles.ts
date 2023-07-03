import { Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const BoxContainer = styled(Box)(({ theme }) => ({
    //asd
}));

export const DropdownContainer = styled('div')(({ theme }) => ({
    display: 'inline-flex',
    flex: 1,
    flexDirection: 'column',
    maxWidth: '100%',
    minHeight: '24px',
    height: '64px',
    overflow: 'hidden',
    position: 'relative',
    '&::after': {
        content: '" "',
        height: '4px',
        borderRadius: '4px 4px 0 0',
        width: '100%',
        backgroundColor: theme.palette.secondary.main,
        position: 'absolute',
        bottom: 0,
        left: 0,
        pointerEvents: 'none',
        opacity: 1
    }
}));

export const GridDropdownWrapper = styled(Grid)(({ theme }) => ({
    flex: '1 0 auto',
    lineHeight: 'normal',
    overflow: 'hidden',
    padding: '0 8px 0 16px',
    boxSizing: 'border-box',
    whiteSpace: 'nowrap',
    height: '48px'
}));

export const GridDropdownContent = styled(Grid)(({ theme }) => ({
    textAlign: 'left',
    whiteSpace: 'nowrap',
    maxWidth: '25vw',
    marginRight: '16px',
    width: 'auto',
    marginBottom: '-4px'
}));

export const BoxContentHeading = styled(Box)(({ theme }) => ({
    marginBottom: '2px'
}));

export const GridTextIconContainer = styled(Grid)(({ theme }) => ({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '100%'
}));

export const IconContainer = styled('div')(({ theme }) => ({
    marginRight: '4px',
    display: 'flex'
}));

export const TextContent = styled('div')(({ theme }) => ({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '100%'
}));

export const TypographyProjectName = styled(Typography)(({ theme }) => ({
    fontWeight: 500,
    lineHeight: 'inherit'
}));

export const BoxDropdownArrow = styled(Box)(({ theme }) => ({
    display: 'inline-flex',
    height: '12px',
    marginTop: '-12px',
    marginBottom: '-12px'
}));

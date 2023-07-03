import { Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const BoxContainer = styled(Box)(({ theme }) => ({
    //asd
}));

export const GridContainer = styled(Grid)(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    width: '520px',
    height: '600px',
    maxWidth: '90vw',
    maxHeight: 'calc(90vh - 200px)'
}));

export const GridHeaderContainer = styled(Grid)(({ theme }) => ({
    borderBottom: '1px solid #dadce0',
    padding: '16px'
}));

export const TypographyHeaderTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 500
}));

export const ListContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    width: '100%',
    flexGrow: 1,
    overflow: 'hidden'
}));

export const ListWrapper = styled('div')(({ theme }) => ({
    display: 'block',
    margin: 0,
    padding: '16px 0',
    whiteSpace: 'nowrap',
    overflowY: 'auto',
    width: '100%',
    paddingTop: 0
}));

export const TypographyListLabel = styled(Typography)(({ theme }) => ({
    display: 'block',
    lineHeight: '32px',
    padding: '0 24px',
    position: 'relative',
    whiteSpace: 'nowrap',
    fontSize: '0.8rem'
}));

export const ListItemContainer = styled('div')(({ theme }) => ({
    //
}));

export const ListItemWrapper = styled('div')(({ theme }) => ({
    cursor: 'pointer',
    padding: '0 16px',
    outline: 'none',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    minHeight: '48px',
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none',
    paddingRight: 0,
    background: theme.palette.primary.light,
    position: 'relative'
}));

export const ListItemContent = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    padding: '8px 0',
    position: 'relative'
}));

export const ListItemContentIcon = styled('div')(({ theme }) => ({
    display: 'flex',
    marginRight: '8px'
}));

export const ListItemContentText = styled('div')(({ theme }) => ({
    lineHeight: '16px',
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis'
}));

export const FooterContainer = styled('div')(({ theme }) => ({
    borderTop: '1px solid #dadce0',
    padding: '16px',
    display: 'flex',
    alignItems: 'center'
}));

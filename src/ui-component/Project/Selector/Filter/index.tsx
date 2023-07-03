import ProjectSelector from '@components/Project/View';
import {
    BoxContainer,
    FilterBarContainer,
    FilterBarWrapper,
    FilterButtonContainer,
    FooterContainer,
    GridContainer,
    GridHeaderContainer,
    ListContainer,
    ListItemContainer,
    ListItemContent,
    ListItemContentIcon,
    ListItemContentText,
    ListItemWrapper,
    ListWrapper,
    PredicatesContainer,
    TypographyHeaderTitle,
    TypographyListLabel
} from './styles';
import { useTheme } from '@mui/material/styles';
import { IconHome2 } from '@tabler/icons-react';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Badge, { BadgeProps } from '@mui/material/Badge';

const ProjectSelectorFilter = () => {
    const theme = useTheme();
    return (
        <BoxContainer>
            <GridContainer container direction="column">
                <GridHeaderContainer container alignItems="center" justifyContent="flex-start">
                    <FilterBarContainer>
                        <FilterButtonContainer>
                            <FilterBarWrapper>
                                <IconButton aria-label="filter" size="small" color="primary">
                                    <Badge badgeContent={1} color="primary">
                                        <FilterAltIcon fontSize="medium" />
                                    </Badge>
                                </IconButton>
                            </FilterBarWrapper>
                        </FilterButtonContainer>
                        <PredicatesContainer>asdasd</PredicatesContainer>
                    </FilterBarContainer>
                </GridHeaderContainer>
                <ListContainer>
                    <ListWrapper>
                        <TypographyListLabel color={theme.palette.grey[500]}>Tipos de projetos</TypographyListLabel>
                        <ListItemContainer>
                            <ListItemWrapper>
                                <ListItemContent>
                                    <ListItemContentIcon>
                                        <IconHome2 size="1.1rem" strokeWidth={'0.09rem'} />
                                    </ListItemContentIcon>
                                    <ListItemContentText>Todos os projetos</ListItemContentText>
                                </ListItemContent>
                            </ListItemWrapper>
                        </ListItemContainer>
                    </ListWrapper>
                </ListContainer>
            </GridContainer>
        </BoxContainer>
    );
};

export default ProjectSelectorFilter;

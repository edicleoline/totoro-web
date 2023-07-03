import ProjectSelector from '@components/Project/View';
import {
    BoxContainer,
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
    TypographyHeaderTitle,
    TypographyListLabel
} from './styles';
import { useTheme } from '@mui/material/styles';
import { IconHome2 } from '@tabler/icons-react';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const ProjectViewList = () => {
    const theme = useTheme();
    return (
        <BoxContainer>
            <GridContainer container direction="column">
                <GridHeaderContainer container alignItems="center" justifyContent="flex-start">
                    <TypographyHeaderTitle>Selecionar view</TypographyHeaderTitle>
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
                <FooterContainer>
                    <Button variant="text" startIcon={<AddCircleIcon />}>
                        Criar view
                    </Button>
                </FooterContainer>
            </GridContainer>
        </BoxContainer>
    );
};

export default ProjectViewList;

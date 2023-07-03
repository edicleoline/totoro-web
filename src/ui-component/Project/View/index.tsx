import { useTheme } from '@mui/system';
import {
    BoxContainer,
    BoxContentHeading,
    BoxDropdownArrow,
    DropdownContainer,
    GridDropdownContent,
    GridDropdownWrapper,
    GridTextIconContainer,
    IconContainer,
    TextContent,
    TypographyProjectName
} from './styles';
import { useEffect, useRef, useState } from 'react';
import { ButtonBase, ClickAwayListener, Paper, Popper, Typography } from '@mui/material';
import Transitions from 'ui-component/extended/Transitions';
import MainCard from 'ui-component/cards/MainCard';
import { IconHome2, IconChevronDown } from '@tabler/icons-react';
import ProjectViewList from './List';

const ProjectView = () => {
    const theme = useTheme();

    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLDivElement>(null);

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current?.focus();
        }
        prevOpen.current = open;
    }, [open]);

    return (
        <BoxContainer>
            <ButtonBase ref={anchorRef} aria-controls={open ? 'menu-list-grow' : undefined} aria-haspopup="true" onClick={handleToggle}>
                <DropdownContainer>
                    <GridDropdownWrapper container alignItems="center" justifyContent="space-between">
                        <GridDropdownContent container direction="column" alignItems="flex-start">
                            <BoxContentHeading>View (2 filtros)</BoxContentHeading>
                            <GridTextIconContainer container alignItems="center">
                                <IconContainer>
                                    <IconHome2 size="1.1rem" strokeWidth={'0.09rem'} />
                                </IconContainer>
                                <TextContent>
                                    <TypographyProjectName>Todos os projetos</TypographyProjectName>
                                </TextContent>
                            </GridTextIconContainer>
                        </GridDropdownContent>
                        <BoxDropdownArrow>
                            <IconChevronDown size="1.1rem" />
                        </BoxDropdownArrow>
                    </GridDropdownWrapper>
                </DropdownContainer>
            </ButtonBase>
            <Popper
                placement="bottom-start"
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                popperOptions={{
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, 1]
                            }
                        }
                    ]
                }}
            >
                {({ TransitionProps }) => (
                    <Transitions position={'top-left'} type={'grow'} direction={'up'} in={open} {...TransitionProps}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MainCard border={false} elevation={16} content={false} boxShadow={true} shadow={theme.shadows[16]}>
                                    <ProjectViewList />
                                </MainCard>
                            </ClickAwayListener>
                        </Paper>
                    </Transitions>
                )}
            </Popper>
        </BoxContainer>
    );
};

export default ProjectView;

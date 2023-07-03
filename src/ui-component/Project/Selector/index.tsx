import { useTheme } from '@mui/system';
import {
    BoxContainer,
    BoxContentHeading,
    BoxDropdownArrow,
    GridDropdownContent,
    GridDropdownWrapper,
    GridTextIconContainer,
    TextContent,
    TypographyProjectName
} from 'ui-component/Project/View/styles';
import { DropdownContainer } from './styles';
import { useEffect, useRef, useState } from 'react';
import { ButtonBase, ClickAwayListener, Paper, Popper, Typography } from '@mui/material';
import Transitions from 'ui-component/extended/Transitions';
import MainCard from 'ui-component/cards/MainCard';
import { IconChevronDown } from '@tabler/icons-react';
import ProjectSelectorFilter from './Filter';

const ProjectSelector = () => {
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
                            <BoxContentHeading>Projetos (4)</BoxContentHeading>
                            <GridTextIconContainer container alignItems="center">
                                <TextContent>
                                    <TypographyProjectName>Selecione um projeto</TypographyProjectName>
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
                                    <ProjectSelectorFilter />
                                </MainCard>
                            </ClickAwayListener>
                        </Paper>
                    </Transitions>
                )}
            </Popper>
        </BoxContainer>
    );
};

export default ProjectSelector;

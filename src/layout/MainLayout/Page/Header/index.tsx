import { useTheme } from '@mui/material/styles';
import { HeaderContainer, GridHeaderWrapper, GridHeaderTitleContainer, GridHeaderTitleWrapper, HeaderTitle } from './styles';
import { useDevice } from 'hooks/useDevice';
import { useAppSelector } from 'hooks/useAppSelector';
import { RootState } from 'store';

export interface PageHeaderProps {
    title: string | React.ReactNode;
    children: React.ReactNode;
}
const PageHeader = (props: PageHeaderProps) => {
    const theme = useTheme();
    const [isMobile] = useDevice();
    const sideNavigationOpen = useAppSelector((state: RootState) => state.site.sideNavigation.open);

    return (
        // <div></div>
        <HeaderContainer
            sx={{
                left: isMobile || !sideNavigationOpen ? '0' : '260px',
                width: isMobile || !sideNavigationOpen ? '100%' : 'calc(100% - 260px)'
            }}
        >
            <GridHeaderWrapper container alignItems="center" justifyContent="space-between">
                <GridHeaderTitleContainer>
                    <GridHeaderTitleWrapper>
                        <HeaderTitle variant="h3" component="div" color={theme.palette.neutral.main}>
                            {props.title}
                        </HeaderTitle>
                    </GridHeaderTitleWrapper>
                </GridHeaderTitleContainer>
                <div>{props.children}</div>
            </GridHeaderWrapper>
        </HeaderContainer>
    );
};

export default PageHeader;

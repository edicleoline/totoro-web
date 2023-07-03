import SvgIconChevronForward from 'ui-component/icons/SvgIconChevronForward';
import { DividerContainer, GridContainer, GridItemContainer } from './styles';
import ProjectView from 'ui-component/Project/View';
import ProjectSelector from 'ui-component/Project/Selector';

const ProjectSection = () => {
    return (
        <GridContainer container direction="row" alignItems="center">
            <GridItemContainer container alignItems="center">
                <ProjectView />
            </GridItemContainer>
            <GridItemContainer container alignItems="center">
                <DividerContainer>
                    <SvgIconChevronForward />
                </DividerContainer>
            </GridItemContainer>
            <GridItemContainer container alignItems="center">
                <ProjectSelector />
            </GridItemContainer>
        </GridContainer>
    );
};

export default ProjectSection;

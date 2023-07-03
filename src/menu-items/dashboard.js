import { IconDashboard, IconStackPush, IconH1, IconAlertOctagon, IconBoxAlignBottom, IconBoxMargin, IconWriting } from '@tabler/icons';
import { IconShape, IconLayoutGridAdd, IconBoxAlignTop, IconPalette } from '@tabler/icons';
const icons = {
    IconDashboard,
    IconStackPush,
    IconH1,
    IconAlertOctagon,
    IconBoxAlignBottom,
    IconBoxMargin,
    IconWriting,
    IconShape,
    IconLayoutGridAdd,
    IconBoxAlignTop,
    IconPalette
};

const dashboard = {
    id: 'dashboard',
    // title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'ui',
            title: 'UI',
            type: 'collapse',
            icon: icons.IconStackPush,
            children: [
                {
                    id: 'ui-alert',
                    title: 'Alertas',
                    type: 'item',
                    icon: icons.IconAlertOctagon,
                    url: '/ui/alert',
                    target: false
                },
                {
                    id: 'ui-button',
                    title: 'Botões',
                    type: 'item',
                    icon: icons.IconBoxAlignBottom,
                    url: '/ui/button',
                    target: false
                },
                {
                    id: 'ui-color',
                    title: 'Cores',
                    type: 'item',
                    icon: icons.IconPalette,
                    url: '/ui/color',
                    target: false
                },
                {
                    id: 'ui-dialog',
                    title: 'Diálogos',
                    type: 'item',
                    icon: icons.IconBoxMargin,
                    url: '/ui/dialog',
                    target: false
                },
                {
                    id: 'ui-icon',
                    title: 'Ícones',
                    type: 'item',
                    icon: icons.IconShape,
                    url: '/ui/icon',
                    target: false
                },
                {
                    id: 'ui-grid',
                    title: 'Grades',
                    type: 'item',
                    icon: icons.IconLayoutGridAdd,
                    url: '/ui/grid',
                    target: false
                },
                {
                    id: 'ui-tab',
                    title: 'Tabs',
                    type: 'item',
                    icon: icons.IconBoxAlignTop,
                    url: '/ui/tab',
                    target: false
                },
                {
                    id: 'ui-typography',
                    title: 'Tipografia',
                    type: 'item',
                    icon: icons.IconWriting,
                    url: '/ui/typography',
                    target: false
                }
            ]
        }
    ]
};

export default dashboard;

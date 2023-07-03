import { lazy } from 'react';

import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

const UiAlert = Loadable(lazy(() => import('views/ui/Alert')));
const UiButton = Loadable(lazy(() => import('views/ui/Button')));
const UiColor = Loadable(lazy(() => import('views/ui/Color')));
const UiDialog = Loadable(lazy(() => import('views/ui/Dialog')));
const UiTypography = Loadable(lazy(() => import('views/ui/Typography')));
const UiIcon = Loadable(lazy(() => import('views/ui/Icon')));

const Acompanhamento = Loadable(lazy(() => import('views/projeto/Acompanhamento')));

const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'ui',
            children: [
                {
                    path: 'alert',
                    element: <UiAlert />
                }
            ]
        },
        {
            path: 'ui',
            children: [
                {
                    path: 'button',
                    element: <UiButton />
                }
            ]
        },
        {
            path: 'ui',
            children: [
                {
                    path: 'color',
                    element: <UiColor />
                }
            ]
        },
        {
            path: 'ui',
            children: [
                {
                    path: 'dialog',
                    element: <UiDialog />
                }
            ]
        },
        {
            path: 'ui',
            children: [
                {
                    path: 'icon',
                    element: <UiIcon />
                }
            ]
        },
        {
            path: 'ui',
            children: [
                {
                    path: 'typography',
                    element: <UiTypography />
                }
            ]
        },
        {
            path: 'projeto',
            children: [
                {
                    path: 'acompanhamento',
                    element: <Acompanhamento />
                }
            ]
        },
        {
            path: 'projeto',
            children: [
                {
                    path: 'parametros',
                    element: <Acompanhamento />
                }
            ]
        },
        {
            path: 'projeto',
            children: [
                {
                    path: 'marcos',
                    element: <Acompanhamento />
                }
            ]
        },
        {
            path: 'projeto',
            children: [
                {
                    path: 'gis',
                    element: <Acompanhamento />
                }
            ]
        },
        {
            path: 'projeto',
            children: [
                {
                    path: 'producao',
                    element: <Acompanhamento />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'material-icons',
                    element: <UtilsMaterialIcons />
                }
            ]
        }
    ]
};

export default MainRoutes;

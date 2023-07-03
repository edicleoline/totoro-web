import { IconDeviceMobileMessage, IconRouter, IconAccessPoint, IconGitBranch, IconUsers } from '@tabler/icons';

import { IconMap, IconEaseInControlPoint, IconToolsOff, IconChartHistogram, IconChartBubble, IconCircuitResistor } from '@tabler/icons';
import { IconTimelineEvent, IconMap2, IconReportAnalytics } from '@tabler/icons';

import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

const icons = {
    IconRouter,
    IconDeviceMobileMessage,
    IconAccessPoint,
    IconGitBranch,
    IconUsers,
    IconEaseInControlPoint,
    IconMap,
    IconToolsOff,
    IconChartHistogram,
    IconChartBubble,
    IconCircuitResistor,
    IconTimelineEvent,
    IconMap2,
    IconReportAnalytics
};

const playground = {
    id: 'projeto',
    title: 'Projeto',
    // caption: 'Albacora Leste Roncador',
    type: 'group',
    children: [
        {
            id: 'projeto-resumo',
            title: 'Resumo',
            type: 'collapse',
            icon: icons.IconChartBubble,
            children: [
                {
                    id: 'projeto-resumo-acompanhamento',
                    title: 'Acompanhamento',
                    type: 'item',
                    icon: icons.IconChartHistogram,
                    url: '/projeto/acompanhamento',
                    target: false
                },
                {
                    id: 'projeto-resumo-parametros',
                    title: 'Parâmetros',
                    type: 'item',
                    icon: icons.IconToolsOff,
                    url: '/projeto/parametros',
                    target: false
                },
                {
                    id: 'projeto-resumo-marcos',
                    title: 'Marcos',
                    type: 'item',
                    icon: icons.IconEaseInControlPoint,
                    url: '/projeto/marcos',
                    target: false
                },
                {
                    id: 'projeto-resumo-gis',
                    title: 'GIS-Sísmica',
                    type: 'item',
                    icon: icons.IconMap,
                    url: '/projeto/gis',
                    target: false
                }
            ]
        },
        {
            id: 'producao',
            title: 'Produção',
            type: 'item',
            url: '/projeto/producao',
            icon: icons.IconCircuitResistor,
            breadcrumbs: false,
            badge: '3'
        },
        {
            id: 'tempos',
            title: 'Tempos',
            type: 'item',
            url: '/sms',
            icon: icons.IconTimelineEvent,
            breadcrumbs: false
        },
        {
            id: 'mapas',
            title: 'Mapas',
            type: 'item',
            url: '/sms',
            icon: icons.IconMap2,
            breadcrumbs: false
        },
        {
            id: 'relatorios',
            title: 'Relatórios',
            type: 'item',
            url: '/sms',
            icon: icons.IconReportAnalytics,
            breadcrumbs: false
        }
    ]
};

export default playground;

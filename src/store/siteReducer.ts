import * as types from './actions/types';
import { DEFAULT_LOCALE, Lang } from '../i18n/index';

export interface SideNavigation {
    open: boolean;
    openedMenuItemId: string;
}

export interface SiteState {
    lang: Lang;
    sideNavigation: SideNavigation;
}

export const initialState: SiteState = {
    lang: DEFAULT_LOCALE,
    sideNavigation: {
        open: true,
        openedMenuItemId: 'default'
    }
};

const siteReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.SET_LANG:
            return {
                ...state,
                lang: action.lang
            };
        case types.SET_SIDE_NAVIGATION_OPEN:
            return {
                ...state,
                sideNavigation: {
                    ...state.sideNavigation,
                    open: action.open
                }
            };
        case types.SET_SIDE_NAVIGATION_OPENED_MENU_ITEM_ID:
            return {
                ...state,
                sideNavigation: {
                    ...state.sideNavigation,
                    openedMenuItemId: action.id
                }
            };
        default:
            return state;
    }
};

export default siteReducer;

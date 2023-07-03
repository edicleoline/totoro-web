import { SET_SIDE_NAVIGATION_OPENED_MENU_ITEM_ID } from './types';

const setSideNavigationOpenedMenuItemId = (id: string) => {
    return {
        type: SET_SIDE_NAVIGATION_OPENED_MENU_ITEM_ID,
        id: id
    };
};

export default setSideNavigationOpenedMenuItemId;

import { SET_SIDE_NAVIGATION_OPEN } from './types';

const setSideNavigationOpen = (open: boolean) => {
    return {
        type: SET_SIDE_NAVIGATION_OPEN,
        open: open
    };
};

export default setSideNavigationOpen;

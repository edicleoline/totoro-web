import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface NavigationScrollProps {
    children?: React.ReactNode;
}

const NavigationScroll = (props: NavigationScrollProps) => {
    const location = useLocation();
    const { pathname } = location;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [pathname]);

    return props.children || null;
};

export default NavigationScroll;

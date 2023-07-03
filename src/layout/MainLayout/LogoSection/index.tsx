import { Link } from 'react-router-dom';
import { ButtonBase } from '@mui/material';
import config from 'config';
import Logo from 'ui-component/Logo';
import { useAppDispatch } from 'hooks/useAppDispatch';
import setSideNavigationOpen from 'store/actions/setSideNavigationOpen';

const LogoSection = () => {
    // const defaultId = useSelector((state) => state.customization.defaultId);
    const defaultId = 'default';
    const dispatch = useAppDispatch();

    const handleButtonClick = () => {
        dispatch(setSideNavigationOpen(true));
    };

    return (
        <ButtonBase disableRipple onClick={() => handleButtonClick} component={Link} to={config.defaultPath}>
            <Logo />
        </ButtonBase>
    );
};

export default LogoSection;

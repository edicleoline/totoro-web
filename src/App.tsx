import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import Routes from 'routes';
import { themes } from 'themes';
import NavigationScroll from 'layout/NavigationScroll';

const App = () => {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(false)}>
                <CssBaseline />
                <NavigationScroll>
                    <Routes />
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;

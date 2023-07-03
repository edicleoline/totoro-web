import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from 'serviceWorker';
import App from 'App';
import { store } from 'store';
import 'assets/scss/style.scss';
import config from './config';
import { IntlProvider } from 'react-intl';
import { DEFAULT_LOCALE, messages } from 'i18n';
import { SnackbarProvider } from 'notistack';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        <BrowserRouter basename={config.basename}>
            <IntlProvider locale={DEFAULT_LOCALE} messages={messages[DEFAULT_LOCALE]}>
                <SnackbarProvider preventDuplicate anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                    <App />
                </SnackbarProvider>
            </IntlProvider>
        </BrowserRouter>
    </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

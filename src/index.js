import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
//material UI
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
//import meta image
import './assets/images/metaImage.jpg';
// required for babel polyfills
import 'regenerator-runtime/runtime';
//store configuration
import configureStore from './js/store/configureStore';
//constants
import { themeOptions } from './js/constants/AppConstants';
//root component
import LangRouter from './js/routing/LangRouter';
//styles
import './scss/styles.scss';
//translations
import { setTranslations, setDefaultLanguage } from 'react-switch-lang';
import en from './js/translations/en';
import ar from './js/translations/ar';

setTranslations({ en, ar });
setDefaultLanguage('en');

const store = configureStore(),
	theme = createMuiTheme(themeOptions);

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BrowserRouter>
				<LangRouter />
			</BrowserRouter>
		</ThemeProvider>
	</Provider>,
	document.getElementById('root')
);

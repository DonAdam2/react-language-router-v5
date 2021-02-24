import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
//import meta image
import './assets/images/metaImage.jpg';
// required for babel polyfills
import 'regenerator-runtime/runtime';
//store configuration
import configureStore from './js/store/configureStore';
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

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<LangRouter />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

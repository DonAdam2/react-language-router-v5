import React, { createContext, useEffect, useState } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
//translation
import { setLanguage, translate } from 'react-switch-lang';
//managers
import LocalStorageManager from '../managers/LocalStorageManger';
//urls
import { getNeedHelpPageUrl } from './routingConstants/AppUrls';
//constants
import { localStorageKeys } from '../constants/AppConstants';
//component
import App from '../../App';
import NotFoundPage from '../containers/pages/NotFoundPage';

export const LocaleContext = createContext({
	locale: '',
	setLocale: () => {},
});

const LangRouter = ({ location: { pathname, search, hash }, history }) => {
	const availableLocales = ['en-kw', 'ar-kw'],
		defaultLocale = 'en-kw',
		[locale, setLocale] = useState(defaultLocale);

	useEffect(() => {
		const currentLocale = pathname.substring(1, 6).toLowerCase();

		if (availableLocales.includes(currentLocale)) {
			updateLocale(currentLocale);
		} else if (pathname === '/') {
			updateLocale(defaultLocale);
		}
	}, []);

	useEffect(() => {
		const lang = locale.substring(0, 2).toLowerCase();
		setLanguageHandler(lang);
	}, [locale]);

	const setLanguageHandler = (lang) => {
		if (locale.includes(lang)) {
			setLanguage(lang);
			LocalStorageManager.setItem(localStorageKeys.language, lang);
		}
	};

	const updateLocale = (newLocale) => {
		const newPath = pathname.replace(locale, newLocale);
		if (pathname !== '/') {
			history.push(`${newPath}${hash}${search}`);
		}
		setLocale(newLocale);
	};

	return (
		<LocaleContext.Provider value={{ locale, setLocale: updateLocale }}>
			<Switch>
				<Route
					path="/"
					exact
					render={(propRouter) => {
						return <Redirect to={getNeedHelpPageUrl(locale)} />;
					}}
				/>
				<Route path="/en-kw" render={(propsRouter) => <App {...propsRouter} />} />
				<Route path="/ar-kw" render={(propsRouter) => <App {...propsRouter} />} />
				<Route path="*" render={(propsRouter) => <NotFoundPage {...propsRouter} />} />
			</Switch>
		</LocaleContext.Provider>
	);
};

export default withRouter(translate(LangRouter));

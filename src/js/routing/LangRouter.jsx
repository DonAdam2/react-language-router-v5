import React, { useEffect, useState } from 'react';
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

const LangRouter = (props) => {
	const availableLocales = ['en-kw', 'ar-kw'],
		defaultLocale = 'en-kw',
		[locale, setLocale] = useState(defaultLocale);

	useEffect(() => {
		const currentLocale = props.location.pathname.substring(1, 6);

		if (availableLocales.includes(currentLocale)) {
			updateLocale(currentLocale);
		} else if (props.location.pathname === '/') {
			updateLocale(defaultLocale);
			console.log('redirect');
		}
	}, []);

	useEffect(() => {
		const lang = locale.substring(0, 2);
		setLanguageHandler(lang);
	}, [locale]);

	const setLanguageHandler = (lang) => {
		if (locale.includes(lang)) {
			setLanguage(lang);
			LocalStorageManager.setItem(localStorageKeys.language, lang);
		}
	};

	const updateLocale = (newLocale) => {
		const newPath = props.location.pathname.replace(locale, newLocale);
		if (props.location.pathname !== '/') {
			props.history.push(newPath);
		}
		setLocale(newLocale);
	};

	return (
		<Switch>
			<Route
				path="/"
				exact
				render={(propRouter) => {
					return <Redirect to={getNeedHelpPageUrl(locale)} />;
				}}
			/>
			<Route
				path="/en-kw"
				render={(propsRouter) => <App {...propsRouter} locale={locale} setLocale={updateLocale} />}
			/>
			<Route
				path="/ar-kw"
				render={(propsRouter) => <App {...propsRouter} locale={locale} setLocale={updateLocale} />}
			/>
			<Route
				path="*"
				render={(propsRouter) => (
					<NotFoundPage {...propsRouter} locale={locale} setLocale={updateLocale} />
				)}
			/>
		</Switch>
	);
};

export default withRouter(translate(LangRouter));

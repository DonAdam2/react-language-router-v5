import React, { useEffect, useState } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
//translation
import { setLanguage, translate } from 'react-switch-lang';
//managers
// import LocalStorageManager from '../managers/LocalStorageManger';
//urls
import { getNeedHelpPageUrl } from './routingConstants/AppUrls';
//component
import App from '../../App';
import NotFoundPage from '../containers/pages/NotFoundPage';

const LangRouter = (props) => {
	const [locale, setLocale] = useState('en-kw');

	useEffect(() => {
		const langCountry = props.location.pathname.substring(1, 6);
		if (langCountry === 'en-kw' || langCountry === 'ar-kw') {
			setLocale(langCountry);
		}
	}, []);

	useEffect(() => {
		const lang = props.location.pathname.substring(1, 3);
		if (lang === 'en' || lang === 'ar') {
			setLanguage(lang);
		}
	}, [locale]);

	const updateLocale = (newLocale) => {
		//use the following line only if you want to store current locale in the locale storage
		// LocalStorageManager.setItem('locale', newLocale);
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

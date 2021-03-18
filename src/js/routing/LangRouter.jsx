import React, { createContext, useEffect, useState } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
//translation
import { setLanguage, translate } from 'react-switch-lang';
//urls
import { getNeedHelpPageUrl } from './routingConstants/AppUrls';
//container
import App from '../../App';
import NotFoundPage from '../containers/pages/NotFoundPage';
//component
import LoadingIcon from '../components/UI/LoadingIcon';

export const LocaleContext = createContext({
	locale: '',
	setLocale: () => {},
});

const LangRouter = ({ location: { pathname, search, hash }, history }) => {
	const availableLocales = ['en-kw', 'ar-kw'],
		defaultLocale = 'en-kw',
		pathnameLocale = pathname.substring(1, 6).toLowerCase(),
		[locale, setLocale] = useState(defaultLocale);

	useEffect(() => {
		if (availableLocales.includes(pathnameLocale)) {
			updateLocale(pathnameLocale);
		} else if (pathname === '/') {
			updateLocale(defaultLocale);
		}
	}, []);

	useEffect(() => {
		let lang = defaultLocale.substring(0, 2);

		if (availableLocales.includes(pathnameLocale)) {
			lang = pathnameLocale.substring(0, 2).toLowerCase();
			setLanguageHandler(lang);
		} else if (pathname === '/') {
			setLanguageHandler(lang);
		}
	}, [locale]);

	const setLanguageHandler = (lang) => {
		setLanguage(lang);
	};

	const updateLocale = (newLocale) => {
		const newPath = pathname.replace(locale, newLocale);
		if (pathname !== '/') {
			history.push(`${newPath}${hash}${search}`);
		}
		setLocale(newLocale);
	};

	if (pathnameLocale !== locale && availableLocales.includes(pathnameLocale)) {
		return (
			<div className="loader-wrapper">
				<LoadingIcon />
			</div>
		);
	}

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
				{availableLocales.map((el, i) => (
					<Route key={i} path={`/${el}`} render={(propsRouter) => <App {...propsRouter} />} />
				))}
				<Route path="*" render={(propsRouter) => <NotFoundPage {...propsRouter} />} />
			</Switch>
		</LocaleContext.Provider>
	);
};

export default withRouter(translate(LangRouter));

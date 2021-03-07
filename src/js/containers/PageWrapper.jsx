import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
//routes
import { routes } from '../routing/routingConstants/RoutesConfig';
//managers
import LocalStorageManager from '../managers/LocalStorageManger';
//not found page
import NotFoundPage from './pages/NotFoundPage';
//constants
import { localStorageKeys } from '../constants/AppConstants';
import Header from './Header';
//routing
import { LocaleContext } from '../routing/LangRouter';

const PageWrapper = () => {
	const localeContext = useContext(LocaleContext);

	return (
		<div
			className="container"
			dir={LocalStorageManager.getItem(localStorageKeys.language) === 'ar' ? 'rtl' : 'ltr'}
		>
			<Header />
			<Switch>
				{routes.map((el, i) => (
					<Route
						path={el.path(localeContext.locale)}
						render={(propRouter) => <el.Component {...propRouter} />}
						key={i}
						exact={el.exact}
					/>
				))}
				<Route path="*" render={(propsRouter) => <NotFoundPage {...propsRouter} />} />
			</Switch>
		</div>
	);
};

export default PageWrapper;

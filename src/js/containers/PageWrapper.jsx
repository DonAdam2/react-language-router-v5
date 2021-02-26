import React from 'react';
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

const PageWrapper = (props) => (
	<div
		className="container"
		dir={LocalStorageManager.getItem(localStorageKeys.language) === 'ar' ? 'rtl' : 'ltr'}
	>
		<Header {...props} />
		<Switch>
			{routes.map((el, i) => (
				<Route
					path={el.path(props.locale)}
					render={(propRouter) => <el.Component {...propRouter} {...props} />}
					key={i}
					exact={el.exact}
				/>
			))}
			<Route path="*" render={(propsRouter) => <NotFoundPage {...propsRouter} {...props} />} />
		</Switch>
	</div>
);

export default PageWrapper;

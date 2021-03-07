import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
//error boundary
import { ErrorBoundary } from 'react-error-boundary';
//error boundary fallback
import ErrorBoundaryFallback from './js/generic/ErrorBoundaryFallback';
//managers
import LocalStorageManager from './js/managers/LocalStorageManger';
//routing
import { LocaleContext } from './js/routing/LangRouter';
import { routes } from './js/routing/routingConstants/RoutesConfig';
//constants
import { localStorageKeys } from './js/constants/AppConstants';
//containers
import Header from './js/containers/Header';
import NotFoundPage from './js/containers/pages/NotFoundPage';

const App = () => {
	const localeContext = useContext(LocaleContext);

	return (
		<ErrorBoundary
			FallbackComponent={ErrorBoundaryFallback}
			onReset={() => {
				//Reset the state of your app so the error doesn't happen again
				console.log('Try again clicked');
			}}
		>
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
		</ErrorBoundary>
	);
};

export default hot(App);

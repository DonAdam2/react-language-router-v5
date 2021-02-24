import React, { lazy, Suspense } from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, Switch } from 'react-router-dom';
//error boundary
import { ErrorBoundary } from 'react-error-boundary';
//error boundary fallback
import ErrorBoundaryFallback from './js/generic/ErrorBoundaryFallback';
//material UI
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
//routes
import { routes } from './js/routing/routingConstants/RoutesConfig';
//constants
import { themeOptions } from './js/constants/AppConstants';
//components
import LoadingIcon from './js/components/UI/LoadingIcon';
import NotFoundPage from './js/containers/pages/NotFoundPage';
// const TestComponent = lazy(() => import('./js/components/TestComponent'));

const theme = createMuiTheme(themeOptions);

const App = (props) => (
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<Suspense
			fallback={
				<div className="loader-wrapper">
					<LoadingIcon />
				</div>
			}
		>
			<ErrorBoundary
				FallbackComponent={ErrorBoundaryFallback}
				onReset={() => {
					//Reset the state of your app so the error doesn't happen again
					console.log('Try again clicked');
				}}
			>
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
			</ErrorBoundary>
		</Suspense>
	</ThemeProvider>
);

export default hot(App);

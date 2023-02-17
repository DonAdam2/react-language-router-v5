import { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
//error boundary
import { ErrorBoundary } from 'react-error-boundary';
//error boundary fallback
import ErrorBoundaryFallback from './js/generic/ErrorBoundaryFallback';
//routing
import { LocaleContext } from './js/routing/LangRouter';
import { privateRoutes, publicRoutes } from './js/routing/routingConstants/RoutesConfig';
//containers
import Header from './js/containers/Header';
import NotFoundPage from './js/containers/pages/NotFoundPage';
import PublicRouteGuard from '@/js/routing/guards/PublicRouteGuard';
import PrivateRouteGuard from '@/js/routing/guards/PrivateRouteGuard';
import RestrictedRouteGuard from '@/js/routing/guards/RistrictedRouteGuard';

const App = () => {
  const { locale } = useContext(LocaleContext);

  return (
    <ErrorBoundary
      FallbackComponent={ErrorBoundaryFallback}
      onReset={() => {
        //Reset the state of your app so the error doesn't happen again
        console.log('Try again clicked');
      }}
    >
      <div className="container">
        <Header />
        <Switch>
          {publicRoutes.map((el, i) => (
            <PublicRouteGuard restricted={el.restricted} path={el.path(locale)} key={i}>
              {el.component}
            </PublicRouteGuard>
          ))}
          {privateRoutes.map((el, i) => {
            if (el.permissions) {
              return (
                <RestrictedRouteGuard
                  key={i}
                  path={el.path(locale)}
                  requiredPermissions={el.permissions}
                >
                  {el.component}
                </RestrictedRouteGuard>
              );
            }
            return (
              <PrivateRouteGuard key={i} exact={el.exact} path={el.path(locale)}>
                {el.component}
              </PrivateRouteGuard>
            );
          })}
          <Route path="*" render={(propsRouter) => <NotFoundPage {...propsRouter} />} />
        </Switch>
      </div>
    </ErrorBoundary>
  );
};

export default App;

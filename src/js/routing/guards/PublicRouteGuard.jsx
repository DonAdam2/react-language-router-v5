import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
//contexts
import { LocaleContext } from '@/js/routing/LangRouter';
//constants
import { isAuthenticated } from '@/js/constants/Helpers';
import { getNeedHelpPageUrl } from '@/js/routing/routingConstants/AppUrls';

const PublicRouteGuard = ({ children, restricted, redirect, ...rest }) => {
  const { locale } = useContext(LocaleContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (redirect) {
          return <Redirect to={{ pathname: redirect, state: { from: props.location } }} />;
        } else if (isAuthenticated() && restricted) {
          return (
            <Redirect
              to={{ pathname: getNeedHelpPageUrl(locale), state: { from: props.location } }}
            />
          );
        }
        return children;
      }}
    />
  );
};

export default PublicRouteGuard;

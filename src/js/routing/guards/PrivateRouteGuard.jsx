import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
//contexts
import { LocaleContext } from '@/js/routing/LangRouter';
//constants
import { isAuthenticated } from '@/js/constants/Helpers';
import { getLoginPageUrl } from '@/js/routing/routingConstants/AppUrls';

const PrivateRouteGuard = ({ children, ...rest }) => {
  const { locale } = useContext(LocaleContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated()) {
          return children;
        }
        return (
          <Redirect to={{ pathname: getLoginPageUrl(locale), state: { from: props.location } }} />
        );
      }}
    />
  );
};

export default PrivateRouteGuard;

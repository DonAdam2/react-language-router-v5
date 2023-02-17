import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
//contexts
import { LocaleContext } from '@/js/routing/LangRouter';
//constants
import { isAuthenticated } from '@/js/constants/Helpers';
import { getLoginPageUrl } from '@/js/routing/routingConstants/AppUrls';
//components
import RestrictedWrapper from '@/js/routing/routingComponents/RestrictedWrapper';
import PermissionsCannotAccess from '../routingComponents/PermissionsCannotAccess';

const RestrictedRouteGuard = ({ children, requiredPermissions, ...rest }) => {
  const { locale } = useContext(LocaleContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated()) {
          console.log('yellow');
          return (
            <RestrictedWrapper
              requiredPermissions={requiredPermissions}
              notPermittedComponent={
                <PermissionsCannotAccess requiredPermissions={requiredPermissions} />
              }
            >
              {children}
            </RestrictedWrapper>
          );
        } else {
          return (
            <Redirect to={{ pathname: getLoginPageUrl(locale), state: { from: props.location } }} />
          );
        }
      }}
    />
  );
};

export default RestrictedRouteGuard;

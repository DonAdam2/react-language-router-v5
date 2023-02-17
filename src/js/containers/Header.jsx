import { useContext, useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
//routes
import {
  headerAuthRoutes,
  headerPrivateRoutes,
  headerPublicRoutes,
} from '../routing/routingConstants/RoutesConfig';
//routing
import { LocaleContext } from '../routing/LangRouter';
import RestrictedSection from '@/js/routing/routingComponents/RestrictedSection';
import LocalStorageManager from '@/js/managers/LocalStorageManger';
import { LocalStorageKeys } from '@/js/constants/Constants';
import { getLoginPageUrl } from '@/js/routing/routingConstants/AppUrls';
import { isAuthenticated } from '@/js/constants/Helpers';

const Header = () => {
  const { t } = useTranslation(),
    history = useHistory(),
    { locale, setLocale } = useContext(LocaleContext),
    [lang, setLang] = useState(locale);

  useEffect(() => {
    setLang(locale);
  }, [locale]);

  const changeLanguageHandler = ({ target: { value } }) => {
    setLocale(value);
    setLang(value);
  };

  const renderLink = ({ to, label, exact, key, permissions }) => {
    const link = (
      <NavLink key={permissions ? undefined : key} to={to} exact={exact}>
        {label}
      </NavLink>
    );
    if (permissions) {
      return (
        <RestrictedSection key={key} requiredPermissions={permissions}>
          {link}
        </RestrictedSection>
      );
    }

    return link;
  };

  const renderLinks = (list) => {
    return list.map((el, i) =>
      renderLink({ to: el.path(locale), label: el.label, key: i, permissions: el.permissions })
    );
  };

  const logoutHandler = () => {
    LocalStorageManager.removeItem(LocalStorageKeys.TOKEN);
    history.push(getLoginPageUrl(locale), { replace: true });
  };

  return (
    <div className="header-wrapper" dir="ltr">
      <div>
        {isAuthenticated() ? renderLinks(headerPrivateRoutes(t)) : renderLinks(headerAuthRoutes(t))}
        {renderLinks(headerPublicRoutes(t))}
      </div>
      <div>
        {isAuthenticated() && (
          <button onClick={logoutHandler} style={{ marginInlineEnd: 10 }}>
            {t('header.logout')}
          </button>
        )}
        <select onChange={changeLanguageHandler} value={lang}>
          <option value="en">EN</option>
          <option value="ar">AR</option>
        </select>
      </div>
    </div>
  );
};

export default Header;

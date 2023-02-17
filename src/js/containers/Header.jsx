import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
//routes
import { routes } from '../routing/routingConstants/RoutesConfig';
//routing
import { LocaleContext } from '../routing/LangRouter';

const Header = () => {
  const { t } = useTranslation(),
    { locale, setLocale } = useContext(LocaleContext),
    currentLanguage = locale.substring(0, 2),
    [lang, setLang] = useState(currentLanguage);

  useEffect(() => {
    setLang(locale);
  }, [locale]);

  const changeLanguageHandler = ({ target: { value } }) => {
    setLocale(value);
    setLang(value);
  };

  return (
    <div className="header-wrapper" dir="ltr">
      {routes(t).map((el, i) => (
        <NavLink key={i} to={el.path(locale)} exact={el.exact}>
          {el.label}
        </NavLink>
      ))}
      <select onChange={changeLanguageHandler} value={lang}>
        <option value="en">EN</option>
        <option value="ar">AR</option>
      </select>
    </div>
  );
};

export default Header;

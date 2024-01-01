import { createContext, useEffect, useState, useRef } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
//routing
import { getNeedHelpPageUrl } from './routingConstants/AppUrls';
import { availableLocales, getDefaultLanguage } from '@/js/routing/routingConstants/RoutingHelpers';
//container
import App from '../../App';
import NotFoundPage from '../containers/pages/NotFoundPage';
//component
import LoadingIcon from '../components/UI/LoadingIcon';

export const LocaleContext = createContext({
  locale: '',
  // eslint-disable-next-line
  setLocale: (newLocale) => {},
});

const LangRouter = ({ location: { pathname, search, hash }, history }) => {
  const { i18n } = useTranslation(),
    defaultLocale = getDefaultLanguage({ fallbackLocal: 'en' }),
    pathnameLocale = pathname.substring(1, 3).toLowerCase(),
    [locale, setLocale] = useState(defaultLocale),
    loaderTimerRef = useRef(null),
    [isLoading, setIsLoading] = useState(true);
  //set body direction
  document.body.dir = i18n.dir(i18n.language);

  useEffect(() => {
    loaderTimerRef.current = setTimeout(() => {
      setIsLoading(false);
      clearTimeout(loaderTimerRef.current);
    }, 300);
  }, []);

  useEffect(() => {
    if (availableLocales.includes(pathnameLocale)) {
      updateLocale(pathnameLocale);
    } else if (pathname === '/') {
      updateLocale(defaultLocale);
    }
    //eslint-disable-next-line
  }, [pathname]);

  useEffect(() => {
    let lang = defaultLocale;

    if (availableLocales.includes(pathnameLocale)) {
      lang = pathnameLocale;
      setLanguageHandler(lang);
    } else if (pathname === '/') {
      setLanguageHandler(lang);
    }
    //eslint-disable-next-line
  }, [locale]);

  const setLanguageHandler = (lang) => {
    //set language attribute on HTML element
    document.documentElement.setAttribute('lang', lang);

    (async () => {
      if (lang === 'en') {
        await i18n.changeLanguage('en-US');
      } else {
        await i18n.changeLanguage('ar-SA');
      }
    })();
  };

  const updateLocale = (newLocale) => {
    const newPath = `/${newLocale}${pathname.substring(3)}`;

    if (locale !== newLocale) {
      if (newPath === `/${newLocale}/` || newPath === `/${newLocale}` || pathname === '/') {
        history.push(getNeedHelpPageUrl(newLocale));
      } else {
        history.push(`${newPath}${hash}${search}`);
      }
      setLocale(newLocale);
    } else if (newPath === `/${newLocale}/` || newPath === `/${newLocale}` || pathname === '/') {
      history.push(getNeedHelpPageUrl(newLocale));
      /*if (isAuthenticated()) {
        history.push(getNeedHelpPageUrl(newLocale));
      } else {
        history.push(getLoginPageUrl(newLocale));
      }*/
    }
  };

  if (isLoading) {
    return (
      <div className="loader-wrapper">
        <LoadingIcon />
      </div>
    );
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale: updateLocale }}>
      <Switch>
        <Route path="/" exact render={() => <Redirect to={getNeedHelpPageUrl(locale)} />} />
        {availableLocales.map((el, i) => (
          <Route key={i} path={`/${el}`} render={(propsRouter) => <App {...propsRouter} />} />
        ))}
        <Route path="*" render={(propsRouter) => <NotFoundPage {...propsRouter} />} />
      </Switch>
    </LocaleContext.Provider>
  );
};

export default withRouter(LangRouter);

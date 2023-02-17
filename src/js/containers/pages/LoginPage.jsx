import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { LocaleContext } from '@/js/routing/LangRouter';
import LocalStorageManager from '@/js/managers/LocalStorageManger';
import { LocalStorageKeys } from '@/js/constants/Constants';
import { getNeedHelpPageUrl } from '@/js/routing/routingConstants/AppUrls';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const { t } = useTranslation(),
    history = useHistory(),
    { locale } = useContext(LocaleContext);

  const loginHandler = () => {
    LocalStorageManager.setItem(LocalStorageKeys.TOKEN, 'testToken');
    history.push(getNeedHelpPageUrl(locale), { replace: true });
  };

  return (
    <div>
      <p>{t('loginPage.title')}</p>
      <button onClick={loginHandler}>Sign in</button>
    </div>
  );
};

export default LoginPage;

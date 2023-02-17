import { useTranslation } from 'react-i18next';

const NeedHelpPage = () => {
  const { t } = useTranslation();

  return <h1>{t('NeedHelp.title')}</h1>;
};

export default NeedHelpPage;

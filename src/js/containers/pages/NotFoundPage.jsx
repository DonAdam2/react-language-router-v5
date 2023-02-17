import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return <h1>{t('notFound.title')}</h1>;
};

export default NotFoundPage;

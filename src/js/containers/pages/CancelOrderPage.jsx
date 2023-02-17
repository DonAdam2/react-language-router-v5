import { useTranslation } from 'react-i18next';

const CancelOrderPage = () => {
  const { t } = useTranslation();

  return <h1>{t('cancelOrder.title')}</h1>;
};

export default CancelOrderPage;

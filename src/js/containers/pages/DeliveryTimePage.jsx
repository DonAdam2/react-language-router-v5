import { useTranslation } from 'react-i18next';

const DeliveryTimePage = () => {
  const { t } = useTranslation();

  return <h1>{t('deliveryTime.title')}</h1>;
};

export default DeliveryTimePage;

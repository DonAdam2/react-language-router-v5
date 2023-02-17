import { useTranslation } from 'react-i18next';

const AddDeliveryAddressPage = () => {
  const { t } = useTranslation();

  return <h1>{t('addDeliveryAddress.title')}</h1>;
};

export default AddDeliveryAddressPage;

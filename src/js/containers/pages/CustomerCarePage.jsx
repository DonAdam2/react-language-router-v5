import { useTranslation } from 'react-i18next';

const CustomerCarePage = () => {
  const { t } = useTranslation();

  return <h1>{t('customerCare.title')}</h1>;
};

export default CustomerCarePage;

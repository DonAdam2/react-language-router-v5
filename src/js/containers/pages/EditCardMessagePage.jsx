import { useTranslation } from 'react-i18next';

const EditCardMessagePage = () => {
  const { t } = useTranslation();

  return <h1>{t('editCardMessage.title')}</h1>;
};

export default EditCardMessagePage;

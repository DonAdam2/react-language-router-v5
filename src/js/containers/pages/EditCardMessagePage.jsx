import { translate } from 'react-switch-lang';

const EditCardMessagePage = ({ t }) => {
  return <h1>{t('editCardMessage.title')}</h1>;
};

export default translate(EditCardMessagePage);

import { translate } from 'react-switch-lang';

const NotFoundPage = ({ t }) => {
  return <h1>{t('notFound.title')}</h1>;
};

export default translate(NotFoundPage);

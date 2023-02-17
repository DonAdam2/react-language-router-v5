import { translate } from 'react-switch-lang';

const CustomerCarePage = ({ t }) => {
  return <h1>{t('customerCare.title')}</h1>;
};

export default translate(CustomerCarePage);

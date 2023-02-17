import { translate } from 'react-switch-lang';

const CancelOrderPage = ({ t }) => {
  return <h1>{t('cancelOrder.title')}</h1>;
};

export default translate(CancelOrderPage);

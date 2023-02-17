//translate
import { translate } from 'react-switch-lang';

const AddDeliveryAddressPage = ({ t }) => {
  return <h1>{t('addDeliveryAddress.title')}</h1>;
};

export default translate(AddDeliveryAddressPage);

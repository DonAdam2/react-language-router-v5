import { useContext } from 'react';
import { Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
//routing
import { LocaleContext } from '@/js/routing/LangRouter';
import { getAddDeliveryAddressPageUrl } from '@/js/routing/routingConstants/AppUrls';
//pages
import AddDeliveryAddressPage from './AddDeliveryAddressPage';

const DeliveryAddressPage = () => {
  const { t } = useTranslation(),
    localeContext = useContext(LocaleContext);

  return (
    <div>
      <h1>{t('deliveryAddress.title')}</h1>
      <Link to={getAddDeliveryAddressPageUrl(localeContext.locale)}>
        {t('deliveryAddress.addDeliveryAddress')}
      </Link>
      <Route
        path={getAddDeliveryAddressPageUrl(localeContext.locale)}
        component={AddDeliveryAddressPage}
      />
    </div>
  );
};

export default DeliveryAddressPage;

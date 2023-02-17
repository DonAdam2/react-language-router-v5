import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
//routing
import { LocaleContext } from '@/js/routing/LangRouter';
import { getAddDeliveryAddressPageUrl } from '@/js/routing/routingConstants/AppUrls';
//pages
import { deliveryAddressRoutes } from '@/js/routing/routingConstants/RoutesConfig';
import PrivateRouteGuard from '@/js/routing/guards/PrivateRouteGuard';

const DeliveryAddressPage = () => {
  const { t } = useTranslation(),
    { locale } = useContext(LocaleContext);

  return (
    <div>
      <h1>{t('deliveryAddress.title')}</h1>
      <Link to={getAddDeliveryAddressPageUrl(locale)}>
        {t('deliveryAddress.addDeliveryAddress')}
      </Link>
      {deliveryAddressRoutes.map((el, i) => (
        <PrivateRouteGuard exact={el.exact} path={el.path(locale)} key={i}>
          {el.Component}
        </PrivateRouteGuard>
      ))}
    </div>
  );
};

export default DeliveryAddressPage;

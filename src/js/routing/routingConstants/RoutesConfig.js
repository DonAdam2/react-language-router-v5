//urls
import {
  getCancelOrderPageUrl,
  getCustomerCarePageUrl,
  getDeliveryAddressPageUrl,
  getDeliveryTimePageUrl,
  getEditCardMessagePageUrl,
  getNeedHelpPageUrl,
} from './AppUrls';
//pages
import NeedHelpPage from '../../containers/pages/NeedHelpPage';
import DeliveryTimePage from '../../containers/pages/DeliveryTimePage';
import DeliveryAddressPage from '../../containers/pages/DeliveryAddressPage';
import EditCardMessagePage from '../../containers/pages/EditCardMessagePage';
import CustomerCarePage from '../../containers/pages/CustomerCarePage';
import CancelOrderPage from '../../containers/pages/CancelOrderPage';

export const routes = (t) => [
  {
    path: (locale) => getNeedHelpPageUrl(locale),
    Component: NeedHelpPage,
    exact: true,
    label: t('header.needHelp'),
  },
  {
    path: (locale) => getDeliveryTimePageUrl(locale),
    Component: DeliveryTimePage,
    label: t('header.deliveryTime'),
  },
  {
    path: (locale) => getDeliveryAddressPageUrl(locale),
    Component: DeliveryAddressPage,
    label: t('header.deliveryAddress'),
  },
  {
    path: (locale) => getEditCardMessagePageUrl(locale),
    Component: EditCardMessagePage,
    label: t('header.editCard'),
  },
  {
    path: (locale) => getCustomerCarePageUrl(locale),
    Component: CustomerCarePage,
    label: t('header.customerCare'),
  },
  {
    path: (locale) => getCancelOrderPageUrl(locale),
    Component: CancelOrderPage,
    label: t('header.cancelOrder'),
  },
];

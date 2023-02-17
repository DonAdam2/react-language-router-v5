//urls
import {
  getAboutUsPageUrl,
  getAddDeliveryAddressPageUrl,
  getCancelOrderPageUrl,
  getContactUsPageUrl,
  getCustomerCarePageUrl,
  getDeliveryAddressPageUrl,
  getDeliveryTimePageUrl,
  getEditCardMessagePageUrl,
  getLoginPageUrl,
  getNeedHelpPageUrl,
} from './AppUrls';
//pages
import NeedHelpPage from '../../containers/pages/NeedHelpPage';
import DeliveryTimePage from '../../containers/pages/DeliveryTimePage';
import DeliveryAddressPage from '../../containers/pages/DeliveryAddressPage';
import EditCardMessagePage from '../../containers/pages/EditCardMessagePage';
import CustomerCarePage from '../../containers/pages/CustomerCarePage';
import CancelOrderPage from '../../containers/pages/CancelOrderPage';
import LoginPage from '@/js/containers/pages/LoginPage';
import AboutUsPage from '@/js/containers/pages/AboutUsPage';
import ContactUsPage from '@/js/containers/pages/ContactUsPage';
import AddDeliveryAddressPage from '@/js/containers/pages/AddDeliveryAddressPage';

export const publicRoutes = [
  {
    path: (locale) => getLoginPageUrl(locale),
    Component: <LoginPage />,
    restricted: true,
  },
  {
    path: (locale) => getAboutUsPageUrl(locale),
    Component: <AboutUsPage />,
  },
  {
    path: (locale) => getContactUsPageUrl(locale),
    Component: <ContactUsPage />,
  },
];

export const deliveryAddressRoutes = [
  {
    path: (locale) => getAddDeliveryAddressPageUrl(locale),
    Component: <AddDeliveryAddressPage />,
  },
];

export const privateRoutes = [
  {
    path: (locale) => getNeedHelpPageUrl(locale),
    Component: <NeedHelpPage />,
  },
  {
    path: (locale) => getDeliveryTimePageUrl(locale),
    Component: <DeliveryTimePage />,
  },
  {
    path: (locale) => getDeliveryAddressPageUrl(locale),
    Component: <DeliveryAddressPage />,
  },
  {
    path: (locale) => getEditCardMessagePageUrl(locale),
    Component: <EditCardMessagePage />,
  },
  {
    path: (locale) => getCustomerCarePageUrl(locale),
    Component: <CustomerCarePage />,
    permissions: 'customerCare',
  },
  {
    path: (locale) => getCancelOrderPageUrl(locale),
    Component: <CancelOrderPage />,
  },
];

export const headerPublicRoutes = (t) => [
  {
    label: t('header.aboutUs'),
    path: (locale) => getAboutUsPageUrl(locale),
  },
  {
    label: t('header.contactUs'),
    path: (locale) => getContactUsPageUrl(locale),
  },
];

export const headerPrivateRoutes = (t) => [
  {
    label: t('header.needHelp'),
    path: (locale) => getNeedHelpPageUrl(locale),
  },
  {
    label: t('header.deliveryTime'),
    path: (locale) => getDeliveryTimePageUrl(locale),
  },
  {
    label: t('header.deliveryAddress'),
    path: (locale) => getDeliveryAddressPageUrl(locale),
  },
  {
    label: t('header.editCard'),
    path: (locale) => getEditCardMessagePageUrl(locale),
  },
  {
    label: t('header.customerCare'),
    path: (locale) => getCustomerCarePageUrl(locale),
    permissions: 'customerCare',
  },
  {
    path: (locale) => getCancelOrderPageUrl(locale),
    Component: <CancelOrderPage />,
  },
];

export const headerAuthRoutes = (t) => [
  {
    label: t('header.login'),
    path: (locale) => getLoginPageUrl(locale),
  },
];

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

export const routes = [
	{
		path: (locale) => getNeedHelpPageUrl(locale),
		Component: NeedHelpPage,
		exact: true,
	},
	{
		path: (locale) => getDeliveryTimePageUrl(locale),
		Component: DeliveryTimePage,
		exact: true,
	},
	{
		path: (locale) => getDeliveryAddressPageUrl(locale),
		Component: DeliveryAddressPage,
		exact: true,
	},
	{
		path: (locale) => getEditCardMessagePageUrl(locale),
		Component: EditCardMessagePage,
		exact: true,
	},
	{
		path: (locale) => getCustomerCarePageUrl(locale),
		Component: CustomerCarePage,
		exact: true,
	},
	{
		path: (locale) => getCancelOrderPageUrl(locale),
		Component: CancelOrderPage,
		exact: true,
	},
];

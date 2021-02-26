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
		label: 'need help',
	},
	{
		path: (locale) => getDeliveryTimePageUrl(locale),
		Component: DeliveryTimePage,
		exact: true,
		label: 'delivery time',
	},
	{
		path: (locale) => getDeliveryAddressPageUrl(locale),
		Component: DeliveryAddressPage,
		exact: true,
		label: 'delivery address',
	},
	{
		path: (locale) => getEditCardMessagePageUrl(locale),
		Component: EditCardMessagePage,
		exact: true,
		label: 'edit card message',
	},
	{
		path: (locale) => getCustomerCarePageUrl(locale),
		Component: CustomerCarePage,
		exact: true,
		label: 'customer care',
	},
	{
		path: (locale) => getCancelOrderPageUrl(locale),
		Component: CancelOrderPage,
		exact: true,
		label: 'cancel order',
	},
];

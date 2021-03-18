const PAGE_NEED_HELP = '',
	PAGE_DELIVERY_TIME = '/delivery-time',
	PAGE_DELIVERY_ADDRESS = '/delivery-address',
	PAGE_EDIT_CARD_MESSAGE = '/edit-card-message',
	PAGE_CUSTOMER_CARE = '/customer-care',
	PAGE_CANCEL_ORDER = '/cancel-order',
	ADD = '/add';

export const getNeedHelpPageUrl = (locale) => `/${locale}${PAGE_NEED_HELP}`;
export const getDeliveryTimePageUrl = (locale) => `/${locale}${PAGE_DELIVERY_TIME}`;
export const getDeliveryAddressPageUrl = (locale) => `/${locale}${PAGE_DELIVERY_ADDRESS}`;
export const getAddDeliveryAddressPageUrl = (locale) =>
	`${getDeliveryAddressPageUrl(locale)}${ADD}`;
export const getEditCardMessagePageUrl = (locale) => `/${locale}${PAGE_EDIT_CARD_MESSAGE}`;
export const getCustomerCarePageUrl = (locale) => `/${locale}${PAGE_CUSTOMER_CARE}`;
export const getCancelOrderPageUrl = (locale) => `/${locale}${PAGE_CANCEL_ORDER}`;

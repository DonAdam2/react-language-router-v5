import React from 'react';
import { translate } from 'react-switch-lang';

const DeliveryAddressPage = ({ t }) => {
	return <h1>{t('deliveryAddress.title')}</h1>;
};

export default translate(DeliveryAddressPage);

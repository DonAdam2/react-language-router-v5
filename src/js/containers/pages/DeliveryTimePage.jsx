import React from 'react';
import { translate } from 'react-switch-lang';

const DeliveryTimePage = ({ t }) => {
	return <h1>{t('deliveryTime.title')}</h1>;
};

export default translate(DeliveryTimePage);

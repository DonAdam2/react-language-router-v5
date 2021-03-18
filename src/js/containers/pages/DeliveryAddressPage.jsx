import React, { useContext } from 'react';
import { Route, Link } from 'react-router-dom';
//translate
import { translate } from 'react-switch-lang';
//routing
import { LocaleContext } from '../../routing/LangRouter';
import { getAddDeliveryAddressPageUrl } from '../../routing/routingConstants/AppUrls';
//pages
import AddDeliveryAddressPage from './AddDeliveryAddressPage';

const DeliveryAddressPage = ({ t }) => {
	const localeContext = useContext(LocaleContext);

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

export default translate(DeliveryAddressPage);

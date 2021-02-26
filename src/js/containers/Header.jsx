import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
//routes
import { routes } from '../routing/routingConstants/RoutesConfig';
//managers
import LocalStorageManager from '../managers/LocalStorageManger';
//constants
import { localStorageKeys } from '../constants/AppConstants';

const Header = ({ locale, setLocale }) => {
	const [lang, setLang] = useState(LocalStorageManager.getItem(localStorageKeys.language));

	const changeLanguageHandler = ({ target: { value } }) => {
		setLocale(`${value}-kw`);
		setLang(value);
	};

	return (
		<div className="header-wrapper">
			{routes.map((el, i) => (
				<NavLink key={i} to={el.path(locale)} exact={el.exact}>
					{el.label}
				</NavLink>
			))}
			<select onChange={changeLanguageHandler} value={lang}>
				<option value="en">EN</option>
				<option value="ar">AR</option>
			</select>
		</div>
	);
};

Header.propTypes = {
	locale: PropTypes.string.isRequired,
	setLocale: PropTypes.func.isRequired,
};

export default Header;

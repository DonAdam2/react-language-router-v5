import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
//routes
import { routes } from '../routing/routingConstants/RoutesConfig';
//managers
import LocalStorageManager from '../managers/LocalStorageManger';
//constants
import { localStorageKeys } from '../constants/AppConstants';
//routing
import { LocaleContext } from '../routing/LangRouter';

const Header = () => {
	const localeContext = useContext(LocaleContext),
		[lang, setLang] = useState(LocalStorageManager.getItem(localStorageKeys.language));

	const changeLanguageHandler = ({ target: { value } }) => {
		localeContext.setLocale(`${value}-kw`);
		setLang(value);
	};

	return (
		<div className="header-wrapper">
			{routes.map((el, i) => (
				<NavLink key={i} to={el.path(localeContext.locale)} exact={el.exact}>
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

export default Header;

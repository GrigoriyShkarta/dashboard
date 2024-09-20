import { FC, useState } from 'react';
import { SvgCompareIcon, SvgEmployeesIcon, SvgManagersIcon } from '../../assets/icons';
import { NavItem } from '../../assets/const';
import s from './style.module.scss';

const Header: FC = () => {
	const [activeItem, setActiveItem] = useState<NavItem>(NavItem.Managers);

	return (
		<header className={s.header}>
			<div className={s.project}>
				<h1 className={s.project__title}>Dashboard intro title</h1>
				<p className={s.project__text}>Ac vulputate purus semper fusce at. Non dolor in cras.</p>
			</div>

			<nav className={s.menu}>
				<ul className={s.menu__list}>
					<li
						className={`${s.menu__item} ${activeItem === NavItem.Compare && s.menu__active}`}
						onClick={() => setActiveItem(NavItem.Compare)}
					>
						<SvgCompareIcon /> {NavItem.Compare}
					</li>
					<li
						className={`${s.menu__item} ${activeItem === NavItem.Managers && s.menu__active}`}
						onClick={() => setActiveItem(NavItem.Managers)}
					>
						<SvgManagersIcon /> {NavItem.Managers}
					</li>
					<li
						className={`${s.menu__item} ${activeItem === NavItem.Employees && s.menu__active}`}
						onClick={() => setActiveItem(NavItem.Employees)}
					>
						<SvgEmployeesIcon /> {NavItem.Employees}
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;

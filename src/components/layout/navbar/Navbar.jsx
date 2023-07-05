import { useState } from 'react';
//STYLES
import styles from './navbar.module.scss';
//IMAGENES
import logo from '../../../assets/img/logo.png';
//ICONS
import { AiOutlineSearch } from 'react-icons/ai';
import { CiCircleChevDown, CiCircleChevUp } from 'react-icons/ci';
import {
	BsFillPersonFill,
	BsFillHeartFill,
	BsFillCartFill,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [subMenu, setSubMenu] = useState(false);

	const handleSubMenu = () => {
		setSubMenu(!subMenu);
	};

	return (
		<header className={styles.header}>
			<nav className={styles.nav_menu}>
				<div className={styles.menu_intro}>
					{/* LOGO */}
					<div>
						<Link to={'/'}>
							<img
								width={120}
								src={logo}
								alt="logo"
							/>
						</Link>
					</div>
					<div className={styles.search}>
						<input
							type="text"
							placeholder="buscar productos..."
						/>
						<AiOutlineSearch />
					</div>
					<div className={styles.list}>
						<ul className={styles.list_item}>
							<li>
								<a href="#">Phone</a>
							</li>
							<li>+3462-3232323</li>
						</ul>
						<ul className={styles.list_item}>
							<li>
								<a href="#">Email</a>
							</li>
							<li>correo@correo.com</li>
						</ul>
					</div>
				</div>
				<div className={styles.menu_nav}>
					<div
						onMouseUp={handleSubMenu}
						className={styles.sub_menu}
					>
						<ul>
							<li>Shop by Categories</li>
							<li>
								{subMenu ? (
									<CiCircleChevDown fontSize={23} />
								) : (
									<CiCircleChevUp fontSize={23} />
								)}
							</li>
						</ul>

						{subMenu && (
							<div className={styles.sub_menu_list}>
								<ul className={styles.sub_menu_styles}>
									{categories.map(item => (
										<li key={item}>
											<a>{item.nombre}</a>
										</li>
									))}
								</ul>
							</div>
						)}
					</div>

					<div className={styles.menu_list_two}>
						<ul>
							{categories_two.map(link => (
								<Link
									to={link.to}
									key={link.href}
								>
									{link.link}
								</Link>
							))}
						</ul>
					</div>

					<div className={styles.menu_list_drops}>
						<ul>
							<div>
								<BsFillPersonFill />
							</div>
							<div>
								<BsFillHeartFill />
							</div>
							<div>
								<BsFillCartFill />
							</div>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

const categories = [
	{
		nombre: '- Pet Clothing',
	},
	{
		nombre: '- Pet Foodies',
	},
];
const categories_two = [
	{
		link: 'home',
		to: '/',
	},
	{
		link: 'page',
		to: '/',
	},
	{
		link: 'shop',
		to: '/',
	},
	{
		link: 'blog',
		to: '/',
	},
	{
		link: 'contacto',
		to: '/',
	},
	{
		link: 'offertas',
		to: '/',
	},
];

export default Navbar;

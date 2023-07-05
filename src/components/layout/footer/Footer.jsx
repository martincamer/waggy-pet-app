import styles from './footer.module.scss';
import logo from '../../../assets/img/logo.png';
import {
	FaFacebook,
	FaTwitter,
	FaPinterest,
	FaYoutube,
	FaInstagram,
} from 'react-icons/fa';
import { BsSendFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.ls_div}>
					<img
						src={logo}
						alt=""
					/>

					<p>
						Subscribe to our newsletter to get updates about our grand offers.
					</p>
					<div>
						<FaFacebook />
						<FaTwitter />
						<FaPinterest />
						<FaYoutube />
						<FaInstagram />
					</div>
				</div>
				<div className={styles.ls_two_div}>
					<h3>Enlaces Rápidos</h3>
					<ul>
						<Link to="/">Home</Link>
						<Link to="/">About Us</Link>
						<Link to="/">Ofertas</Link>
						<Link to="/">Servicios</Link>
						<Link to="/">Contacto</Link>
					</ul>
				</div>
				<div className={styles.ls_tree_div}>
					<h3>Centro de Ayuda</h3>
					<ul>
						<Link to="/">Tipos de Pago</Link>
						<Link to="/">Metodos de Envio</Link>
						<Link to="/">Devolciones de Producto</Link>
						<Link to="/">Preguntas Frecuentes</Link>
						<Link to="/">Verificaciones</Link>
					</ul>
				</div>
				<div className={styles.ls_fourty_div}>
					<h3>Nuestro Boletín</h3>
					<p>
						Subscribe to our newsletter to get updates about our grand offers.
					</p>
					<div>
						<input placeholder="Pon tu Email correo@correo.com" />
						<BsSendFill />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

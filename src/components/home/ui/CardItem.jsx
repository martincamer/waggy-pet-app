import styles from '../home.module.scss';
import { Link } from 'react-router-dom';

const CardItem = ({ item }) => {
	const { _id, name, rating, price, imagen, _new } = item;

	return (
		<div className={styles.card_shop}>
			<div className={styles.bg_card_image}>
				<div>{_new === true && <p>NEW</p>}</div>
				<div>
					<img src={imagen} />
				</div>
			</div>
			<div className={styles.card_content_desc}>
				<p>{name}</p>
				<p>
					Rating: {''} {rating}
				</p>
				<p>$ {price}</p>
			</div>
			<div className={styles.button_card}>
				<Link to={`/product/${_id}`}>VER AHORA</Link>
			</div>
		</div>
	);
};

export default CardItem;

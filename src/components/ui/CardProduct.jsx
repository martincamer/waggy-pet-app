import styles from '../../components/ui/product.module.scss';

export const CardProduct = ({ item }) => {
	const { name, price, imagen, _id, description, rating } = item;
	return (
		<div className={styles.card_product}>
			<div className={styles.card_product_col_one}>
				<img
					src={imagen}
					alt={`${name} producto`}
				/>
			</div>
			<div className={styles.card_product_col_two}>
				<p>{name}</p>
				<p>{description}</p>
				<p>
					Rating: {''} {rating}
				</p>
				<p>$ {price}</p>

				<div>
					<a href="">Agregar al Carrito</a>
				</div>
			</div>
		</div>
	);
};

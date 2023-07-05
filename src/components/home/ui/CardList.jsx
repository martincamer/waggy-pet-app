import styles from '../../home/home.module.scss';

export const CardList = ({ acc }) => {
	const { imagen, nombre } = acc;

	return (
		<div className={styles.card_item_locks}>
			<img
				src={imagen}
				alt={`Imagen ${nombre}`}
			/>
			<p>{nombre}</p>
		</div>
	);
};

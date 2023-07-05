import { pets } from '../../contents/shop';
import styles from './home.module.scss';
import CardItem from './ui/CardItem';

const homeIntroSix = () => {
	return (
		<section className={styles.home_intro_tree}>
			<div className={styles.home_content_intro_tree}>
				<div className={styles.title_and_button}>
					<h2>Ropa Para Mascotas</h2>
					<a href="#">COMPRAR TODO</a>
				</div>

				<div className={styles.grid_item}>
					{pets.best_selling_products.map(item => (
						<CardItem
							key={item._id}
							item={item}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default homeIntroSix;

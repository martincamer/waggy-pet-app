import styles from './home.module.scss';
import { pets } from '../../contents/shop';
import CardItem from './ui/CardItem';

const HomeIntroTree = () => {
	return (
		<section className={styles.home_intro_tree}>
			<div className={styles.home_content_intro_tree}>
				<div className={styles.title_and_button}>
					<h2>Ropa Para Mascotas</h2>
					<a href="#">COMPRAR TODO</a>
				</div>

				<div className={styles.grid_item}>
					{pets.pet_clothing.map(item => (
						<CardItem
							key={item._id}
							item={item}
						/>
					))}
				</div>
			</div>
			<div className={styles.home_content_intro_tree}>
				<div className={styles.title_and_button}>
					<h2>Comida Para Mascotas</h2>
					<a href="#">COMPRAR TODO</a>
				</div>

				<div className={styles.grid_item}>
					{pets.pet_foodies.map(item => (
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

export default HomeIntroTree;

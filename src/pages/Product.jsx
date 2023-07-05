import { useParams } from 'react-router-dom';
import { pets } from '../contents/shop';
import { CardProduct } from '../components/ui/CardProduct';
import styles from '../components/ui/product.module.scss';

const Product = () => {
	const params = useParams();

	return (
		<section className={styles.product}>
			<div className={styles.container}>
				{pets.pet_clothing.map(item => (
					<>{params.id === item._id && <CardProduct item={item} />}</>
				))}
				{pets.pet_foodies.map(item => (
					<>{params.id === item._id && <CardProduct item={item} />}</>
				))}
				{pets.best_selling_products.map(item => (
					<>{params.id === item._id && <CardProduct item={item} />}</>
				))}
			</div>
		</section>
	);
};

export default Product;

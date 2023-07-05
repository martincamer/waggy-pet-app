import styles from './home_blog.module.scss';
import { blog } from '../../contents/blog';
import { BlogCard } from './ui/BlogCard';

const HomeIntroHeight = () => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				{blog.articulo.map(articulo => (
					<BlogCard
						key={articulo._id}
						articulo={articulo}
					/>
				))}
			</div>
		</section>
	);
};

export default HomeIntroHeight;

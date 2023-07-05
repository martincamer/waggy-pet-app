import { useParams } from 'react-router-dom';
import { CardBlogArticule } from '../components/home/ui/CardBlogArticule';
import { blog } from '../contents/blog';
import styles from '../components/home/home_blog.module.scss';

const BlogArticulo = () => {
	const params = useParams();

	return (
		<section className={styles.section_blog}>
			<div className={styles.container_blog}>
				{blog.articulo.map(url => (
					<>
						{params.id == url._id && (
							<CardBlogArticule
								key={url._id}
								url={url}
							/>
						)}
					</>
				))}
			</div>
		</section>
	);
};

export default BlogArticulo;

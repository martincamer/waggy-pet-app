import styles from '../../home/home_blog.module.scss';

export const CardBlogArticule = ({ url }) => {
	const { _id, fecha, imagen, titulo, descripcion, sub_descripcion } = url;
	return (
		<div className={styles.blog_card_content}>
			<div>
				<p>{fecha}</p>
				<img src={imagen} />
			</div>
			<div>
				<p>{titulo}</p>
				<p>{descripcion}</p>
				<p>{sub_descripcion}</p>
			</div>
		</div>
	);
};

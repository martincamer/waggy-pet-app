import { Link } from 'react-router-dom';
import styles from '../home_blog.module.scss';

export const BlogCard = ({ articulo }) => {
	const { _id, imagen, titulo, descripcion, enlace, fecha } = articulo;

	return (
		<div className={styles.card}>
			<div>
				<p>{fecha}</p>
				<img
					src={imagen}
					alt={`${titulo} imagen`}
				/>
			</div>
			<div>
				<h3>{titulo}</h3>
				<p>{descripcion}</p>
			</div>
			<div>
				<Link to={`/blog/${_id}`}>
					<a>{enlace}</a>
				</Link>
			</div>
		</div>
	);
};

import styles from './home.module.scss';
import { home_intro } from '../../contents/home';
import { BsArrowRightShort } from 'react-icons/bs';

const HomeIntro = () => {
	return (
		<section className={styles.home_intro}>
			<div className={styles.home_content_intro}>
				{home_intro.map(item => (
					<div className={styles.grid}>
						<img src={item.imagen} />
						<div className={styles.grid_column_two}>
							<p>{item.content.sub_title}</p>
							<h2>{item.content.title}</h2>
							<div className={styles.button}>
								<a href="#">Compra Ahora</a>
								<BsArrowRightShort fontSize={25} />
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default HomeIntro;

import { home_intro_five } from '../../contents/home';
import styles from './home_four.module.scss';

const HomeIntroFive = () => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				{home_intro_five.map(home => (
					<div key={home}>
						<div>
							<p>{home.discount}</p>
							<p>{home.title}</p>
							<a href="#">{home.enlace}</a>
						</div>
						<div>
							<img src={home.imagen} />
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default HomeIntroFive;

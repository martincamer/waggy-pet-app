import styles from './home.module.scss';
import { CardList } from './ui/CardList';
import { accesories } from '../../contents/home';

const HomeIntroTwo = () => {
	return (
		<section className={styles.home_intro_two}>
			<div className={styles.home_content_intro_two}>
				{accesories.map(acc => (
					<CardList
						acc={acc}
						key={acc}
					/>
				))}
			</div>
		</section>
	);
};

export default HomeIntroTwo;

import styles from './home.module.scss';
import HomeIntro from './HomeIntro';
import HomeIntroSix from './homeIntroSix';
import HomeIntroFive from './HomeIntroFive';
import HomeIntroFour from './HomeIntroFour';
import HomeIntroTree from './HomeIntroTree';
import HomeIntroTwo from './HomeIntroTwo';
import HomeIntroSeven from './HomeIntroSeven';
import HomeIntroHeight from './homeIntroHeight';
import HomeIntroNine from './HomeIntroNine';
import HomeIntroSlider from './HomeIntroSlider';

const Home = () => {
	return (
		<main className={styles.home}>
			<HomeIntro />
			<HomeIntroTwo />
			<HomeIntroTree />
			<HomeIntroFour />
			<HomeIntroFive />
			<HomeIntroSix />
			<HomeIntroSeven />
			<HomeIntroHeight />
			<HomeIntroNine />
			<HomeIntroSlider />
		</main>
	);
};

export default Home;

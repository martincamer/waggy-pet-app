import { services } from '../../contents/services';
import { CardService } from './ui/CardService';
import styles from './home_services.module.scss';

const HomeIntroNine = () => {
	return (
		<section className={styles.section}>
			<div className={styles.content_services}>
				{services.servicio.map(serv => (
					<CardService
						key={serv.id}
						serv={serv}
					/>
				))}
			</div>
		</section>
	);
};

export default HomeIntroNine;

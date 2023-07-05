import styles from '../home_services.module.scss';

export const CardService = ({ serv }) => {
	return (
		<div className={styles.card}>
			<div>
				<div>{serv.icono}</div>
			</div>
			<div>
				<p>{serv.titulo}</p>
				<p>{serv.descripcion}</p>
			</div>
		</div>
	);
};

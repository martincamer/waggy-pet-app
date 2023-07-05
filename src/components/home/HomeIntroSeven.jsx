import styles from './home_formulario.module.scss';

const HomeIntroSeven = () => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.col_one}>
					<h2>
						Suscribite ahora a <span>nuestros descuentos!</span>
					</h2>
				</div>
				<form className={styles.col_formulario}>
					<div>
						<input placeholder="correo@correo.com" />
					</div>
					<div>
						<input placeholder="romina" />
					</div>
					<div>
						<input placeholder="+54-32323" />
					</div>
					<div className={styles.button}>
						<input
							type="submit"
							value={'Suscribirse'}
						/>
					</div>
				</form>
			</div>
		</section>
	);
};

export default HomeIntroSeven;

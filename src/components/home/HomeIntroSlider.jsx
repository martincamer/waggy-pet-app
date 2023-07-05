import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { slider } from '../../contents/slider';
import styles from '../home/slider.module.scss';
import 'swiper/css';

const HomeIntroSlider = () => {
	return (
		<section className={styles.container}>
			<Swiper
				modules={[Autoplay]}
				slidesPerView={2}
				spaceBetween={50}
				onSlideChange={() => console.log('slide change')}
				onSwiper={swiper => console.log(swiper)}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				breakpoints={{
					640: {
						slidesPerView: 3,
						spaceBetween: 100,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 100,
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 100,
					},
				}}
			>
				{slider.map(card => (
					<SwiperSlide
						className={styles.swiper_slide}
						key={card.id}
					>
						<img
							src={card.imagen}
							alt={`imagen`}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default HomeIntroSlider;

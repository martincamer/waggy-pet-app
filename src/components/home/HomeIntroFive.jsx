// Import Swiper React components
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// imagenes
import logo from '../../assets/img/“.png';

const HomeIntroFive = () => {
	return (
		<section className={'section'}>
			<Swiper
				className="swiper"
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={50}
				slidesPerView={1}
				navigation={{
					nextEl: '.image-swiper-button-next',
					prevEl: '.image-swiper-button-prev',
					disabledClass: 'swiper-button-disabled',
				}}
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSwiper={swiper => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
			>
				<SwiperSlide>
					<div className={'card'}>
						<img
							src={logo}
							alt=""
						/>
						<div>
							<p>
								At the core of our practice is the idea that cities are the
								incubators of our greatest achievements, and the best hope for a
								sustainable future.
							</p>

							<p>- Joshima Lin</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={'card'}>
						<img
							src={logo}
							alt=""
						/>
						<div>
							<p>
								At the core of our practice is the idea that cities are the
								incubators of our greatest achievements, and the best hope for a
								sustainable future.
							</p>

							<p>- Joshima Lin</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={'card'}>
						<img
							src={logo}
							alt=""
						/>
						<div>
							<p>
								At the core of our practice is the idea that cities are the
								incubators of our greatest achievements, and the best hope for a
								sustainable future.
							</p>

							<p>- Joshima Lin</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={'card'}>
						<img
							src={logo}
							alt=""
						/>
						<div>
							<p>
								At the core of our practice is the idea that cities are the
								incubators of our greatest achievements, and the best hope for a
								sustainable future.
							</p>

							<p>- Joshima Lin</p>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default HomeIntroFive;

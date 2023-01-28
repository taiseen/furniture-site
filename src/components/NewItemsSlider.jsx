import { Swiper, SwiperSlide } from 'swiper/react';
import { newInStore } from '../constants/data';
import { imageName } from '../util/imageName';
import 'swiper/css/pagination';
import 'swiper/css';

const NewItemsSlider = () => (

  <Swiper
    grabCursor={true}
    breakpoints={{
      320: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }}
  >
    {
      newInStore.products.map((product, index) => (

        <SwiperSlide className='max-w-[265px]' key={index}>

          <div className='relative'>

            <img src={product.image} alt={imageName(product.image)} />

            <div className='absolute bottom-[20px] text-center w-full text-[18px] lg:text-2xl font-medium capitalize text-white'>
              {product.name}
            </div>

          </div>

        </SwiperSlide>
      ))
    }
  </Swiper>
);

export default NewItemsSlider;
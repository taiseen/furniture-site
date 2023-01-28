import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonial } from '../constants/data';
import { Autoplay, Navigation } from 'swiper';
import { imageName } from '../util/imageName';
import 'swiper/css/navigation';
import 'swiper/css';

const TestimonialSlider = () => {

  return (

    <Swiper
      autoplay={true}
      navigation={true}
      modules={[Navigation, Autoplay]}
      className='testimonialSlider'
    >
      {
        testimonial.persons.map((person, index) => {

          const { avatar, name, occupation, message } = person;

          return (

            <SwiperSlide key={index}>

              <div className='flex flex-col min-h-[250px]'>

                <div className='flex items-center gap-x-5 mb-6'>
                  {/* avatar */}
                  <img src={avatar} alt={imageName(avatar)} />
                  <div>
                    <div className='text-xl font-semibold'>{name}</div>
                    <div className='text-gray-500'>{occupation}</div>
                  </div>
                </div>

                {/* text */}
                <div className='text-xl max-w-[570px]'>{message}</div>

              </div>
            </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
};

export default TestimonialSlider;
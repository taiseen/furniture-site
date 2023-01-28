import { testimonial } from '../constants/data';
import { imageName } from '../util/imageName';
import { TestimonialSlider } from '.';

const Testimonial = () => {

  const { image, title } = testimonial;

  return (

    <section className='section' id='about'>

      <div className='container mx-auto'>

        <div className='flex flex-col lg:flex-row lg:gap-x-10 gap-y-2'>

          <div className='lg:max-w-[50%]'>
            {/* title */}
            <h2 className='title mb-9'>{title}</h2>
            {/* slider */}
            <TestimonialSlider />
          </div>

          {/* image */}
          <div className='order-1'>
            <img src={image} alt={imageName(image)} />
          </div>
        </div>

      </div>

    </section>
  );
};

export default Testimonial;
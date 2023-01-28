import { products } from '../constants/data';
import { ProductSlider } from '.';

const Products = () => {

  const { title, subtitle } = products;

  return (
    <section className='section text-center' id='products'>

      <div className='container mx-auto'>

        <div>
          <h2 className='title'>{title}</h2>
          <p className='max-w-[639px] mx-auto mb-[50px] lg:mb-[70px]'>{subtitle}</p>
        </div>

        <ProductSlider />

      </div>

    </section>
  );
};

export default Products;

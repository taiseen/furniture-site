import { Features, FeaturesSecond, Footer, Header, Hero, NewItems, Newsletter, Products, Testimonial } from './components';


const App = () => {

  return (

    <div className='w-full max-w-[1440px] mx-auto bg-white'>

      <Header />
      <Hero />
      <Features />
      <NewItems />
      <FeaturesSecond />
      <Products />
      <Testimonial />
      <Newsletter />
      <Footer />

    </div>

  );

}

export default App
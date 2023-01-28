import { stats } from '../constants/data';

const Stats = () => {

  return (
    <div className='bg-accent rounded-[20px] p-12'>

      <div className='flex flex-wrap gap-y-8'>
        {
          stats.map((item, index) => (
            <div
              key={index}
              className='min-h-[70px] w-3/6 lg:flex-1 flex flex-col justify-center odd:border-r lg:odd:border-r lg:even:border-r lg:even:last:border-none'
            >

              <div className='text-2xl lg:text-4xl font-semibold'>
                {item.value}
              </div>

              <div className='text-base lg:text-xl font-light max-w-[110px] mx-auto'>
                {item.text}
              </div>

            </div>
          ))
        }
      </div>

    </div>
  );
};

export default Stats;

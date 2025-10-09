import ropa1 from '../assets/img/ropa-1.jpg'
import ropa2 from '../assets/img/ropa-2.jpg'
import ropa3 from '../assets/img/ropa-3.jpg'
import ropa4 from '../assets/img/ropa-4.jpg'

const Tendencias = () => {
  return (
    <section className='max-w-7xl mx-auto flex flex-col items-center py-30'>
      <h3 className='text-sm font-medium text-(--color-title) tracking-[1.1px] mb-3'>LATEST FASHION STYLES</h3>
      <h2 className='text-6xl font-medium text-(--color-title) mb-12.5'>Chic apparel</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-7'>
        <div>
          <img src={ropa1} alt="" />
          <div className='pt-5'>
            <h3 className='font-(family-name:--font-secondary) text-sm text-(--color-subtitle) font-medium mb-2'>BOTTOMS</h3>
            <h4 className='text-xl text-(--color-title) font-medium mb-1'>Oversized Black Tee</h4>
            <h5 className='text-xl tex-(--color-title) font-medium'>$15.00</h5>
          </div>
        </div>
        <div>
          <img src={ropa2} alt="" />
          <div className='pt-5'>
            <h3 className='font-(family-name:--font-secondary) text-sm text-(--color-subtitle) font-medium mb-2'>OUTERWEAR</h3>
            <h4 className='text-xl text-(--color-title) font-medium mb-1'>Oversized Beige Jacket</h4>
            <h5 className='text-xl tex-(--color-title) font-medium'>$15.00</h5>
          </div>
        </div>
        <div>
          <img src={ropa3} alt="" />
          <div className='pt-5'>
            <h3 className='font-(family-name:--font-secondary) text-sm text-(--color-subtitle) font-medium mb-2'>FOOTWEAR</h3>
            <h4 className='text-xl text-(--color-title) font-medium mb-1'>Futuristic Orange Sneakers</h4>
            <h5 className='text-xl tex-(--color-title) font-medium'>$15.00</h5>
          </div>
        </div>
        <div>
          <img src={ropa4} alt="" />
          <div className='pt-5'>
            <h3 className='font-(family-name:--font-secondary) text-sm text-(--color-subtitle) font-medium mb-2'>MEN</h3>
            <h4 className='text-xl text-(--color-title) font-medium mb-1'>Cozy Sherpa Fleece Jacket</h4>
            <h5 className='text-xl tex-(--color-title) font-medium'>$15.00</h5>
          </div>
        </div>
      </div>
      <div className='mt-12.5'>
        <button className='text-(--color-title) border-2 border-(--color-title) rounded-full py-4 px-10 cursor-pointer hover:bg-(--color-title) hover:text-white duration-300 font-medium'>Explore Full Collection</button>
      </div>
    </section>
  )
}

export default Tendencias
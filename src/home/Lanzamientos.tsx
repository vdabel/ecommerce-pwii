import lanzamiento1 from '../assets/img/lanzamiento-1.jpg'
import lanzamiento2 from '../assets/img/lanzamiento-2.jpg'
import logoClient1 from '../assets/img/logo-client-1.png'
import logoClient2 from '../assets/img/logo-client-2.png'
import logoClient3 from '../assets/img/logo-client-3.png'
import logoClient4 from '../assets/img/logo-client-4.png'
import logoClient5 from '../assets/img/logo-client-5.png'
import logoClient6 from '../assets/img/logo-client-6.png'

const Lanzamientos = () => {
  return (
    <>
      <section className='flex px-17.5 gap-7.5'>
        <div className='w-1/3'>
          <h6 className='text-sm font-medium text-(--color-title) tracking-wider mb-6'>ELEMENTRA CLOTHING</h6>
          <h2 className='text-6xl font-medium mb-8'>Shop the latest styles at Elementra today</h2>
          <button className='text-(--color-title) border-2 border-(--color-title) rounded-full py-4 px-10 cursor-pointer hover:bg-(--color-title) hover:text-white duration-300 font-medium'>Shop Now</button>
        </div>
        <div className='w-2/3 flex gap-5'>
          <div>
            <img src={lanzamiento1} alt="" />
            <div className='pt-5'>
              <h4 className='text-xl text-(--color-title) font-medium mb-1'>Avant-Garde Puffer Jacket</h4>
              <h5 className='text-xl tex-(--color-title) font-medium'>$10.00</h5>
            </div>
          </div>
          <div>
            <img src={lanzamiento2} alt="" />
            <div className='pt-5'>
              <h4 className='text-xl text-(--color-title) font-medium mb-1'>Puffy Quited Duffel</h4>
              <h5 className='text-xl tex-(--color-title) font-medium'>$10.00</h5>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full flex justify-center'>
        <div className='flex gap-15'>
          <div>
            <img src={logoClient1} alt="" className='grayscale[0]' />
          </div>
          <div>
            <img src={logoClient2} alt="" />
          </div>
          <div>
            <img src={logoClient3} alt="" />
          </div>
          <div>
            <img src={logoClient4} alt="" />
          </div>
          <div>
            <img src={logoClient5} alt="" />
          </div>
          <div>
            <img src={logoClient6} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Lanzamientos
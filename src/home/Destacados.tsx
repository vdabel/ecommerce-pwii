import destacado1 from '../assets/img/destacado-1.jpg'
import destacado2 from '../assets/img/destacado-2.jpg'
import destacado3 from '../assets/img/destacado-3.jpg'
import destacado4 from '../assets/img/destacado-4.jpg'
import destacado5 from '../assets/img/destacado-5.jpg'

const Destacados = () => {
  return (
    <section className="w-full">
      <div className="w-auto text-center mx-17.5 py-30 border-t-2 border-(--color-subtitle)/25 flex flex-col items-center">

        <h6 className="text-sm font-medium tracking-[1.1px] mb-6">ELEMENTRA'S BEST PICKS</h6>
        <h2 className="text-6xl font-medium max-w-2xl mb-12.5">Explore our featured products</h2>


        <div className='w-full flex gap-7.5'>


          <div className="w-1/2">

            <img src={destacado1} alt="" />

          </div>
          <div className="w-1/2 grid grid-cols-2 grid-rows-2">
            <div>
              <img src={destacado2} alt="" className='' />
              <div className='pt-5 text-left'>
                <h4 className='text-xl text-(--color-title) font-medium mb-1'>Minimalist Cropped Jacket</h4>
                <h5 className='text-xl tex-(--color-title) font-medium'>$10.00</h5>
              </div>
            </div>
            <div>
              <img src={destacado3} alt="" className='size-auto' />
              <div className='pt-5 text-left'>
                <h4 className='text-xl text-(--color-title) font-medium mb-1'>Classic White Sweatshirt</h4>
                <h5 className='text-xl tex-(--color-title) font-medium'>$15.00</h5>
              </div>
            </div>
            <div>
              <img src={destacado4} alt="" className='size-auto' />
              <div className='pt-5 text-left'>
                <h4 className='text-xl text-(--color-title) font-medium mb-1'>White Down Jacket</h4>
                <h5 className='text-xl tex-(--color-title) font-medium'>$15.00</h5>
              </div>
            </div>
            <div>
              <img src={destacado5} alt="size-auto" />
              <div className='pt-5 text-left'>
                <h4 className='text-xl text-(--color-title) font-medium mb-1'>Belted Utility Shirt</h4>
                <h5 className='text-xl tex-(--color-title) font-medium'>$15.00</h5>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Destacados
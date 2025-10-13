import menCategory from '../assets/img/men.jpg'
import womenCategory from '../assets/img/women.jpg'
import accessoriesCategory from '../assets/img/accessories.jpg'

const Categorias = () => {
  return (
    <section className='w-full flex justify-center items-center'>
      <div className='flex justify-center items-center px-17.5'>
        <div className='relative'>
          <img src={womenCategory} alt="" />
          <p className='bg-white font-normal px-3.5 py-1 absolute bottom-5 left-5 rounded-full'>Women</p>
        </div>
        <div className='relative'>
          <img src={menCategory} alt="" />
          <p className='bg-white font-normal px-3.5 py-1 absolute bottom-5 left-5 rounded-full'>Men</p>
        </div>
        <div className='relative'>
          <img src={accessoriesCategory} alt="" />
          <p className='bg-white font-normal px-3.5 py-1 absolute bottom-5 left-5 rounded-full'>Accessories</p>
        </div>
      </div>
    </section>
  )
}

export default Categorias
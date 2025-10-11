import './BannerTendencias.css';

const BannerTendencias = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="w-full px-18 lg:mx-15 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[url('../src/assets/img/banner-1.jpeg')] bg-center bg-no-repeat bg-cover flex flex-col justify-between gap-80 px-30 py-17.5 text-white text-center">
          <h2 className="text-[84px] font-medium">Trendy</h2>
          <p className="text-2xl font-medium text-shadow-lg">Discover the latest styles and trends in fashion today!</p>
        </div>

        <div className="bg-[url('../src/assets/img/banner-2.jpeg')] bg-center bg-no-repeat bg-cover flex flex-col justify-between gap-80 px-30 py-17.5 text-white text-center">
          <h2 className="text-[84px] font-medium">Apparel</h2>
          <p className="text-2xl font-medium text-shadow-lg">Explore our exclusive collections and find your perfect outfit!</p>
        </div>

      </div>
      <div className=''>
        <h2 className="text-[330px] font-medium fondo-texto">Elementra</h2>
      </div>
    </section >
  )
}

export default BannerTendencias
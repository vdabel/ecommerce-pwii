
const BannerTendencias = () => {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full mx-8 lg:mx-15">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-stretch w-full">
          <div className="bg-[url('../src/assets/img/banner-1.jpeg')] flex flex-col justify-between gap-50">
            <h2 className="text-[84px] font-medium">Trendy</h2>
            <p>Discover the latest styles and trends in fashion today!</p>
          </div>

          <div className="bg-[url('../src/assets/img/banner-2.jpeg')]">
            <h2>Apparel</h2>
            <p>Explore our exclusive collections and find your perfect outfit!</p>
          </div>

        </div>
        <div>
          <h2>Elementra</h2>
        </div>
      </div>
    </section>
  )
}

export default BannerTendencias
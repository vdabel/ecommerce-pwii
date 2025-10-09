import BannerTendencias from "../home/BannerTendencias"
import MainBanner from "../home/MainBanner"
import Tendencias from "../home/Tendencias"

const Inicio = () => {
  return (
    <main>
      <MainBanner />
      <Tendencias />
      <BannerTendencias />
    </main>
  )
}

export default Inicio
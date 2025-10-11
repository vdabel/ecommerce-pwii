import MainFooter from "../common/MainFooter"
import BannerTendencias from "../home/BannerTendencias"
import Lanzamientos from "../home/Lanzamientos"
import MainBanner from "../home/MainBanner"
import Tendencias from "../home/Tendencias"

const Inicio = () => {
  return (
    <main>
      <MainBanner />
      <Tendencias />
      <BannerTendencias />
      <Lanzamientos />
      <MainFooter />
    </main>
  )
}

export default Inicio
import MainFooter from "../common/MainFooter"
import BannerBottom from "../home/BannerBottom"
import BannerTendencias from "../home/BannerTendencias"
import Categorias from "../home/Categorias"
import Destacados from "../home/Destacados"
import Features from "../home/Features"
import Lanzamientos from "../home/Lanzamientos"
import MainBanner from "../home/MainBanner"
import Suscripcion from "../home/Suscripcion"
import Tendencias from "../home/Tendencias"

const Inicio = () => {
  return (
    <main>
      <MainBanner />
      <Tendencias />
      <BannerTendencias />
      <Lanzamientos />
      <Categorias />
      <Features />
      <Destacados />
      <Suscripcion />
      <BannerBottom />
    </main>
  )
}

export default Inicio
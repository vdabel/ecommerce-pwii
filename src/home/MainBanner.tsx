import { HeartIcon } from "@heroicons/react/24/solid";
import Marquee from "react-fast-marquee";

const MainBanner = () => {
  return (
    <main>
      <div className="bg-[url(./src/assets/img/custom-img-16.jpg)] bg-cover bg-center h-screen flex flex-col items-center justify-center text-white text-center p-4">
        <h1 className="text-9xl font-medium -tracking-[2.6px] mb-3">Trendy apparel</h1>
        <p>Enhance your style with our newest clothing line.</p>
        <a href="#">Shop Now</a>
      </div>
      <div>
        <Marquee gradient={false} speed={80} className="w-full py-6 bg-(--color-bg-1)" autoFill={true}>
          <div className="flex items-center justify-between gap-8 ml-8">
            <span>BIG DISCOUNTS ON FASHION!</span>
            <HeartIcon className="h-4 w-4 text-red-500" />

          </div>
        </Marquee>
      </div>
    </main>
  )
}

export default MainBanner
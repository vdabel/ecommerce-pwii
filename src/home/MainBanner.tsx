import { HeartIcon } from "@heroicons/react/24/solid";
import Marquee from "react-fast-marquee";
import './MainBanner.css'

const MainBanner = () => {
  return (
    <>
      <div className="bg-[url(./../src/assets/img/custom-img-16.jpg)] bg-cover bg-center h-screen flex flex-col items-center justify-end text-white text-center py-23">
        <div className="flex flex-col items-center justify-center">

          <div className="mb-3">
            <h1 className="text-9xl font-medium -tracking-[2.6px] title-banner">Trendy apparel</h1>
          </div>
          <div className="mb-10">
            <p className="text-lg p-banner">pa2Enhance your style with our newest clothing line.</p>
          </div>
          <a href="#" className="px-10 py-5 rounded-full bg-(--color-btn-1) hover:bg-(--color-btn-1-h)">Shop Now</a>
        </div>
      </div>
      <div>
        <Marquee gradient={false} speed={80} className="w-full py-6 bg-(--color-bg-1)" autoFill={true}>
          <div className="flex items-center justify-between gap-8 ml-8">
            <span className="text-sm font-normal">BIG DISCOUNTS ON FASHION!</span>
            <HeartIcon className="h-4 w-4 text-red-500" />
          </div>
        </Marquee>
      </div>
    </>
  )
}

export default MainBanner
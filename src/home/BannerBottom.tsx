import bannerBottom1 from '../assets/img/banner-img1.jpg'
import bannerBottom2 from '../assets/img/banner-img2.jpg'
import bannerBottom3 from '../assets/img/banner-img3.jpg'
import bannerBottom4 from '../assets/img/banner-img4.jpg'
import bannerBottom5 from '../assets/img/banner-img5.jpg'
import bannerBottom6 from '../assets/img/banner-img6.jpg'
import Marquee from "react-fast-marquee"
import { HeartIcon } from '@heroicons/react/24/solid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const BannerBottom = () => {
  return (
    <section>
      <div>
        <Marquee gradient={false} speed={80} className="w-full py-6 bg-black text-white" autoFill={true}>
          <div className="flex items-center justify-between gap-8 ml-8">
            <span className="text-sm font-normal">BIG DISCOUNTS ON FASHION!</span>
            <HeartIcon className="h-4 w-4 " />
          </div>
        </Marquee>
      </div>
      <div className="flex flex-row relative">
        <img src={bannerBottom1} alt="" className="w-1/6" />
        <img src={bannerBottom2} alt="" className="w-1/6" />
        <img src={bannerBottom3} alt="" className="w-1/6" />
        <img src={bannerBottom4} alt="" className="w-1/6" />
        <img src={bannerBottom5} alt="" className="w-1/6" />
        <img src={bannerBottom6} alt="" className="w-1/6" />
        <div className='absolute w-full h-full grid place-items-center'>
          <a href='#' className='bg-white text-black p-5 rounded-[50%] size-20 grid place-content-center text-2xl'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default BannerBottom
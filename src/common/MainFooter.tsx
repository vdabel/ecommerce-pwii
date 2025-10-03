import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import logo from './../assets/img/logo-retina.png'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About', href: '#', current: false },
  { name: 'Shop', href: '#', current: false },
  { name: 'Blog', href: '#', current: false },
  { name: 'Contact', href: '#', current: false }
]

const MainFooter = () => {
  return (
    <footer>
      <div className="max-w-7xl m-auto pt-25 text-(--color-text)">
        <div className='flex flex-row pb-22'>

          <div className='w-1/2 flex flex-col gap-8'>
            <img src={logo} alt="logo" className='w-60 object-contain' />
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
            <div className='columns-4'>
              <span><a href="#" className='border border-(--color-text) rounded-[50%] p-5 size-7 grid place-content-center' ><FontAwesomeIcon icon={faFacebookF} className='text-xs' /></a></span>
              <span><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></span>
              <span><a href="#"><FontAwesomeIcon icon={faXTwitter} /></a></span>
              <span><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></span>
            </div>
          </div>

          <div className='w-1/2 flex flex-row'>
            <div>
              <h6>Links</h6>
              <ul>
                {navigation.map((item) =>
                  <li>
                    <a href="#">{item.name}</a>
                  </li>
                )}
              </ul>
            </div>
            <div>
              <h6>Products</h6>
              <ul>
                <li><a href="#">Men</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Men</a></li>
              </ul>
            </div>
            <div>
              <h6>Contact</h6>
              <ul>3
                <li><a href="">eabelva@gmail.com</a></li>
                <li><address>Perú-Av. Alfredo Benavides 778, Miraflores 15074</address></li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div>
            <p>© 2025. All Rights Reserved.</p>
          </div>
          <div>
            <p>Site by <a href="#">Abel Valdivia</a>.</p>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default MainFooter
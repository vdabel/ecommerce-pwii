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
        <div className='flex flex-row pb-22 border-b-1 border-(--color-text)/25'>
          <div className='w-1/2 flex flex-col gap-8'>
            <img src={logo} alt="logo" className='w-60 object-contain' />
            <p className='pr-35'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
            <div className='flex flex-row gap-2'>
              <a href="#" className='border border-(--color-text) rounded-[50%] size-10  grid place-content-center hover:text-(--color-hover) duration-300 ease-in'><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className='border border-(--color-text) rounded-[50%] size-10  grid place-content-center hover:text-(--color-hover) duration-300 ease-in'><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" className='border border-(--color-text) rounded-[50%] size-10  grid place-content-center hover:text-(--color-hover) duration-300 ease-in'><FontAwesomeIcon icon={faXTwitter} /></a>
              <a href="#" className='border border-(--color-text) rounded-[50%] size-10  grid place-content-center hover:text-(--color-hover) duration-300 ease-in'><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
          <div className='w-1/2 flex flex-row justify-between'>
            <div className='w-1/3'>
              <h6 className='text-xl text-(--color-title) font-medium pb-6'>Links</h6>
              <ul className='flex flex-col gap-4'>
                {navigation.map((item, index) =>
                  <li key={index}>
                    <a href="#" className='hover:text-(--color-title) duration-300 ease-in'>{item.name}</a>
                  </li>
                )}
              </ul>
            </div>

            <div className='w-1/3'>
              <h6 className='text-xl text-(--color-title) font-medium pb-6'>Products</h6>
              <ul className='flex flex-col gap-4'>
                <li><a href="#" className='hover:text-(--color-title) duration-300 ease-in'>Men</a></li>
                <li><a href="#" className='hover:text-(--color-title) duration-300 ease-in'>Accesories</a></li>
                <li><a href="#" className='hover:text-(--color-title) duration-300 ease-in'>Women</a></li>
                <li><a href="#" className='hover:text-(--color-title) duration-300 ease-in'>Outerwear</a></li>
                <li><a href="#" className='hover:text-(--color-title) duration-300 ease-in'>Clothing</a></li>
              </ul>
            </div>

            <div className='w-1/3'>
              <h6 className='text-xl text-(--color-title) font-medium pb-6'>Contact</h6>
              <ul className='flex flex-col gap-4'>
                <li><a href="" className='hover:text-(--color-title) duration-300 ease-in'>eabelva@gmail.com</a></li>
                <li><address>Perú - Av. Alfredo Benavides 778, Miraflores 15074</address></li>
              </ul>
            </div>
          </div>
        </div>

        <div className='flex flex-row justify-between py-8'>
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
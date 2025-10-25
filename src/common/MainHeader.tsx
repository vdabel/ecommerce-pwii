import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from './../assets/img/logo-retina.png'
import './MainHeader.css'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Shop', href: '#', current: false },
  { name: 'Blog', href: '#', current: false },
  { name: 'Contact', href: '#', current: false }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const MainHeader = () => {
  return (
    <header>
      <Disclosure
        as="nav"
        className="relative"
      >
        <div className="mx-7 max-w-full px-2 xl:px-6 lg:px-8">
          <div className="relative flex h-25 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center xl:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
              </DisclosureButton>
            </div>
            <div className="flex flex-row  flex-1 items-center justify-center xl:items-stretch xl:justify-between">

              <div className="flex shrink-0 items-center xl:w-1/5">
                <img
                  alt="Your Company"
                  src={logo}
                  className="w-60 object-contain"
                />
              </div>

              <div className="hidden xl:block xl:w-3/5">
                <div className="flex mx-auto justify-center">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current ? 'text-gray-500' : 'text-gray-950 hover:text-gray-500',
                        'px-3 py-2 text-base font-medium'
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center justify-end gap-5 pr-2 xl:w-1/5 xl:static xl:inset-auto xl:pr-0">
                <button
                  type="button"
                  className="relative rounded-full text-(--color-title) hover:text-(--color-text) focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                >
                  <span className="absolute -inset-1.5" />
                  <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                </button>
                <button
                  type="button"
                  className="relative rounded-full text-(--color-title) hover:text-(--color-text) focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                >
                  <span className="absolute -inset-1.5" />
                  <ShoppingBagIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

            </div>

          </div>
        </div>


        <DisclosurePanel className="xl:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-gray-950/50 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium',
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </header>
  )
}

export default MainHeader;
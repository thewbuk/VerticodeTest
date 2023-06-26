import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  UserGroupIcon,
  XMarkIcon,
  Bars3Icon
} from '@heroicons/react/24/outline'
import { Link, Outlet, useLocation } from 'react-router-dom'

const navigation = [
  { name: 'People', href: '/', icon: UserGroupIcon }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Layout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div className="min-h-full">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-opacity-75 bg-slate-600" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-slate-700">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 pt-2 -mr-12">
                      <button
                        type="button"
                        className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="w-6 h-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex items-center flex-shrink-0 px-4 text-center text-white">
                    Verticode Coding Challenge 
                  </div>
                  <nav
                    className="flex-shrink-0 h-full mt-5 overflow-y-auto divide-y divide-slate-800"
                    aria-label="Sidebar"
                  >
                    <div className="px-2 space-y-1">
                      {navigation.map((item) => (
                        <>
                          {item.category && <div className="text-lg">{item.category}</div>}
                          <Link
                            onClick={() => setSidebarOpen(false)}
                            key={item.name}
                            to={item.href}
                            className={classNames(
                              location.pathname.endsWith(item.href)
                                ? 'bg-slate-800 text-white'
                                : 'text-slate-100 hover:text-white hover:bg-slate-600',
                              'group flex items-center px-2 py-2 text-base font-medium rounded'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            <item.icon className="flex-shrink-0 w-6 h-6 mr-4 text-slate-200" aria-hidden="true" />
                            {item.name}
                          </Link>

                        </>

                      ))}
                    </div>
                   
                  </nav>
                </Dialog.Panel>
              </Transition.Child>
              <div className="flex-shrink-0 w-14" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
          <div className="flex flex-col flex-grow px-2 pt-10 pb-4 overflow-y-auto bg-slate-800">
            <div className="flex flex-col items-center flex-shrink-0 px-4 text-center text-white">
              Verticode Coding Challenge <br/> by <br/> <span className="text-blue-400">Wojciech Bandzerewicz</span>
            </div>

            <nav className="flex flex-col flex-1 mt-5 overflow-y-auto divide-y divide-slate-800" aria-label="Sidebar">
              <div className="flex-1 px-2 space-y-2">
                {navigation.map((item) => (
                  <>
                    {item.category && <div className="pt-5 ml-3 text-xs font-semibold text-slate-500">{item.category}</div>}
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        location.pathname.endsWith(item.href) ? 'bg-slate-700 text-white' : 'text-slate-500 hover:text-slate-100 hover:bg-slate-600',
                        'group flex items-center px-4 py-3 text-sm leading-6 font-medium rounded'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      <item.icon className="flex-shrink-0 w-6 h-6 mr-4 " aria-hidden="true" />
                      {item.name}
                    </Link>
                  </>

                ))}
              </div>
              <div className="pt-6 mt-6">
                <div className="px-2 space-y-1">
                 
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="flex flex-col flex-1 min-h-screen lg:pl-64 bg-slate-50">
          <div className="flex h-16 px-5 text-white lg:hidden bg-slate-800 lg:text-neutral-800">
            <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="w-6 h-6 text-white" aria-hidden="true" />
            </button>
            <div className="flex items-center justify-end w-full h-16 max-w-5xl mx-auto space-x-4 2xl:max-w-6xl">
              
            </div>

          </div>
          <main className="flex-1">

            <Outlet></Outlet>
          </main>
        </div>
      </div>
    </>
  )
}

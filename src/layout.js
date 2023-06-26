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
              <div className="fixed inset-0 bg-slate-600 bg-opacity-75" />
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
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-slate-700 pt-5 pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center px-4 text-white text-center">
                    Verticode Coding Challenge 
                  </div>
                  <nav
                    className="mt-5 h-full flex-shrink-0 divide-y divide-slate-800 overflow-y-auto"
                    aria-label="Sidebar"
                  >
                    <div className="space-y-1 px-2">
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
                            <item.icon className="mr-4 h-6 w-6 flex-shrink-0 text-slate-200" aria-hidden="true" />
                            {item.name}
                          </Link>

                        </>

                      ))}
                    </div>
                   
                  </nav>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
          <div className="flex flex-grow flex-col overflow-y-auto bg-slate-800 pt-10 px-2 pb-4">
            <div className="flex flex-shrink-0 items-center px-4 text-white text-center">
              Verticode Coding Challenge
            </div>

            <nav className="mt-5 flex flex-1 flex-col divide-y divide-slate-800 overflow-y-auto" aria-label="Sidebar">
              <div className="space-y-2 px-2 flex-1">
                {navigation.map((item) => (
                  <>
                    {item.category && <div className="text-xs text-slate-500 font-semibold ml-3 pt-5">{item.category}</div>}
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        location.pathname.endsWith(item.href) ? 'bg-slate-700 text-white' : 'text-slate-500 hover:text-slate-100 hover:bg-slate-600',
                        'group flex items-center px-4 py-3 text-sm leading-6 font-medium rounded'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      <item.icon className="mr-4 h-6 w-6 flex-shrink-0 " aria-hidden="true" />
                      {item.name}
                    </Link>
                  </>

                ))}
              </div>
              <div className="mt-6 pt-6">
                <div className="space-y-1 px-2">
                 
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="flex flex-1 flex-col lg:pl-64 bg-slate-50 min-h-screen">
          <div className="lg:hidden bg-slate-800 text-white lg:text-neutral-800 h-16 flex px-5">
            <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
            <div className=" h-16 2xl:max-w-6xl max-w-5xl w-full mx-auto flex items-center space-x-4 justify-end">
              
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

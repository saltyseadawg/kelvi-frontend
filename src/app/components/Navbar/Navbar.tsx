'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Contact Us', href: '/contact', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const pathname = usePathname()

  return (
    <Disclosure as="nav" className="bg-[#FAE5BB]">
      <div className="mx-auto sm:px-8 lg:px-12">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-[#F08D49] hover:bg-[#F6C974] hover:text-default-white focus:ring-2 focus:ring-[#F08D49] focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon data-testid="btn-close-nav" aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              {/* <img
                alt="Kelvi logo"
                src="/images/logo-with-diacritic.svg"
                className="h-8 w-auto"
              /> */}
              <svg className="h-8 w-auto stroke-[#F08D49] fill-[#F08D49]" width="308" height="117" viewBox="0 0 230.88 87.75"><defs><clipPath id="a"><path d="M.27 0h79.52v87.5H.27Zm0 0"/></clipPath><clipPath id="b"><path d="M.27 0h117.523v87.477H.27Zm0 0"/></clipPath><clipPath id="c"><path d="M.27 1.496H116V87.5H.27Zm0 0"/></clipPath><clipPath id="d"><path d="M39.234 1.285h33.063v33.11H39.234Zm0 0"/></clipPath><clipPath id="e"><path d="M55.766 1.285c-9.13 0-16.532 7.41-16.532 16.555 0 9.14 7.403 16.555 16.532 16.555 9.132 0 16.53-7.415 16.53-16.555 0-9.145-7.398-16.555-16.53-16.555m0 0"/></clipPath><clipPath id="f"><path d="M39.234 53.469h33.063v33.11H39.234Zm0 0"/></clipPath><clipPath id="g"><path d="M55.766 53.469c-9.13 0-16.532 7.41-16.532 16.554 0 9.145 7.403 16.555 16.532 16.555 9.132 0 16.53-7.41 16.53-16.555S64.899 53.47 55.767 53.47m0 0"/></clipPath><clipPath id="h"><path d="M.27 0H11v87H.27Zm0 0"/></clipPath><clipPath id="i"><path d="M212.094 18h16.89v17h-16.89Zm0 0"/></clipPath><clipPath id="j"><path d="m211.867 34.469.535-16.867 16.844.535-.535 16.867Zm0 0"/></clipPath><clipPath id="k"><path d="m211.867 34.469.528-16.625 16.605.523-.527 16.63Zm0 0"/></clipPath><clipPath id="l"><path d="M212.129 26.156c-.14 4.594 3.457 8.434 8.043 8.574 4.586.149 8.418-3.457 8.566-8.046.14-4.594-3.457-8.434-8.043-8.582-4.586-.141-8.418 3.46-8.566 8.054m0 0"/></clipPath></defs><g clipPath="url(#a)"><path fill="none" strokeLinecap="round" strokeWidth="20" d="M13.907 13.244q32.717 14.765 65.441-.04" transform="matrix(-.01626 .52712 -.52634 -.01628 26.748 18.31)"/></g><g clipPath="url(#b)"><path fill="none"  strokeLinecap="round" strokeWidth="20" d="M14.406 13.856c28.217 23.112 56.448 23.09 84.675-.077" transform="matrix(-.464 .24939 -.24902 -.46468 67.854 9.31)"/></g><g clipPath="url(#c)"><path fill="none"  strokeLinecap="round" strokeWidth="20" d="M14.221 13.636q40.108 24.362 80.225-.058" transform="matrix(.46263 .25192 -.25155 .46331 15.96 51.283)"/></g><g clipPath="url(#d)"><g clipPath="url(#e)"><path fill="none"  strokeWidth="40" d="M31.39.002C14.052.002-.005 14.053-.005 31.392c0 17.333 14.057 31.392 31.393 31.392 17.343 0 31.393-14.059 31.393-31.391 0-17.34-14.05-31.391-31.393-31.391Zm0 0" transform="matrix(.5266 0 0 .52737 39.236 1.284)"/></g></g><g clipPath="url(#f)"><g clipPath="url(#g)"><path fill="none"  strokeWidth="40" d="M31.39.002C14.052.002-.005 14.052-.005 31.392S14.053 62.784 31.39 62.784c17.343 0 31.393-14.05 31.393-31.39S48.732.002 31.389.002Zm0 0" transform="matrix(.5266 0 0 .52737 39.236 53.468)"/></g></g><g clipPath="url(#h)"><path fill="none"  strokeLinecap="round" strokeWidth="20" d="M9.996 10H153.9" transform="matrix(0 .52737 -.5266 0 10.797 .232)"/></g><path fill="none"  strokeLinecap="round" strokeWidth="20" d="M10.003 10h118.068" transform="matrix(0 .52737 -.5266 0 148.259 13.854)"/><path fill="none"  strokeLinecap="round" strokeWidth="20" d="M10.001 10h70.285" transform="matrix(0 .52737 -.5266 0 225.7 39.054)"/><g clipPath="url(#i)"><g clipPath="url(#j)"><g clipPath="url(#k)"><g clipPath="url(#l)"><path fill="none"  strokeWidth="20" d="M15.772-.005C7.057.004-.004 7.063.005 15.775c-.006 8.714 7.058 15.77 15.765 15.777 8.715-.009 15.776-7.067 15.782-15.78-.009-8.713-7.065-15.77-15.78-15.777Zm0 0" transform="matrix(.01666 -.5271 .52633 .01669 211.869 34.47)"/></g></g></g></g><path d="M105.465 77.543q2.672 0 5.258-.738c1.718-.496 3.32-1.332 4.793-2.5q2.122-1.934 4.144-1.793c1.356.086 2.477.582 3.367 1.476q1.338 1.331 1.34 3.325 0 1.98-1.933 3.832-3.235 3.14-7.664 4.382a31 31 0 0 1-9.028 1.157q-7.195-.001-12.68-2.95-5.49-2.964-8.578-8.226-3.091-5.26-3.09-12.192.001-7.574 2.95-13.304 2.94-5.72 8.344-8.953c3.597-2.157 7.859-3.235 12.777-3.235q7.377-.001 12.535 3.004 5.167 3 7.887 8.402 2.725 5.41 2.726 12.61 0 2.3-.925 3.922-.923 1.617-4.891 1.617H92.094c.86 3.02 2.484 5.469 4.883 7.344q3.596 2.822 8.488 2.82m.09-30.582c-3.563 0-6.551 1.129-8.953 3.383-2.395 2.246-3.934 5.187-4.606 8.82h26.84c-.309-3.633-1.504-6.574-3.594-8.82q-3.136-3.382-9.687-3.383M157.875 45.676q-.633-1.851-.043-3.414a5.28 5.28 0 0 1 2.035-2.543c.95-.645 1.95-.973 2.988-.973q1.66.002 2.903.883 1.255.873 1.894 2.355l14.118 28.633 14.109-28.73c.547-1.106 1.27-1.91 2.164-2.403a5.8 5.8 0 0 1 2.816-.738q1.658.002 2.993.883a4.46 4.46 0 0 1 1.843 2.402c.336 1.012.168 2.2-.504 3.555L186.38 83.82q-.656 1.202-1.95 2.028a5.14 5.14 0 0 1-2.847.836q-3.047 0-4.617-2.676Zm0 0"/></svg>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => {
                  const isCurrent = item.href === pathname
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={isCurrent ? 'page' : undefined}
                      className={classNames(
                        isCurrent
                          ? 'bg-[#F08D49] text-default-white'
                          : 'text-default-black hover:bg-[#F6C974] hover:text-default-white',
                        'rounded-md px-3 py-2 text-sm font-medium font-sans'
                      )}
                    >
                      {item.name}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Mobile settings*/}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => {
            const isCurrent = item.href === pathname
            return (
              <DisclosureButton
                key={item.name}
                as={Link}
                href={item.href}
                aria-current={isCurrent ? 'page' : undefined}
                className={classNames(
                  isCurrent
                    ? 'bg-[#F08D49] text-default-white'
                    : 'text-default-black hover:bg-[#F6C974] hover:text-default-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
              >
                {item.name}
              </DisclosureButton>
            )
          })}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

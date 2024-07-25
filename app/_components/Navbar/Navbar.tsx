import React from 'react'
import clsx from "clsx";
import localFont from 'next/font/local'
import { Menu } from 'lucide-react';


const bentoga = localFont({ src: '../../../public/fonts/bentoga/Bentoga-Thin.otf' })
const satoshi = localFont({
  src: [
    {
      path: '../../../public/fonts/Satoshi/Fonts/OTF/Satoshi-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
})
export default function Navbar() {
  return (
    <div className="w-full absolute z-50">
      <div className='flex items-center justify-between px-4 sm:px-[2.5rem] lg:px-28 py-10'>
        <div className={clsx(bentoga.className, "antialiased text-[1.8rem]")}>
            <span>Akira</span>
        </div>
        <div>
            <button>
                <Menu size={30} />
            </button>
        </div>
      </div>
    </div>
  )
}

"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}

const Nav = (props: Props) => {
    
  return (
    <nav className="p-10 h-[5vh] w-[100vw] flex flex-row  bg-[#F8F8FB] items-center justify-between">
      <div className="w-50  z-50">
        <Image src="/log.png" alt="logo" height={24} width={24} />
      </div>

      <div className="w-50">
        <Link
          className=" flex flex-row gap-3 items-center text-[22px]"
          href={"/"}
        >
          Log In
          <Image src="Arrow2.svg" alt={"arrow"} height={12} width={12} />
          
        </Link>
      </div>
    </nav>
  );
}

export default Nav
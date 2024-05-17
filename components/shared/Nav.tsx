"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}

const Nav = (props: Props) => {
    const pathName=usePathname()
  return (
    <nav className="p-10 h-[5vh] flex flex-row bg-[#F8F8FB] items-center justify-between">
      <div className="w-50 ">
        <Image src="/log.png" alt="logo" height={24} width={24} />
      </div>

      <div className="w-50">
        <Link
          className=" flex flex-row gap-3 items-center text-[22px]"
          href={"/"}
        >
          Log In
          <Image src="Arrow2.svg" alt={"arrow"} height={12} width={12} />
          {/* {pathName===} */}
        </Link>
      </div>
    </nav>
  );
}

export default Nav
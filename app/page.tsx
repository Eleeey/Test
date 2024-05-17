"use client"

import Nav from "@/components/shared/Nav";
import MainPage from "@/components/shared/SignUpForm";
import SideHero from "@/components/shared/SignUpHero";



export default function Home() {
  return (
   
    
      <main className="flex h-[120vh] w-[100vw] max  md:justify-center lg:justify-around bg-[#F8F8FB]">
        <SideHero />
        <MainPage />
      </main>
    
  );
}

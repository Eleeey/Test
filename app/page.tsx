"use client"

import MainPage from "@/components/shared/SideForm";
import SideHero from "@/components/shared/SideHero";



export default function Home() {
  return (
    <main className="flex h-[120vh] md:justify-center lg:justify-around bg-[#F8F8FB]">
      <SideHero/>
      <MainPage/>
    </main>
      
    
  );
}

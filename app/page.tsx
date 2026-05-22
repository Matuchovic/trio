"use client";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import Marquee from "@/components/sections/Marquee";
import FlavorSection from "@/components/sections/FlavorSection";
import MenuSection from "@/components/sections/MenuSection";
import GallerySection from "@/components/sections/GallerySection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

const Cursor = dynamic(() => import("@/components/layout/Cursor"), { ssr: false });
const SmoothScroll = dynamic(() => import("@/components/layout/SmoothScroll"), { ssr: false });
const Loader = dynamic(() => import("@/components/layout/Loader"), { ssr: false });

export default function Home() {
  return (
    <>
      <Loader />
      <Cursor />
      <SmoothScroll>
        <Navbar />
        <main>
          <HeroSection />
          <Marquee />
          <FlavorSection />
          <MenuSection />
          <GallerySection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}

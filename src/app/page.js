
'use client'
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import { motion } from "framer-motion";
import AutoCarousel from "@/components/ImagesSlider";
import About from "@/components/About";
import ProductsSection from "@/components/ProductsSection";
import HowWeWork from "@/components/HowWeWork";
import CaseStudy from "@/components/CaseStudy";
export default function Home() {
  const images = ['/images/brands/Logo1.png', '/images/brands/Logo2.png', '/images/brands/Logo3.png', '/images/brands/Logo1.png']
  return (
    <div className="">
      <Hero />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mt-12"
      >

        <AutoCarousel
          images={images}

        />
      </motion.div>
      <StatsSection />
      <About />
      <ProductsSection />

      <HowWeWork />
      <CaseStudy />
    </div>
  );
}

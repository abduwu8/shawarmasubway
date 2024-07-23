import video from "../assets/hero.mp4"
import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <div>
      <section className="relative flex h-screen items-center justify-center">
        <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
          <video src={video} className="h-full w-full object-cover opacity-30" muted autoPlay loop playsInline></video>
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black"></div>
        <div className="relative z-20 flex h-screen  flex-col justify-center pb-20">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-8xl font-SawarabiMincho p-2"
          >
            <span className="text-white">shawarma</span>
            <span className="text-[#FFA07A]"> subway.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-4 font-Inter text-sm tracking-tighter text-white text-left"
          >
            a delicious destination for all your shawarma cravings.
          </motion.p>
        </div>
      </section>
    </div>
  )
}

export default HeroSection
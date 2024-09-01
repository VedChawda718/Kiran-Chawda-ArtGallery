import React from "react";
import m1 from "../assets/MarqueePainting1.jpg";
import m2 from "../assets/MarqueePainting2.jpg";
import m3 from "../assets/MarqueePainting3.jpg";
import m4 from "../assets/MarqueePainting4.jpg";
import m5 from "../assets/MarqueePainting5.jpg";
import { motion } from "framer-motion";

const Marquee = () => {
  const paintings = [
    { src: m1, alt: "Marquee Painting 1" },
    { src: m2, alt: "Marquee Painting 2" },
    { src: m3, alt: "Marquee Painting 3" },
    { src: m4, alt: "Marquee Painting 4" },
    { src: m5, alt: "Marquee Painting 5" },
  ];

  return (
    <div className="container overflow-x-hidden bg-zinc-950">
      <div className="flex">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{duration:20, repeat:Infinity, ease:"linear" }}
          className="flex flex-shrink-0"
        >
          {paintings.map(({ src, alt }, index) => (
            <img
              className="h-40 w-full mr-2 rounded-sm"
              src={src}
              alt={alt}
              key={index}
            />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{duration:20, repeat:Infinity, ease:"linear" }}
          className="flex flex-shrink-0"
        >
          {paintings.map(({ src, alt }, index) => (
            <img
              className="h-40 w-full mr-2 rounded-sm"
              src={src}
              alt={alt}
              key={index}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;

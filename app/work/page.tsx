"use client";

import { motion } from "framer-motion";

import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import WorkSlider from "@/components/WorkSlider";
import { fadeIn } from "@/variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-24 xl:py-28 flex items-center overflow-y-auto">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8 gap-y-6 items-center">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-2 xl:mb-0 shrink-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-4"
            >
              My work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-100 mx-auto lg:mx-0"
            >
              Selected product, branding, and web projects — from concept through
              polished launch.
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%] min-h-0"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;

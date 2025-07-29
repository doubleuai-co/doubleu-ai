"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { agents } from "@/lib/agentsData";

export default function ButtonAnimate({ agent }: { agent: typeof agents[0] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMouseEnter = () => {
    // Only trigger on desktop (devices with mouse)
    if (window.matchMedia('(hover: hover)').matches) {
      setIsExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    // Only trigger on desktop (devices with mouse)
    if (window.matchMedia('(hover: hover)').matches) {
      setIsExpanded(false);
    }
  };

  return (
    <div className="flex">
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Top Button Container */}
        <div className="relative w-20 h-20">
          <AnimatePresence mode="wait">
            {!isExpanded ? (
              <motion.button
                key="arrow-button"
                initial={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                onClick={handleButtonClick}
                className="absolute inset-0 w-12 h-12 bg-[#1D0B0B] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <ArrowUp color='white' size={30}/>
              </motion.button>
            ) : (
              <Link href={agent.access} passHref>
                <motion.button
                  key="learn-more-button"
                  initial={{ opacity: 0, x: -100, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 100, scale: 0.8 }}
                  transition={{
                    duration: 0.2,
                    stiffness: 100,
                    damping: 15
                  }}
                  className="absolute cursor-pointer inset-0 w-48 h-14 bg-[#7D73C3] rounded-full flex items-center gap-[22px] justify-center shadow-lg hover:shadow-xl transition-shadow group"
                  style={{ left: '0px', top: '4px' }}
                >
                  <span className="text-white font-medium text-lg mr-2">Learn more</span>
                  <motion.svg
                    className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform"
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight/>
                  </motion.svg>
                </motion.button>
              </Link>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
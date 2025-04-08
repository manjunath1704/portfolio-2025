"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "react-bootstrap-icons";

interface AnimatedButtonProps {
  href: string;
  text: string;
  additionalClass?:string;
}

const buttonVariants = {
  hover: {
    opacity:0.8
  },
  tap: { scale: 0.95 },
};

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ href, text,additionalClass }) => {
  return (
    <Link href={href} target="_self">
      <motion.button
        variants={buttonVariants}
        whileTap="tap"
        whileHover="hover"
        className={`relative overflow-hidden bg-neutral-100 text-white 
                   inline-flex items-center justify-center gap-2 
                   px-6 py-3 md:px-10 md:py-4 lg:px-12 lg:py-5 
                   rounded-full text-base md:text-xl lg:text-2xl 
                   font-normal transition-all duration-300 
                   w-full max-w-xs md:max-w-sm lg:max-w-none ${additionalClass}`}
        aria-label={`Navigate to ${text}`}
      >
        {text}
        <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 100 }}>
          <ChevronRight size={22} />
        </motion.span>
      </motion.button>
    </Link>
  );
};

export default AnimatedButton;

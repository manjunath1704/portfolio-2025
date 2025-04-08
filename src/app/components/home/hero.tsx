"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedButton from '../animated/animated-button';

const AnimatedHeading: React.FC = () => {
    const text = "a passionate UI Developer crafting seamless experiences.";

    return (
        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-center text-neutral-100"
        >
            {/* "I’m Manjunath," appears first */}
            <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-neutral-40"
            >
                I’m Manjunath,
            </motion.span>{" "}

            {/* Letter-by-letter animation */}
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                        duration: 0.3,
                        delay: 1 + index * 0.05,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 100,
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.h1>
    );
};

const Hero = () => {
    return (
        <section className="px-5 md:px-10 pt-[150px] pb-20 text-center">
            <div className="max-w-[1500px] m-auto px-10 md:h-full flex flex-col justify-center items-center gap-6">
                <AnimatedHeading />

                {/* "Let's Talk" Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 4.2 }}
                >
                    <AnimatedButton href="/contact" text="Let's Talk" />
                </motion.div>

                {/* Social Media Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 5 }}
                    className="flex gap-6 mt-4"
                >
                    {[
                        // { href: "https://instagram.com", label: "Instagram" },
                        { href: "https://www.linkedin.com/in/manjunath-kottarki-5858949b/", label: "LinkedIn" },
                        { href: "https://github.com/manjunath1704", label: "GitHub" },
                    ].map(({ href, label }) => (
                        <Link key={href} href={href} target="_blank" rel="noopener noreferrer">
                            <span className="text-lg text-black hover:text-neutral-50 font-semibold uppercase border-b-2 border-black hover:border-neutral-50 transition-all duration-500 ease-in-out" aria-label={`Visit my ${label}`}>{label}</span>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

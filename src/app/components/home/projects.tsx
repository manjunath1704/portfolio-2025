"use client"
import React from 'react'
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "react-bootstrap-icons";

interface ButtonProps {
    href: string;
    text: string;
    bgColor?: string;
    textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
    href,
    text,
    bgColor = "bg-[#030712]",
    textColor = "text-white",
}) => {
    return (
        <Link href={href} onClick={(e) => e.stopPropagation()}>
            <motion.button
                // whileHover={{
                //     scale: 1.08,
                // }}
                // whileTap={{ scale: 0.95 }}
                className={`mt-3 relative overflow-hidden ${bgColor} ${textColor} flex items-center gap-2 px-6 lg:px-10 py-3 lg:py-4 rounded-full text-base lg:text-lg font-medium transition-all duration-300 
                focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2`}
            >
                {text}
                <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 100 }}>
                    <ChevronRight size={22} />
                </motion.span>
            </motion.button>
        </Link>
    );
};

type CardProps = {
    title: string;
    description: string;
    link: string;
};

const Card: React.FC<CardProps> = ({ title, description, link }) => {
    return (
        <article className='overflow-hidden rounded-xl shadow p-5 h-full'>
          <h3 className="text-2xl font-semibold text-[#000]">{title}</h3>
            <p className="text-base text-[#000] mb-4">{description}</p>
            <Link href={link} className='bg-[#000] p-3 rounded-lg text-[#fff] text-sm'>Read More</Link>
        </article>
    );
};

const cardData: CardProps[] = [
    {
        title: "Cine Quest",
        link: "/projects/cine-quest",
        description: "CineQuest is a sleek, single-page movie explorer built with modern frontend tools and best practices.",
    },
    {
        title: "Snap Stream",
        link: "/projects/snap-stream",
        description: "Snap Stream is a sleek media gallery app to explore stunning photos and videos. Powered by the Pexels API, it lets users search, browse, and download with ease.",
    },
    {
        title: "Tick Mate",
        link: "/projects/tick-mate",
        description: "This project is a simple yet elegant To-Do application built using Next.js and Tailwind CSS, enhanced with Framer Motion for smooth animations and ShadCN UI components for consistent styling.",
    },
];

const Projects = () => {
    return (
        <>
            <section className='py-20'>
                <div className='max-w-[1500px] m-auto px-10 '>
                    <div className="sm:flex">
                        <div className="sm:w-3/5">
                            <h4 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-100 mb-3 sm:mb-0'>UI that captivates users and drives seamless interactions.</h4>
                        </div>
                        <div className="sm:w-2/5">
                            <p className="text-base sm:text-xl">
                                I'm a UI Developer based in Bangalore, dedicated to crafting intuitive, engaging, and efficient digital experiences. I thrive on solving complex challenges and building solutions that make a real impact.
                            </p>
                            <Button href="/about" text="About Me" bgColor="bg-transparent border border-neutral-100" textColor="text-neutral-100" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20">
                <div className='max-w-[1500px] m-auto px-10 '>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center  pb-10">
                        <h4 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100 mb-3 sm:mb-0'>Selected works</h4>
                        <div> <Button href="/about" text="View all  works" bgColor="bg-transparent border border-neutral-100" textColor="text-neutral-100" /></div>
                    </div>
                    <ul className='grid grid-cols-3 gap-4'>
                   

                        {
                            cardData.map((card, index) => {
                                return (
                                    <li className='' key={index}>
                                        <Card {...card} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Projects
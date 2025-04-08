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
    date: string;
    description: string;
};

const Card: React.FC<CardProps> = ({ title, date, description }) => {
    return (
        <article className="relative overflow-hidden group">
            <div className="relative z-10 md:flex py-5">
                <div className="md:w-1/2 mb-3 md:mb-0">
                    <h3 className="text-2xl font-semibold text-neutral-100">{title}</h3>
                    <p className="text-base text-neutral-50 mt-3">{date}</p>
                </div>
                <div className="md:w-1/2">
                    <p className="text-lg text-neutral-100">{description}</p>
                </div>
                
            </div>
        </article>
    );
};
const cardData: CardProps[] = [
    {
        title: "Mastering UI Animations",
        date: "Feb 17, 2025",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        title: "Next.js & TypeScript",
        date: "Feb 18, 2025",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        title: "Framer Motion Effects",
        date: "Feb 19, 2025",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
];
const Blog = () => {
  return (
    <section className='py-20'>
                <div className='max-w-[1500px] m-auto px-10 '>
                    <div className="md:flex">
                        <div className="md:w-3/4">
                            <h4 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-100 mb-3 sm:mb-0'>Sometimes, I also write and share some insights</h4>
                        </div>
                        <div className="md:w-1/4 flex md:justify-end">
                           <div>
                           <Button href="/about" text="View All Insights" bgColor="bg-transparent border border-neutral-100" textColor="text-neutral-100" />
                           </div>
                        </div>
                    </div>
                    <ul className='space-y-5 mt-10 border-neutral-1'>
                        {
                            cardData.map((card, index) => {
                                return (
                                    <li className='border-b pb-5 border-neutral-1' key={index}>
                                        <Card {...card} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>
  )
}

export default Blog
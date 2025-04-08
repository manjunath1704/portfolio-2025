"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FileEarmarkRichtext, ChevronRight, ArrowUpRight } from "react-bootstrap-icons";


interface ResumeButtonProps {
    href: string;
    text: string;
    bgColor?: string;
    textColor?: string;
}

const ResumeButton: React.FC<ResumeButtonProps> = ({
    href,
    text,
    bgColor = "bg-[#030712]",
    textColor = "text-white",
}) => {
    return (
        <Link href={href} onClick={(e) => e.stopPropagation()} target="_blank">
            <motion.button
                whileHover={{
                    opacity:0.8
                }}
                whileTap={{ scale: 0.95 }}
                className={`relative overflow-hidden ${bgColor} ${textColor} flex items-center gap-2 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-medium transition-all duration-300 
                focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2`}
            >
                <span className="hidden md:block">{text}</span>
                <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 100 }}>
                    <FileEarmarkRichtext size={22} />
                </motion.span>
            </motion.button>
        </Link>
    );
};

type NavItem = {
    href: string;
    label: string;
};

const navItems: NavItem[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Me" },
    { href: "/work", label: "Works" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
];


const socialItems: NavItem[] = [
    { href: "/home", label: "Behance" },
    { href: "/about-me", label: "Dribble" },
    { href: "/work", label: "LinkedIN" },
];

const SocialMediaPlatforms = () => {
    return (
        <article className="mt-8 px-6">
            <h4 className="text-neutral-40 text-2xl">Follow me.</h4>
            <ul className="flex flex-wrap gap-4 mb-20 mt-10">
            {
                socialItems.map(({ href, label }, index) => (
                    <li key={index}>
                        <a href={href} className="flex items-center text-white hover:text-neutral-40 uppercase"><span className="text-lg md:text-xl me-2">{label}</span> <span className="text-xl"><ArrowUpRight/></span></a>
                    </li>
                ))
            }
        </ul>
        </article>
    )
}
const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
        document.body.classList.toggle("overflow-hidden", !menuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
                document.body.classList.remove("overflow-hidden");
            }
        };

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.classList.remove("overflow-hidden");
        };
    }, [menuOpen]);

    function NavigationMenu() {
        return (
            <div className="px-6 border-b-[1px] border-neutral-40 border-opacity-50">
                <ul className="space-y-4 my-8">
                    {navItems.map(({ href, label }, index) => (
                        <li key={index} className="flex justify-between items-center">
                            <Link  onClick={toggleMenu}  href={href} className="flex items-center justify-between w-full">
                                <span className="font-semibold uppercase text-neutral-0 hover:text-neutral-40 text-2xl md:text-3xl">
                                    {label}
                                </span>
                                <span className="flex justify-center items-center text-neutral-0 hover:text-neutral-40 text-2xl md:text-4xl border border-neutral-0 hover:border-neutral-40 h-10 w-10 md:h-16 md:w-16 rounded-full">
                                    <ChevronRight />
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
    return (
        <nav
    className={`fixed top-0 left-0 w-full backdrop-blur-lg z-50 px-6 py-4 flex justify-between items-center transition-all duration-500 ease-in-out ${
        menuOpen ? "bg-black" : "bg-transparent"
    }`}
>
            <Link href="/" className={`text-2xl md:text-4xl font-bold transition-all duration-500 ease-in-out  ${menuOpen ? "text-neutral-40" : "text-neutral-100" }`}>
                Portfolio.
            </Link>

            <div className="flex items-center gap-6">

    <ResumeButton href="/manjunath-kottaraki.pdf" text="Download CV" bgColor={`bg-transparent border ${menuOpen ? "border-white" : "border-neutral-100"}`} textColor={`${menuOpen ? "text-white" : "text-neutral-100"}`} />
               
               
                
                <motion.button
                    whileHover={{  opacity:0.8 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleMenu}
                    className={`relative flex flex-col justify-center items-center w-12 h-12 md:w-16 md:h-16 rounded-full  transition-all duration-300 shadow-md ${menuOpen ? "bg-white" : "bg-black"}`}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <motion.span
                        className={`absolute w-6 sm:w-8 md:w-10 h-[2px]  rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-0 bg-black" : "-translate-y-2 bg-white"
                            }`}
                    />
                    <motion.span
                        className={`absolute w-6 sm:w-8 md:w-10 h-[2px]  rounded transition-all duration-300 ${menuOpen ? "opacity-0 bg-black" : "opacity-100 bg-white"
                            }`}
                    />
                    <motion.span
                        className={`absolute w-6 sm:w-8 md:w-10 h-[2px]  rounded transition-all duration-300 ${menuOpen ? "-rotate-45 translate-y-0 bg-black" : "translate-y-2 bg-white"
                            }`}
                    />
                </motion.button>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        ref={menuRef}
                        initial={{ y: "-100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed h-screen top-[70px] md:top-[90px] inset-0 bg-black z-50 overflow-x-hidden"
                        aria-hidden={!menuOpen}
                    >
                        <div className="max-w-[1500px] m-auto px-10 pt-10">
                        <NavigationMenu />
                        <SocialMediaPlatforms/>
                        </div>
                      
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

// projects

// https://www.youtube.com/watch?v=4kJrCx1BVc8
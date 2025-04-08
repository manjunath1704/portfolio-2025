import React from 'react'
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "react-bootstrap-icons";

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
const NavigationMenu = () => {
    return (
        <ul className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
                {navItems.map(({ href, label }, index) => (
                    <li key={index} className="flex justify-between items-center">
                        <Link   href={href} className="flex items-center justify-between w-full">
                            <span className="uppercase text-neutral-0 hover:text-neutral-40 text-xs opacity-50">
                                {label}
                            </span>
                    
                        </Link>
                    </li>
                ))}
            </ul>
    );
}
const Footer = () => {
    return (
        <footer>
            <section className="py-20 bg-neutral-100">
                <div className='max-w-[1500px] m-auto px-10'>
                    <div className="md:flex justify-between mb-12">
                        <p className="text-4xl text-neutral-50 font-bold">Stay connected w/ me.</p>
                        <form className="w-full md:max-w-sm mt-4 md:mt-0">
                            <div className="flex items-center border-b border-neutral-50 py-2">
                                <input className="appearance-none bg-transparent border-none w-full text-gray-50 mr-3 py-1  leading-tight focus:outline-none" type="text" placeholder="Enter your email" aria-label="Full name" />
                                <button className="flex-shrink-0 border-transparent border-4 text-neutral-50 hover:text-neutral-70 text-sm py-1 px-2 rounded" type="button">
                                    <span className="text-xl"><ArrowUpRight /></span>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="md:flex justify-between mb-12">
                        <div>
                            <Link href="/" className="text-2xl md:text-6xl font-bold  text-neutral-40">
                                Portfolio.
                            </Link>
                            <p className="text-xl text-neutral-10 mt-5"> A UI Developer based in Bangalore</p>
                        </div>
                        <div>

                        </div>
                    </div>
                    <NavigationMenu/>
                </div>
            </section>
        </footer>
    )
}

export default Footer
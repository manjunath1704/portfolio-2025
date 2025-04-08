import React from 'react'
import AnimatedButton from '../animated/animated-button'
import Link from "next/link";
const Cta = () => {
    return (
        <section className="py-20 bg-neutral-20">
            <div className='max-w-[1500px] m-auto px-10 flex flex-col justify-center items-center gap-6'>
                <ul className='flex gap-6 mt-4'>
                    {[
                        { href: "/about", label: "About Me" },
                        { href: "/work", label: "Works" },
                        { href: "/insights", label: "Insights" },
                    ].map(({ href, label }) => (
                        <Link key={href} href={href}>
                            <span className="text-lg text-black hover:text-neutral-50 font-semibold uppercase border-b-2 border-black hover:border-neutral-50 transition-all duration-500 ease-in-out" aria-label={`Visit my ${label}`}>{label}</span>
                        </Link>
                    ))}
                </ul>
                <h5 className='text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-center text-neutral-100'>Want to create something <span className='text-neutral-50'>awesome?</span></h5>
                <div>
                    <AnimatedButton href="/contact" text="Let's Talk" />
                </div>
            </div>
        </section>
    )
}

export default Cta
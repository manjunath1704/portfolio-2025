"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { ChevronRight,ArrowRight } from "react-bootstrap-icons";

const cards = [
    { id: 1, title: "Introduction to Next.js", link: "#", thumbnail: "https://cdn.prod.website-files.com/64acf5270486f7df09fb7778/64c33cd1761d2d11e143c2cb_Work%20Image%20-%204-p-800.png" },
    { id: 2, title: "Understanding Tailwind CSS", link: "#", thumbnail: "https://cdn.prod.website-files.com/64acf5270486f7df09fb7778/64c33c55bbf8ad730a832629_Work%20Image%20-%203-p-800.png" },
    { id: 3, title: "Building a Responsive Grid", link: "#", thumbnail: "https://cdn.prod.website-files.com/64acf5270486f7df09fb7778/64c33cd1761d2d11e143c2cb_Work%20Image%20-%204-p-2000.png" },
    { id: 4, title: "Deploying with Vercel", link: "#", thumbnail: "https://cdn.prod.website-files.com/64acf5270486f7df09fb7778/64c33cd1761d2d11e143c2cb_Work%20Image%20-%204-p-800.png" },
    { id: 5, title: "Optimizing Performance", link: "#", thumbnail: "https://cdn.prod.website-files.com/64acf5270486f7df09fb7778/64c33c55bbf8ad730a832629_Work%20Image%20-%203-p-800.png" },
    { id: 6, title: "API Routes in Next.js", link: "#", thumbnail: "https://cdn.prod.website-files.com/64acf5270486f7df09fb7778/64c33cd1761d2d11e143c2cb_Work%20Image%20-%204-p-2000.png" },
];

const RecommendationSystem: React.FC = () => {
    return (

        <section className="py-20">
            <div className="md:flex md:justify-between md:items-center border-b-2 border-neutral-30 pb-8 mb-8 md:pb-12 md:mb-12">
                <h4 className="text-4xl md:text-5xl font-bold mb-4 md:mb-0">What's next ?</h4>
                <Link className='text-sm md:text-lg text-neutral-100 flex items-center hover:text-neutral-40' href="/work"><span className='me-3'>View All Insights</span> <ArrowRight className='text-3xl'/></Link>
            </div>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay:2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                // speed={4000}
                breakpoints={{
                    0: {
                        slidesPerView: 1,

                    },
                    640: {
                        slidesPerView: 2,

                    },
                }}
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div className="overflow-hidden">
                            <Link href={card.link}>
                                <div className={`rounded-xl hover:opacity-50 transition-opacity overflow-hidden aspect-video`}>
                                    <img
                                        src={card.thumbnail}
                                        alt={card.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </Link>
                            <div className="pt-4 flex justify-between items-center">
                                <h3 className="text-2xl font-semibold">{card.title}</h3>
                                <Link href={card.link}>
                                    <span className="flex justify-center items-center text-neutral-100 hover:text-neutral-40 text-2xl md:text-3xl border border-neutral-100 hover:border-neutral-40 h-8 w-8 md:h-14 md:w-14 rounded-full">
                                        <ChevronRight />
                                    </span>
                                </Link>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default RecommendationSystem;
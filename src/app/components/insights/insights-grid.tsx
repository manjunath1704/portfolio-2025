import Link from 'next/link';
import React from 'react'
const blogPosts = [
    {
        title: "Understanding JavaScript Closures",
        thumbnail: "https://cdn.prod.website-files.com/64acf5270486f7df09fb7778/64c33db68e3559214fa98e8d_Blog%20Image%20-%204-p-800.png",
        link: "https://example.com/js-closures",
        desc: "A deep dive into closures in JavaScript and how they work."
    },
    {
        title: "Mastering CSS Grid",
        thumbnail: "https://cdn.prod.website-files.com/64acf5270486f7df09fb7778/64c33d8b2af64bdc37c39d25_Blog%20Image%20-%201-p-1600.png",
        link: "https://example.com/css-grid",
        desc: "Learn how to build complex layouts with CSS Grid."
    },
    {
        title: "Getting Started with React",
        thumbnail: "https://cdn.prod.website-files.com/64acf5270486f7df09fb7778/64c33d8b2af64bdc37c39d25_Blog%20Image%20-%201-p-1600.png",
        link: "https://example.com/react-intro",
        desc: "An introduction to React and its core concepts."
    },
    {
        title: "Next.js for Beginners",
        thumbnail: "https://cdn.prod.website-files.com/64acf5270486f7df09fb7778/64c33d8b2af64bdc37c39d25_Blog%20Image%20-%201-p-1600.png",
        link: "https://example.com/nextjs-beginners",
        desc: "A beginner-friendly guide to getting started with Next.js."
    },
    {
        title: "Tailwind CSS Tips & Tricks",
        thumbnail: "https://cdn.prod.website-files.com/64acf5270486f7df09fb7778/64c33d8b2af64bdc37c39d25_Blog%20Image%20-%201-p-1600.png",
        link: "https://example.com/tailwind-tips",
        desc: "Boost your development workflow with these Tailwind CSS tips."
    },
    {
        title: "Building a Todo App in Next.js",
        thumbnail: "https://cdn.prod.website-files.com/64acf5270486f7df09fb7778/64c33d8b2af64bdc37c39d25_Blog%20Image%20-%201-p-1600.png",
        link: "https://example.com/nextjs-todo-app",
        desc: "Step-by-step guide to building a functional Todo app in Next.js."
    },
    {
        title: "Framer Motion Animations",
        thumbnail: "https://cdn.prod.website-files.com/64acf5270486f7df09fb7778/64c33d8b2af64bdc37c39d25_Blog%20Image%20-%201-p-1600.png",
        link: "https://example.com/framer-motion",
        desc: "Enhance your UI with smooth animations using Framer Motion."
    },
    {
        title: "Optimizing Web Performance",
        thumbnail: "https://cdn.prod.website-files.com/64acf5270486f7df09fb7778/64c33d8b2af64bdc37c39d25_Blog%20Image%20-%201-p-1600.png",
        link: "https://example.com/web-performance",
        desc: "Improve website speed and user experience with optimization techniques."
    },
    {
        title: "State Management in React",
        thumbnail: "https://cdn.prod.website-files.com/64acf5270486f7df09fb7778/64c33d8b2af64bdc37c39d25_Blog%20Image%20-%201-p-1600.png",
        link: "https://example.com/react-state",
        desc: "Explore different ways to manage state in React applications."
    },
    {
        title: "Deploying Next.js Apps",
        thumbnail: "https://cdn.prod.website-files.com/64acf5270486f7df09fb7778/64c33d8b2af64bdc37c39d25_Blog%20Image%20-%201-p-1600.png",
        link: "https://example.com/deploy-nextjs",
        desc: "Learn how to deploy your Next.js application step by step."
    }
];


const InsightsGrid = () => {
    return (
        <div className='max-w-[1500px] m-auto px-10 mb-20 mt-10'>
            <div className='grid grid-cols-3 gap-10'>
                <article className="col-span-3 flex gap-6 ">
                    <div className="w-3/5 rounded-xl overflow-hidden">
                        <div className="aspect-video">
                            <img className="h-full w-full object-cover object-center" src={blogPosts[0].thumbnail} alt={blogPosts[0].title} />
                        </div>
                    </div>
                    <div className="w-2/5">
                        <Link href={blogPosts[0].link}>
                            <h4 className="text-6xl font-semibold mb-3">{blogPosts[0].title}</h4>
                        </Link>
                        <p className="text-lg mb-4">{blogPosts[0].desc}</p>
                        <Link href={blogPosts[0].link} className=" font-semibold">
                            Read More
                        </Link>
                    </div>
                </article>
                {
                    blogPosts.slice(1).map((item, index) => {
                        return (
                            <article key={index}>
                                <div className='aspect-square rounded-xl overflow-hidden'>
                                    <img className='h-full w-full object-cover object-center' src={item.thumbnail} alt={item.title} />
                                </div>
                                <Link href={item.link}>
                                    <h4 className="text-2xl font-semibold mb-2 mt-3">{item.title}</h4>
                                </Link>
                                <Link href={item.link}>
                                    <p className="text-base">{item.desc}</p>
                                </Link>

                            </article>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default InsightsGrid
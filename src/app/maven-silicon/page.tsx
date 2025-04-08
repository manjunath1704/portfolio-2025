

import React from 'react'
import RecommendationSystem from '../components/project-detailed/recommendation-system';
import AnimatedButton from '../components/animated/animated-button';

const ProjectHero = () => {
    return (
        <section className="py-20 mt-[80px] flex flex-col items-start space-y-3 md:space-y-6">
            <h1 className='text-xl md:text-2xl font-medium'>Maven Silicon</h1>
            <h2 className='text-2xl sm:text-4xl md:text-6xl font-semibold '>Website design and development</h2>
            <div>
                <AnimatedButton href="https://www.maven-silicon.com/" text="Visit Website" />
            </div>
            <div className={`rounded-xl overflow-hidden aspect-video`}>
                <img
                    src="/maven-hero.jpg"
                    alt="Unleash Your Potential and Push Beyond Limits"
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    )
}

const cards = [
    { id: 1, title: "Introduction to Next.js", link: "#", thumbnail: "https://cdn.prod.website-files.com/64acf5270486f7df09fb7778/64c33cd1761d2d11e143c2cb_Work%20Image%20-%204-p-800.png" },
    { id: 2, title: "Understanding Tailwind CSS", link: "#", thumbnail: "https://cdn.prod.website-files.com/64acf5270486f7df09fb7778/64c33c55bbf8ad730a832629_Work%20Image%20-%203-p-800.png" },
    { id: 3, title: "Building a Responsive Grid", link: "#", thumbnail: "/maven-silicon/maven-silicon-a.png" },
    { id: 4, title: "Deploying with Vercel", link: "#", thumbnail: "https://cdn.prod.website-files.com/64acf5270486f7df09fb7778/64c33cd1761d2d11e143c2cb_Work%20Image%20-%204-p-800.png" },
    { id: 5, title: "Optimizing Performance", link: "#", thumbnail: "https://cdn.prod.website-files.com/64acf5270486f7df09fb7778/64c33c55bbf8ad730a832629_Work%20Image%20-%203-p-800.png" },
];
const MasanoryGrid: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {cards.map((card, index) => (
                <div
                    key={card.id}
                    className={
                        index % 3 === 2 ? "md:col-span-2" : "md:col-span-1"
                    }
                >
                    <div className="overflow-hidden">
                        <div className={`rounded-xl transition-opacity overflow-hidden ${index % 3 === 2 ? "aspect-video" : "aspect-square"}`}>
                            <img
                                src={card.thumbnail}
                                alt={card.title}
                                className="w-full h-full object-cover"
                            />

                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};



type ProjectDetail = {
    id: number;
    title: string;
    captions: string[];
};

const projectDetailsData: ProjectDetail[] = [
    {
        id: 1,
        title: "About",
        captions: [
            "This front-end development project is built on the foundation of Next.js, employing SASS, React Bootstrap, Strapi, and Framer Motion to create a dynamic and engaging web application. Next.js, a powerful framework, enables us to build interactive and server-rendered components for a fast and responsive user interface.",
            "We enhance the user experience with SASS for styling and theming. React Bootstrap streamlines UI development with pre-designed components and responsive layouts.",
            "Additionally, Framer Motion is integrated for animations that bring a delightful and interactive dimension to our website. Strapi serves as content management system (CMS), streamlining content creation, management, and integration.",
        "In summary, our project leverages the capabilities of Next.js, SASS, React Bootstrap, Strapi, and Framer Motion to deliver a modern, feature-rich, and visually appealing web application, while relying on Strapi for efficient content management and data integration."
        ]
    },
    // {
    //     id: 2,
    //     title: "Challenge",
    //     captions: [
    //         "A powerful admin panel for managing orders and products.",
    //         "Includes AG Charts for in-depth sales analysis.",
    //         "Optimized for performance with lazy loading and caching."
    //     ]
    // },
    {
        id: 3,
        title: "Learning",
        captions: [
            "Next.js Server-side rendering and static site generation",
            "Understanding routing and page structure within a Next.js application",
            "Utilizing React Bootstrap pre-built components for rapid and responsive web development",
            "Customizing React Bootstrap components and styles to match specific design requirements",
            "Understanding how to handle responsive layouts and create user-friendly interfaces",
            "Mastering the use of SASS variables, nesting, and mixins for efficient and maintainable CSS",
            "Learning about SASS functions and operations to create dynamic styles",
            "Understanding the concept of partials and imports to manage large-scale stylesheets effectively",
            "Implementing smooth and visually appealing animations and transitions",
            "Understanding the principles of animation and how to apply them effectively in web development"
        ]
    }
    
];

const ProjectDetails = ({ projectDetailsData }: { projectDetailsData: ProjectDetail[] }) => {
    return (
        <section className="py-20">
            <ul className="space-y-3 md:space-y-6">
                {projectDetailsData.map((item) => (
                    <li key={item.id} role="listitem">
                        <article>
                            <h3 className="text-4xl md:text-5xl font-semibold text-neutral-100 mb-2">{item.title}</h3>
                            <div className="space-y-2">
                                {item.captions.map((caption, idx) => (
                                    <p key={idx} className="text-sm text-neutral-100">
                                        {caption}
                                    </p>
                                ))}
                            </div>
                        </article>
                    </li>
                ))}
            </ul>
        </section>
    );
};



const MavenSilicon = () => {
    return (
        <>
            <div className='max-w-[1000px] m-auto px-10'>
                <ProjectHero />
                <ProjectDetails projectDetailsData={projectDetailsData} />
                <MasanoryGrid />
            </div>
            <div className='max-w-[1500px] m-auto px-10'>
                <RecommendationSystem />
            </div>

        </>
    )
}

export default MavenSilicon
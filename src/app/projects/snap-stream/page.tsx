

import AnimatedButton from '@/app/components/animated/animated-button';
// import RecommendationSystem from '@/app/components/project-detailed/recommendation-system';
import React from 'react'

const ProjectHero = () => {
    return (
        <section className="py-20 mt-[80px] flex flex-col items-start space-y-3 md:space-y-6">
            <h1 className='text-xl md:text-2xl font-medium'>Snap stream</h1>
            <h2 className='text-2xl sm:text-4xl md:text-6xl font-semibold '>A Stunning Image & Video Gallery</h2>
            <div>
                <AnimatedButton href="/snap-stream" text="Visit App" />
                
            </div>
            <div className={`rounded-2xl overflow-hidden aspect-video border-[#000] border-[7px]`}>
                <img
src="/snap-stream-hero.png"
alt="Unleash Your Potential and Push Beyond Limits"
                    className="w-full h-full object-cover rounded-lg object-top"  
                />
            </div>
        </section>
    )
}

const cards = [
    { id: 1, title: "Introduction to Next.js", link: "#", thumbnail: "/snap-stream-d.png" },
    { id: 2, title: "Understanding Tailwind CSS", link: "#", thumbnail: "/snap-stream-b.png" },
    { id: 3, title: "Building a Responsive Grid", link: "#", thumbnail: "/snap-stream-c.png" },
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
    title: string;
    caption: string | string[];
  };
  
  const projectDetailsData: ProjectDetail[] = [
    {
        title: "About",
        caption: "Pixplore is a modern media gallery web app that allows users to browse, search, and download high-quality images and videos powered by the Pexels API. Designed with a focus on elegance, responsiveness, and performance, Pixplore offers a seamless visual experience wrapped in a clean, minimalistic UI."
    },
    {
      title: "Tech Stack",
      caption: [
"Framework: Next.js 14 (App Router, Client Components)",
        "Styling: Tailwind CSS & ShadCN UI",
        "API: Pexels API (Images & Videos)",
        "UX Enhancements: Masonry layout, modal previews, tabbed browsing, skeleton loaders, keyboard-friendly search"
      ],
    },
    {
      title: "What I Learned",
      caption:[
        "Handling client-side hydration issues in Next.js",
        "Integrating third-party APIs with pagination and filtering",
        "Building an interactive gallery UI with modal previews and responsive grids",
        "Optimizing performance and user experience with lazy loading and conditional rendering"
      ]
    },
    {
      title: "Key Features",
      caption: [
        "Smart Search: Instantly fetch images and videos based on user input.",
        "Tabbed View: Switch between Images and Videos effortlessly using ShadCN Tabs.",
        "Live Previews: Hover to autoplay videos, and click to open in a full-screen modal.",
        "Download Support: One-click download for high-resolution media.",
        "Responsive Layout: Optimized for all devices, from mobile to desktop.",
        "Smooth Loading: Uses skeleton loaders while fetching data for an enhanced user experience.",
        "Masonry Grid: Beautiful masonry-style layout for displaying media with dynamic heights."
      ],
    },
  ];
  
  const ProjectDetails = () => {
    return (
      <section className="py-20" aria-labelledby="project-details-heading">
        <ul className="space-y-6">
          {projectDetailsData.map((item, index) => (
            <li key={index}>
              <article>
                <h3
                  id={`section-${index}`}
                  className="text-2xl md:text-3xl font-semibold text-neutral-100 mb-2"
                >
                  {item.title}
                </h3>
                {Array.isArray(item.caption) ? (
                  <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-neutral-100">
                    {item.caption.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-base md:text-lg text-neutral-100">{item.caption}</p>
                )}
              </article>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  

const SnapStream = () => {
    return (
        <>
            <div className='max-w-[1000px] m-auto px-10'>
                <ProjectHero />
                <ProjectDetails />
                <MasanoryGrid />
            </div>
            {/* <div className='max-w-[1500px] m-auto px-10'>
                <RecommendationSystem/>
            </div> */}

        </>
    )
}

export default SnapStream
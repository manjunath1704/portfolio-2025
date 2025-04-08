

import AnimatedButton from '@/app/components/animated/animated-button';
// import RecommendationSystem from '@/app/components/project-detailed/recommendation-system';
import React from 'react'

const ProjectHero = () => {
    return (
        <section className="py-20 mt-[80px] flex flex-col items-start space-y-3 md:space-y-6">
            <h1 className='text-xl md:text-2xl font-medium'>Cine quest</h1>
            <h2 className='text-2xl sm:text-4xl md:text-6xl font-semibold '>
            Your Gateway to the World of Movies         

            </h2>
            <div>
                <AnimatedButton href="/cine-quest" text="Visit App" />
                
            </div>
            <div className={`rounded-2xl overflow-hidden aspect-video border-[#000] border-[7px]`}>
                <img
src="/movie-a.png"
alt="Unleash Your Potential and Push Beyond Limits"
                    className="w-full h-full object-cover rounded-lg object-top"  
                />
            </div>
        </section>
    )
}

// const cards = [
//     { id: 1, title: "Introduction to Next.js", link: "#", thumbnail: "/snap-stream-d.png" },
//     { id: 2, title: "Understanding Tailwind CSS", link: "#", thumbnail: "/snap-stream-b.png" },
//     { id: 3, title: "Building a Responsive Grid", link: "#", thumbnail: "/snap-stream-c.png" },
//    ];
// const MasanoryGrid: React.FC = () => {
//     return (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
//             {cards.map((card, index) => (
//                 <div
//                     key={card.id}
//                     className={
//                         index % 3 === 2 ? "md:col-span-2" : "md:col-span-1"
//                     }
//                 >
//                     <div className="overflow-hidden">
//                         <div className={`rounded-xl transition-opacity overflow-hidden ${index % 3 === 2 ? "aspect-video" : "aspect-square"}`}>
//                             <img
//                                 src={card.thumbnail}
//                                 alt={card.title}
//                                 className="w-full h-full object-cover"
//                             />

//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };



type ProjectDetail = {
    title: string;
    caption: string | string[];
  };
  
  const projectDetailsData: ProjectDetail[] = [
    {
        title: "About",
       caption:"CineQuest is a sleek, single-page movie explorer built with modern frontend tools and best practices. The application allows users to browse trending and popular movies, search by keyword, and view detailed information in an elegant modal interface."   },
    {
      title: "Tech Stack",
      caption: "Tech Stack: Next.js 14, TypeScript, Tailwind CSS, ShadCN UI, TMDB API"
    },
    {
      title: "What I Learned",
      caption:[
      "Integrated a dynamic search feature that syncs input with pagination.",
      "Handled TMDB API's nested data structures for cast, crew, and related content.",
      "Resolved async data fetching and state update challenges to ensure the UI remains fluid and responsive",
      "Implemented best practices for accessibility and performance." 
      ]
    },
    {
      title: "Key Features",
      caption: [
       "Search Functionality:Users can search for movies using keywords. The query is dynamically fetched from the TMDB API and supports pagination, ensuring a smooth exploration experience."
      ,"Paginated Browsing:Users can navigate through multiple pages of movie results using intuitive Previous and Next buttons."
      ,"Interactive Modal with Details: Clicking on a movie opens a responsive modal displaying: Movie poster, release date, and overview Top 5 cast members with photos and character names Related movie suggestions with thumbnails"  
      ,"Accessibility First: The UI leverages accessible ShadCN components (built on Radix UI) with proper semantics like DialogTitle, enhancing the screen reader experience.",
      "Responsive & Clean UI:The layout is built with Tailwind CSS and scales gracefully across devices. Hover effects and subtle animations create an engaging user experience."
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
                {/* <MasanoryGrid /> */}
            </div>
            {/* <div className='max-w-[1500px] m-auto px-10'>
                <RecommendationSystem/>
            </div> */}

        </>
    )
}

export default SnapStream
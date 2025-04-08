

import AnimatedButton from '@/app/components/animated/animated-button';
// import RecommendationSystem from '@/app/components/project-detailed/recommendation-system';
import React from 'react'

const ProjectHero = () => {
  return (
    <section className="py-10 mt-[80px] flex flex-col items-start space-y-3 md:space-y-6">
      <h1 className='text-xl md:text-2xl font-medium'>Tickmate</h1>
      <h2 className='text-2xl sm:text-4xl md:text-6xl font-semibold '>A Sleek & Stunning Todo App</h2>
      <div>
        <AnimatedButton href="/tick-mate" text="Visit App" />

      </div>
      <div className={`rounded-2xl overflow-hidden aspect-video border-[#000] border-[7px]`}>
        <img
          src="/tick-mate-b.png"
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
    caption: "This project is a simple yet elegant To-Do application built using Next.js and Tailwind CSS, enhanced with Framer Motion for smooth animations and ShadCN UI components for consistent styling."
  },
  {
    title: "Tech Stack",
    caption: [
      "Next.js (App Router)",
      "Tailwind CSS",
      "Framer Motion for animations",
      "ShadCN UI components (Button, Input, Card)",
      "Lucide Icons for action buttons"
    ],
  },
  {
    title: "What I Learned",
    caption: [
      "How to integrate and customize ShadCN UI components in a Next.js project.",
      "Managing local state with TypeScript for better type safety.",
      "Handling editable content using temporary state (tempText) to allow real-time inline editing.",
      "Applying Framer Motion to list items for fluid animations during state changes."]
  },
  {
    title: "Key Features",
    caption: [
      "Add Task: Users can input and add tasks with a click or enter key.",
      "Edit Task: Each task can be edited inline. The task switches to an input field, and changes can be confirmed via a check button.",
      "Remove Task: Tasks can be easily deleted using the trash icon.",
      "Smooth Animations: Task transitions (enter/exit/edit) are powered by Framer Motion, offering a sleek user experience.",
      "Responsive UI: Fully responsive and mobile-friendly design using Tailwind utility classes."
    ],
  },
];

const ProjectDetails = () => {
  return (
    <section className="py-10" aria-labelledby="project-details-heading">
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
        <RecommendationSystem />
      </div> */}

    </>
  )
}

export default SnapStream
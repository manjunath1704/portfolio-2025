import React from 'react'
import RecommendationSystem from '../components/insights/recommendation-system';

const ProjectHero = () => {
  return (
    <section className="py-20 mt-[80px] flex flex-col items-start space-y-3 md:space-y-6">
      <h2 className='text-2xl sm:text-4xl md:text-6xl font-semibold '>Unleash Your Potential and Push Beyond Limits</h2>

      <div className={`rounded-xl overflow-hidden aspect-video`}>
        <img
          src="https://cdn.prod.website-files.com/64acf5270486f7df09fb7778/64c33c2c4362049eef8f4daf_Work%20Image%20-%202-p-1080.png"
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
  { id: 3, title: "Building a Responsive Grid", link: "#", thumbnail: "https://cdn.prod.website-files.com/64acf5270486f7df09fb7778/64c33cd1761d2d11e143c2cb_Work%20Image%20-%204-p-2000.png" },
  { id: 4, title: "Deploying with Vercel", link: "#", thumbnail: "https://cdn.prod.website-files.com/64acf5270486f7df09fb7778/64c33cd1761d2d11e143c2cb_Work%20Image%20-%204-p-800.png" },
  { id: 5, title: "Optimizing Performance", link: "#", thumbnail: "https://cdn.prod.website-files.com/64acf5270486f7df09fb7778/64c33c55bbf8ad730a832629_Work%20Image%20-%203-p-800.png" },
];


const projectDetailsData = [
  {
    title: "About",
    caption: "At Sportly, we believe in making fitness fun and convenient. That's why we've developed a cutting-edge mobile app and dashboard that allows you to effortlessly track and manage your sport activities. Whether you're an avid runner, a devoted cyclist, or a fitness enthusiast, Sportly has got you covered! With Sportly, you'll enjoy a user-friendly interface that empowers you to log your workouts, set personal goals, and monitor your achievements. Whether you prefer running, cycling, or engaging in various sports, our app provides detailed insights into your performance, distance covered, calories burned, and much more."
  },
  {
    title: "Challenge",
    caption: "Our esteemed clients, who are passionate about maintaining an active lifestyle, inspired us to create Sportly. They sought an all-in-one solution that could seamlessly monitor their progress, provide insightful data, and keep them motivated throughout their fitness journey. We listened, and we delivered."
  },
  {
    title: "Learnings",
    caption: "To ensure a holistic experience, Sportly also offers a personalized dashboard accessible from any device. This dashboard gives you an overview of your progress, allowing you to analyze your data, track trends, and identify areas for improvement. You can even connect with fellow fitness enthusiasts, share your accomplishments, and embark on friendly challenges together!"
  },
  {
    title: "Results",
    caption: "We understand that motivation plays a crucial role in maintaining an active lifestyle. That's why we've incorporated exciting features like badges, rewards, and challenges within Sportly. Achieve your goals and unlock various milestones to earn recognition and stay motivated on your fitness journey. So, whether you're a beginner looking to kickstart your fitness routine or a seasoned athlete striving for new personal bests, Sportly is your ideal companion. Download the app today and experience the joy of tracking your sport activity like never before!"
  },
]

const ProjectDetails = () => {
  return (
    <section className="py-20">
      <ul className='space-y-3 md:space-y-6'>
        {
          projectDetailsData.map((item, index) => {
            return (
              <li key={index}>
                <article>
                  <h3 className="text-4xl md:text-5xl font-semibold text-neutral-100 mb-2">{item.title}</h3>
                  <p className="text-base md:text-lg text-neutral-100">{item.caption}</p>
                </article>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}


const InsightsDetailed = () => {
  return (
    <>
      <div className='max-w-[1000px] m-auto px-10'>
        <ProjectHero />
        <ProjectDetails />
      </div>
      <div className='max-w-[1500px] m-auto px-10'>
        <RecommendationSystem />
      </div>

    </>
  )
}

export default InsightsDetailed
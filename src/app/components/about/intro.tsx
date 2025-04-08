import React from 'react'
type ExperienceCardProps = {
    yearTrack: string;
    duration: string;
    designation: string;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ yearTrack, duration, designation }) => {
    return (
        <article>
            <header className='mb-4'>
                <h2 className="text-lg text-neutral-400">{yearTrack}</h2>
            </header>
            <p className="text-6xl font-bold text-neutral-900 mb-2">{duration}</p>
            <p className="text-lg text-neutral-500">{designation}</p>
        </article>
    );
};
const experienceData: ExperienceCardProps[] = [
    { yearTrack: "2020 - 2024", duration: "4 Years", designation: "as a UI Developer at Exdera" },
    { yearTrack: "2024 - current", duration: "1+ Years", designation: "as a UI Developer at QS Quacquarelli Symonds" },
];
const ExperienceHistory = () => {
    return (
        <section className="py-20">
            <div className="max-w-[1500px] m-auto px-10">
                <ul className='grid grid-cols-2 md:grid-cols-3'>
                {experienceData.map((experience, index) => (
                <ExperienceCard key={index} {...experience} />
            ))}
                </ul>
            </div>
        </section>
    )
}
const Intro = () => {
    return (
        <>
            <section className="pt-20 pb-10">
                <div className='max-w-[1500px] m-auto px-10 mt-[150px]'>
                    <h5 className='text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-center text-neutral-100'><span className='text-neutral-40'>About me</span>, a UI Developer living in Bangalore</h5>
                    <p className="text-lg sm:text-2xl text-center my-4 w-11/12 m-auto"> As a UI Developer with over 4+ years of experience, I specialize in creating intuitive and user-centered interfaces for a wide range of digital products and experiences.</p>
                </div>
            </section>
            <section className="py-10">
                <div className='max-w-[1500px] m-auto px-10'>
                    <div className="rounded-xl overflow-hidden aspect-video">
                        <img src="./manjunath-edited.jpg" className='w-full h-full object-cover object-center' alt="" />
                    </div>
                </div>
            </section>
            <section className="py-10">
                <div className='max-w-[1500px] m-auto px-10'>
                    <div>
                        <div>
                            <h4 className="text-3xl md:text-6xl font-bold">Need seamless, high-performing interfaces? I'm the UI developer for the job.</h4>
                        </div>
                        <div className="md:flex gap-5 mt-8">
                            <div className='md:w-1/2'>
                                <p className='text-base md:text-lg'>With a collaborative mindset and a passion for crafting seamless user experiences, I work closely with stakeholders to understand their requirements and objectives, delivering tailored UI solutions that enhance usability, accessibility, and performance.</p>
                            </div>
                            <div className='md:w-1/2'>
                                <p className='text-base md:text-lg'>Outside of work, I explore the latest UI trends, refine my skills, and work on personal projects.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ExperienceHistory/>
        </>
    )
}

export default Intro
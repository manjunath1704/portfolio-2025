"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
const projects = [
  { id: 1, src: "https://cdn.prod.website-files.com/64aac2cf3e57b0b94358bac8/64c33b18efe376c79c59240f_Work%20Image%20-%202-p-800.png", alt: "Project 1" },
  { id: 2, src: "https://cdn.prod.website-files.com/64aac2cf3e57b0b94358bac8/64c33b18c8b5a5a8b337887b_Work%20Image%20-%201-p-800.png", alt: "Project 2" },
  { id: 3, src: "https://cdn.prod.website-files.com/64aac2cf3e57b0b94358bac8/64c33b18efe376c79c59240f_Work%20Image%20-%202-p-800.png", alt: "Project 3" },
  { id: 4, src: "https://cdn.prod.website-files.com/64aac2cf3e57b0b94358bac8/64c33b18efe376c79c59240f_Work%20Image%20-%202-p-800.png", alt: "Project 4" },
  { id: 5, src: "https://cdn.prod.website-files.com/64aac2cf3e57b0b94358bac8/64c33b18efe376c79c59240f_Work%20Image%20-%202-p-800.png", alt: "Project 5" },
  { id: 1, src: "https://cdn.prod.website-files.com/64aac2cf3e57b0b94358bac8/64c33b18efe376c79c59240f_Work%20Image%20-%202-p-800.png", alt: "Project 1" },
  { id: 2, src: "https://cdn.prod.website-files.com/64aac2cf3e57b0b94358bac8/64c33b18efe376c79c59240f_Work%20Image%20-%202-p-800.png", alt: "Project 2" },
  { id: 3, src: "https://cdn.prod.website-files.com/64aac2cf3e57b0b94358bac8/64c33b18efe376c79c59240f_Work%20Image%20-%202-p-800.png", alt: "Project 3" },
  { id: 4, src: "https://cdn.prod.website-files.com/64aac2cf3e57b0b94358bac8/64c33b18efe376c79c59240f_Work%20Image%20-%202-p-800.png", alt: "Project 4" },
  { id: 5, src: "https://cdn.prod.website-files.com/64aac2cf3e57b0b94358bac8/64c33b18efe376c79c59240f_Work%20Image%20-%202-p-800.png", alt: "Project 5" },
  { id: 1, src: "https://cdn.prod.website-files.com/64aac2cf3e57b0b94358bac8/64c33b18efe376c79c59240f_Work%20Image%20-%202-p-800.png", alt: "Project 1" },
  { id: 2, src: "https://cdn.prod.website-files.com/64aac2cf3e57b0b94358bac8/64c33b18efe376c79c59240f_Work%20Image%20-%202-p-800.png", alt: "Project 2" },
  { id: 3, src: "https://cdn.prod.website-files.com/64aac2cf3e57b0b94358bac8/64c33b18efe376c79c59240f_Work%20Image%20-%202-p-800.png", alt: "Project 3" },
  { id: 4, src: "https://cdn.prod.website-files.com/64aac2cf3e57b0b94358bac8/64c33b18efe376c79c59240f_Work%20Image%20-%202-p-800.png", alt: "Project 4" },
  { id: 5, src: "https://cdn.prod.website-files.com/64aac2cf3e57b0b94358bac8/64c33b18efe376c79c59240f_Work%20Image%20-%202-p-800.png", alt: "Project 5" },
];

const FeaturedProjects: React.FC = () => {
  return (

    <motion.section
    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 5.5 }}
    className="w-full px-4 py-10">
      <Swiper
        modules={[ Autoplay]}
        spaceBetween={30}
        loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false, 
          }}
          speed={4000} 
          breakpoints={{
            0:{
              slidesPerView: 1,
              
            },
            640: {
              slidesPerView: 2,
             
            },
            768: {
              slidesPerView: 3,
              
            },
            1024: {
              slidesPerView: 4,
             
            },
          }}
      >
        {projects.map((project,index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="aspect-square">
              <img
                src={project.src}
                alt={project.alt}
                className="h-full w-full object-center object-cover rounded-xl shadow-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
};

export default FeaturedProjects;

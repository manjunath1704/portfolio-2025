import Link from "next/link";
import { ChevronRight } from "react-bootstrap-icons";
const cards = [
    { id: 1, title: "Introduction to Next.js", link: "#", thumbnail: "https://cdn.prod.website-files.com/64acf5270486f7df09fb7778/64c33cd1761d2d11e143c2cb_Work%20Image%20-%204-p-800.png" },
    { id: 2, title: "Understanding Tailwind CSS", link: "#", thumbnail: "https://cdn.prod.website-files.com/64acf5270486f7df09fb7778/64c33c55bbf8ad730a832629_Work%20Image%20-%203-p-800.png" },
    { id: 3, title: "Building a Responsive Grid", link: "#", thumbnail: "https://cdn.prod.website-files.com/64acf5270486f7df09fb7778/64c33cd1761d2d11e143c2cb_Work%20Image%20-%204-p-2000.png" },
    { id: 4, title: "Deploying with Vercel", link: "#", thumbnail: "https://cdn.prod.website-files.com/64acf5270486f7df09fb7778/64c33cd1761d2d11e143c2cb_Work%20Image%20-%204-p-800.png" },
    { id: 5, title: "Optimizing Performance", link: "#", thumbnail: "https://cdn.prod.website-files.com/64acf5270486f7df09fb7778/64c33c55bbf8ad730a832629_Work%20Image%20-%203-p-800.png" },
    { id: 6, title: "API Routes in Next.js", link: "#", thumbnail: "https://cdn.prod.website-files.com/64acf5270486f7df09fb7778/64c33cd1761d2d11e143c2cb_Work%20Image%20-%204-p-2000.png" },
  ];
  const Grid: React.FC = () => {
    return (
        <section className="py-20">
            <div className='max-w-[1500px] m-auto px-10'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={
                index % 3 === 2 ? "md:col-span-2" : "md:col-span-1"
              }
            >
              <div className="overflow-hidden">
              <Link href={card.link}>
              <div className={`rounded-xl hover:opacity-50 transition-opacity overflow-hidden ${index%3 === 2 ? "aspect-video" : "aspect-square"}`}>
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
                   <span className="flex justify-center items-center text-neutral-100 hover:text-neutral-40 text-2xl md:text-4xl border border-neutral-100 hover:border-neutral-40 h-10 w-10 md:h-16 md:w-16 rounded-full">
                                    <ChevronRight />
                                </span>
                                </Link>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
    );
  };

  export default Grid;
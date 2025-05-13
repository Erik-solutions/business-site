import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    title: "HTML2",
    h1: "H1",
    h2: "H2",
    h3: "H3",
    p: "P",
    color: "text-blue-700",
  },
  {
    title: "Tech Stark",
    h1: "Python",
    h2: "JavaScript",
    h3: "Scala",
    p: "Java",
    color: "text-purple-700",
  },
  {
    title: "Solution",
    h1: "Web Build",
    h2: "Software Solutions",
    h3: "Data Systems",
    p: "Machine Learning",
    color: "text-green-700",
  },
];

export  const TechnologyStack=() => {
  return (
    <>
      {/* Mobile View: Swiper */}
      <div className="block md:hidden w-full max-w-md mx-auto p-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="rounded-2xl overflow-hidden shadow-lg "
        >
         
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="p-6 text-center space-y-2">
              <h1 className={`text-2xl font-bold ${slide.color}`}>{slide.title}</h1>
              <h1 className=" font-semibold">{slide.h1}</h1>
              <h2 className=" font-medium">{slide.h2}</h2>
              <h3 className="">{slide.h3}</h3>
              <p className="text-gray-600">{slide.p}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop/Tablet View: Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 p-4 my-6 max-w-6xl mx-auto">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-lg py-2  text-center space-y-2"
          >
            <h1 className={` font-bold ${slide.color}`}>{slide.title}</h1>
            <h1 className=" font-semibold">{slide.h1}</h1>
            <h2 className=" font-medium">{slide.h2}</h2>
            <h3 className="">{slide.h3}</h3>
            <p className=" text-gray-600">{slide.p}</p>
          </div>
        ))}
      </div>
    </>
  );
}




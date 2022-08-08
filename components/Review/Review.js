import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const Review = () => {
  return (
    <div className=" my-20">
      <p className=" text-center font-extrabold text-lg text-red-500">
        Reviews
      </p>
      <h1 className=" text-3xl text-gray-800 text-center mb-10 font-semibold">
        Why Our Clients Choose Us
      </h1>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className=" flex items-center justify-center flex-col">
            <Image src="/Quote.png" alt="Quote" width={40} height={40} />
            <p className=" my-5 mx-5 max-w-5xl text-center text-lg">
              The Food we had enjoyed at the time of dinner. It was really
              delicious taste with great quality, everything had unique taste
              which we had ordered, nice packaging and services from the
              delivery man, we found nothing bad about this Food Or Website.
            </p>
            <div className=" flex flex-col my-3 items-center">
              <Image src="/user-1.png" alt="User" width={60} height={60} />
              <span className=" mb-6 text-gray-600 font-bold">Teacher</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex items-center justify-center flex-col">
            <Image src="/Quote.png" alt="Quote" width={40} height={40} />
            <p className=" my-5 mx-5 max-w-5xl text-center text-lg">
              The Food we had enjoyed at the time of dinner. It was really
              delicious taste with great quality, everything had unique taste
              which we had ordered, nice packaging and services from the
              delivery man, we found nothing bad about this Food Or Website.
            </p>
            <div className=" flex flex-col my-3 items-center">
              <Image src="/user-2.png" alt="User" width={60} height={60} />
              <span className=" mb-6 text-gray-600 font-bold">Journalist</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;

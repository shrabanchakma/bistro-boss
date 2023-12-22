import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <>
      <SectionTitle
        heading={"order online"}
        subHeading={"From 11:00am to 10:00pm"}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} className="w-full" alt="" />
          <p className="text-white uppercase text-center text-5xl -mt-20">
            salads
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} className="w-full" alt="" />
          <p className="text-white uppercase text-center text-5xl -mt-20">
            soups
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} className="w-full" alt="" />
          <p className="text-white uppercase text-center text-5xl -mt-20">
            pizzas
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} className="w-full" alt="" />
          <p className="text-white uppercase text-center text-5xl -mt-20">
            desserts
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} className="w-full" alt="" />
          <p className="text-white uppercase text-center text-5xl -mt-20">
            salads
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Category;

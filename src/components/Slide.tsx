import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/scss";
// import "swiper/scss/navigation";
// import "swiper/scss/pagination";
import "./Slide.scss";

const Slide = (props) => (
  <div className="appSubslide">
    {/* <div className="appSlide__startYear">2015</div> */}
    {/* <div className="appSlide__endYear">2022</div> */}
    <Swiper
      // @TODO: pagination only for mobile
      modules={[Navigation]}
      spaceBetween={80}
      slidesPerView={3}
      navigation={{
        prevEl: ".appSubslide__buttonPrev",
        nextEl: ".appSubslide__buttonNext",
        disabledClass: "appSubslide__button--disabled",
      }}
      watchOverflow={false}
    >
      {props.data.items.map(({ year, text }, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="appSubslide__title">{year}</div>
            <div className="appSubslide__text">{text}</div>
          </SwiperSlide>
        );
      })}
    </Swiper>
    <div className="appSubslide__buttonPrev"></div>
    <div className="appSubslide__buttonNext"></div>
  </div>
);

export default Slide;

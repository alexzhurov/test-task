import { Navigation, Pagination } from "swiper/modules";
import { useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slide.scss";

const Slide = (props) => {
  const uniqueId = crypto.randomUUID(); // Generate and store the unique ID

  return (
    <div className="appSubslide">
      {/* <div className="appSlide__startYear">2015</div> */}
      {/* <div className="appSlide__endYear">2022</div> */}
      <Swiper
        // @TODO: pagination only for mobile
        modules={[Navigation]}
        spaceBetween={80}
        slidesPerView={3}
        navigation={{
          prevEl: `[data-id="prev_${uniqueId}"`,
          nextEl: `[data-id="next_${uniqueId}"`,
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
      <div
        className={`appSubslide__buttonPrev`}
        data-id={`prev_${uniqueId}`}
      ></div>
      <div
        className={`appSubslide__buttonNext`}
        data-id={`next_${uniqueId}`}
      ></div>
    </div>
  );
};

export default Slide;

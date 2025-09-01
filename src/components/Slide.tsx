import { Navigation, Pagination } from "swiper/modules";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slide.scss";
import { IDataItem } from "../App";

const Slide: FC<{ data: IDataItem }> = ({data}) => {
  const uniqueId = crypto.randomUUID(); // Generate and store the unique ID

  console.log(data);
  return (
    <div className="appSubslide">
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
        {data.items.map(({ year, text }, index) => {
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

import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/scss";
// import "swiper/scss/navigation";
// import "swiper/scss/pagination";
import "./Slide.scss";

const Slide = () => (
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
      <SwiperSlide>
        <div className="appSubslide__title">2015</div>
        <div className="appSubslide__text">
          13 сентября — частное солнечное затмение, видимое в Южной Африке и
          части Антарктиды
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="appSubslide__title">2016</div>
        <div className="appSubslide__text">
          Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных
          галактик, получившую обозначение GN-z11
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="appSubslide__title">2017</div>
        <div className="appSubslide__text">
          Компания Tesla официально представила первый в мире электрический
          грузовик Tesla Semi
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="appSubslide__title">2018</div>
        <div className="appSubslide__text">
          13 сентября — частное солнечное затмение, видимое в Южной Африке и
          части Антарктиды
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="appSubslide__title">2018</div>
        <div className="appSubslide__text">
          13 сентября — частное солнечное затмение, видимое в Южной Африке и
          части Антарктиды
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="appSubslide__title">2018</div>
        <div className="appSubslide__text">
          13 сентября — частное солнечное затмение, видимое в Южной Африке и
          части Антарктиды
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="appSubslide__title">2018</div>
        <div className="appSubslide__text">
          13 сентября — частное солнечное затмение, видимое в Южной Африке и
          части Антарктиды
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="appSubslide__title">2018</div>
        <div className="appSubslide__text">
          13 сентября — частное солнечное затмение, видимое в Южной Африке и
          части Антарктиды
        </div>
      </SwiperSlide>
    </Swiper>
    <div className="appSubslide__buttonPrev"></div>
    <div className="appSubslide__buttonNext"></div>
  </div>
);

export default Slide;

import { Component } from "react";
import {
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
  EffectFade,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/scss/effect-fade";

import Slide from "./components/Slide";
import data, { IDataItem } from "./data/index";

interface IAppComponentState {
  uniqueId: string;
  swiperIndx: number;
  swiperLength: number;
  minYear: number;
  maxYear: number;
  data: IDataItem[];
}

class App extends Component<{}, IAppComponentState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      swiperIndx: 1,
      swiperLength: data.length,
      minYear: 0,
      maxYear: 0,
      data,
      uniqueId: crypto.randomUUID(), // Generate and store the unique ID
    };
  }

  formatSwiperIndx(indx: number): string {
    return indx < 10 ? `0${indx}` : `${indx}`;
  }
  getMinYear(dataIndx: number): number {
    return Math.min(...this.state.data[dataIndx].items.map(({ year }) => year));
  }
  getMaxYear(dataIndx: number): number {
    return Math.max(...this.state.data[dataIndx].items.map(({ year }) => year));
  }

  override render() {
    return (
      <div className="appSlider">
        <div className="appSlider__title">
          <div className="appSlider__titleText">
            Исторические <br />
            даты
          </div>
        </div>
        <div className="appSlider__years">
          <div className="appSlider__yearsMin">{this.state.minYear}</div>
          <div className="appSlider__yearsMax">{this.state.maxYear}</div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
          className="appSlider__swiper"
          slidesPerView={1}
          simulateTouch={false}
          effect="fade"
          speed={500}
          fadeEffect={{ crossFade: true }}
          navigation={{
            prevEl: `[data-id="prev_${this.state.uniqueId}"`,
            nextEl: `[data-id="next_${this.state.uniqueId}"`,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: false,
            el: `[data-id="pagination_${this.state.uniqueId}"`,
            type: "bullets",
            horizontalClass: "appSlider__paginationRadial",
            bulletClass: "appSlider__bulletBox",
            bulletActiveClass: "appSlider__bullet--active",
            renderBullet: (index, className) => {
              return (
                `<div class="${className}" style="--bullet-n: ${index};">` +
                `<div class="appSlider__bullet">` +
                (index + 1) +
                "</div>" +
                `<div class="appSlider__sphere">` +
                this.state.data[index].sphere +
                "</div>" +
                "</div>"
              );
            },
          }}
          onSwiper={({ slides }) => {
            this.setState({
              swiperLength: slides.length,
              minYear: this.getMinYear(0),
              maxYear: this.getMaxYear(0),
            });
          }}
          onSlideChange={({ activeIndex }) => {
            this.setState({
              swiperIndx: activeIndex + 1,
              minYear: this.getMaxYear(activeIndex),
              maxYear: this.getMinYear(activeIndex),
            });
          }}
        >
          {this.state.data.map((data, index) => (
            <SwiperSlide key={index}>
              <Slide data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className={`appSlider__pagination`}
          style={{
            "--swiper-slides": this.state.swiperLength,
            "--swiper-indx": this.state.swiperIndx,
          }}
          data-indx={`${this.state.swiperIndx}`}
          data-id={`pagination_${this.state.uniqueId}`}
        ></div>
        <div className="appSlider__nav">
          <span className="appSlider__navInfo">
            {this.formatSwiperIndx(this.state.swiperIndx)}/
            {this.formatSwiperIndx(this.state.swiperLength)}
          </span>
          <div className="appSlider__buttons">
            <div
              className={`appSlider__buttonPrev`}
              data-id={`prev_${this.state.uniqueId}`}
            ></div>
            <div
              className={`appSlider__buttonNext`}
              data-id={`next_${this.state.uniqueId}`}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

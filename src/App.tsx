import { Component, useState } from "react";
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

    interface AppComponentState {
      swiperIndx: number;
      swiperLength: number;
      minYear: number;
      maxYear: number;
      data: {
        sphere:string;
        items:{
          year:number;
          text:string
        }[]
      }[]
    }

class App extends Component<{}, AppComponentState> {
  constructor(props: {}) {
    super(props);
    const data = [
        {
          sphere: "Технологии",
          items: [
            {
              year: 1980,
              text: "Sinclair Research выпускает домашний компьютер ZX80",
            },
            {
              year: 1982,
              text: "Появился домашний компьютер ZX S80 выпущенный компанией Sinclair Research",
            },
            { year: 1983, text: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem." },
            { year: 1984, text: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem." },
            { year: 1985, text: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem." },
            { year: 1986, text: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem." },
          ],
        },
        {
          sphere: "Кино",
          items: [
            {
              year: 1987,
              text: "«Хищник»/Predator, США (реж. Джон Мактирнан)",
            },
            {
              year: 1988,
              text: "«Кто подставил кролика Роджера»/Who Framed Roger Rabbit, США (реж. Роберт Земекис)",
            },
            {
              year: 1989,
              text: "«Назад в будущее 2»/Black To The Future 2, США (реж. Коберт Земекис)",
            },
            {
              year: 1990,
              text: "«Крепкий ореше 2»/Die Hard 2, США (реж. Ренни Харлин)",
            },
            {
              year: 1991,
              text: "«Семейка Аддамс»/The Addams Family, США (реж. Барри Зонненфельд)",
            },
          ],
        },

        {
          sphere: "Литература",
          items: [
            {
              year: 1992,
              text: "Нобелевская премия по литературе – Дерек Уолкотт, «За Блестящий образец карибского эпоса в 64 разделах»",
            },
            { year: 1994, text: "«Бессонницы» – роман Стивена Кинга." },
            {
              year: 1995,
              text: "Нобелевская премия по литературе – Шеймас Хини",
            },
            { year: 1997, text: "В Венеции" },
          ],
        },
        {
          sphere: "Искусство",
          items: [
            {
              year: 1999,
              text: "премьера балета «Золушка» в постановке Жан-Кристофа Майо, сценография Эрнеста Пиньона",
            },
            { year: 2000, text: "возобновление издания журнала «Театр»" },
            {
              year: 2002,
              text: "премьера трилогии Тома Стоппарда «Берег Утопии», Королевский национальный театра, Лондон",
            },
            { year: 2003, text: "В Венеции «Фениче»" },
            {
              year: 2004,
              text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis cumque perspiciatis",
            },
          ],
        },
        {
          sphere: "Спорт",
          items: [
            {
              year: 2006,
              text: "Баскетбольный клуб ЦСКА стал победителем национального первества России",
            },
            {
              year: 2008,
              text: "с 8 по 24 Августа в Пекине прошли летние олимпийские игры",
            },
            {
              year: 2010,
              text: "13-28 февраля в Ванкувере: Зимние Олимпийские игры 2010",
            },
            { year: 2012, text: "2 августа – Летние Олимпийские игры." },
            { year: 2014, text: "XXII зимние Олимпийские игры (Сочи, Россия)" },
          ],
        },
        {
          sphere: "Наука",
          items: [
            {
              year: 2015,
              text: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
            },
            {
              year: 2016,
              text: "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
            },
            {
              year: 2017,
              text: "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
            },
            {
              year: 2018,
              text: "Старт космического аппарата Solar Probe Plus, предназначенного для изучения Солнца",
            },
            {
              year: 2019,
              text: "Google объявил о создании 53-кубитного квантового компьютера.",
            },
            {
              year: 2020,
              text: "Корабль Crew Dragon вернулся на землю из первого пилотируемого полёта",
            },
            {
              year: 2021,
              text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis cumque perspiciatis",
            },
            {
              year: 2022,
              text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis cumque perspiciatis",
            },
          ],
        },
      ]
    this.state = {
      swiperIndx: 1,
      swiperLength: data.length,
      minYear: 0,
      maxYear: 0,
      data
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
  setYears(activeSlideIndx: number): void {
    const durationMs: number = 1000;
    const prevMinYear = this.state.minYear;
    const prevMaxYear = this.state.maxYear;

    const minYear = this.getMinYear(activeSlideIndx);
    const maxYear = this.getMaxYear(activeSlideIndx);

    const count = Math.abs(minYear - prevMinYear);
    const delay = Math.floor(durationMs / count);
    console.log(activeSlideIndx, delay, count, prevMinYear, minYear);

    let myInterval = setInterval(() => {
      console.log(delay, count, prevMinYear, minYear, this);
      this
    }, delay);
    setTimeout(() => {
      clearInterval(myInterval);
      console.log("Interval stopped.");
    }, durationMs);

    this.setState({ minYear, maxYear });
  }

  override render() {
    return (
      // @TODO:
      // сверстать основную сетку
      // + navigation - вывести номер слайда
      // + navigation - форматировать номер слайда до вида (01/06)
      // + pagination - докопаться до стилизации
      // + pagination - сделать круг с симметричным динамическим позиционированием
      // + pagination - добавить анимацию
      // + navigation - стилизовать
      // + swiper       - вывести рендер данных из JSON
      // + NUMBERS      - стилизовать числа(2015 2022)
      //   NUMBERS      - добавить пересчет годов(2015 2022)
      // + pagination   - убрать кручение при первом отображении
      //

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
            prevEl: ".appSlider__buttonPrev",
            nextEl: ".appSlider__buttonNext",
          }}
          pagination={{
            clickable: true,
            dynamicBullets: false,
            el: ".appSlider__pagination",
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
        ></div>
        <div className="appSlider__nav">
          <span className="appSlider__navInfo">
            {this.formatSwiperIndx(this.state.swiperIndx)}/
            {this.formatSwiperIndx(this.state.swiperLength)}
          </span>
          <div className="appSlider__buttons">
            <div className="appSlider__buttonPrev"></div>
            <div className="appSlider__buttonNext"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

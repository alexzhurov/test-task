import { useState } from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

import Slide from "./components/Slide.tsx";

const a = ["Технологии", "Кино", "Литература", "Искусство", "Спорт", "Наука"];
const data = [
  [
    { year: 1980, text: "Sinclair Research выпускает домашний компьютер ZX80" },
    {
      year: 1982,
      text: "Появился домашний компьютер ZX S80 выпущенный компанией Sinclair Research",
    },
    { year: 1983, text: "" },
    { year: 1984, text: "" },
    { year: 1985, text: "" },
    { year: 1986, text: "" },
  ],
  [
    { year: 1987, text: "«Хищник»/Predator, США (реж. Джон Мактирнан)" },
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
  [
    {
      year: 1992,
      text: "Нобелевская премия по литературе – Дерек Уолкотт, «За Блестящий образец карибского эпоса в 64 разделах»",
    },
    { year: 1994, text: "«Бессонницы» – роман Стивена Кинга." },
    { year: 1995, text: "Нобелевская премия по литературе – Шеймас Хини" },
    { year: 1997, text: "В Венеции" },
  ],
  [
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
  [
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
  [
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
];
const App = () => {
  const formatSwiperIndx = (indx: number): string =>
    indx < 10 ? `0${indx}` : `${indx}`;
  const [swiperIndx, setSwiperIndx] = useState(formatSwiperIndx(1));
  const [swiperLength, setSwiperLength] = useState(formatSwiperIndx(0));
  return (
    // @TODO:
    // сверстать основную сетку
    // + navigation - вывести номер слайда
    // + navigation - форматировать номер слайда до вида (01/06)
    // + pagination - докопаться до стилизации
    // pagination - сделать круг с симметричным динамическим позиционированием
    // pagination - добавить анимацию
    // navigation - стилизовать

    <div className="appSlider">
      <div className="appSlider__title">
        <div className="appSlider__titleText">
          Исторические <br />
          даты
        </div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className="appSlider__swiper"
        slidesPerView={1}
        simulateTouch={false}
        navigation={{
          // disabledClass: "TODO",
          prevEl: ".appSlider__buttonPrev",
          nextEl: ".appSlider__buttonNext",
        }}
        pagination={{
          clickable: true,
          // dynamicBullets: true,
          dynamicBullets: false,
          el: ".appSlider__pagination",
          type: "bullets",
          // type: "custom",
          // @TODO: check if needed
          horizontalClass: "appSlider__paginationRadial",
          bulletClass: "appSlider__bullet",
          dynamicBullets: true,
          dynamicMainBullets: 4,
          renderBullet: (index, className) => {
            return `<span class="${className}">` + (index + 1) + "</span>";
          },
          // renderCustom: (swiper, current, total) => {
          // return current + " of " + total;
          // },
        }}
        onSwiper={({ slides }) => {
          setSwiperLength(formatSwiperIndx(slides.length));
        }}
        onSlideChange={({ activeIndex }) => {
          setSwiperIndx(formatSwiperIndx(activeIndex + 1));
        }}
        // wrapperClass={"appSlider"}
      >
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
      </Swiper>
      <div className="appSlider__paginationContainer">
        <div className="appSlider__pagination"></div>
      </div>
      <div className="appSlider__nav">
        <span className="appSlider__navInfo">
          {swiperIndx}/{swiperLength}
        </span>
        <div className="appSlider__buttons">
          <div className="appSlider__buttonPrev"></div>
          <div className="appSlider__buttonNext"></div>
        </div>
      </div>
    </div>
  );
};

export default App;

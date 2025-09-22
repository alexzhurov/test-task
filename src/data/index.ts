export interface IDataItem {
  sphere: string;
  items: { year: number; text: string }[];
}
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
      {
        year: 1983,
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem.",
      },
      {
        year: 1984,
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem.",
      },
      {
        year: 1985,
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem.",
      },
      {
        year: 1986,
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem.",
      },
    ],
  },
  {
    sphere: "Кино",
    items: [
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
  },

  {
    sphere: "Литература",
    items: [
      {
        year: 1992,
        text: "Нобелевская премия по литературе – Дерек Уолкотт, «За Блестящий образец карибского эпоса в 64 разделах»",
      },
      { year: 1994, text: "«Бессонницы» – роман Стивена Кинга." },
      { year: 1995, text: "Нобелевская премия по литературе – Шеймас Хини" },
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
];
export default data;

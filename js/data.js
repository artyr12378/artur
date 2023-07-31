const user = {
  name: "артур",
  surname: "шолькаc",
  userPhoto: "my-photo.jpg",
  qrQode: "qr-code.svg",
  dreams: [
    { src: "бугаті 1.jpg", alt: "Авто моєї мрії" },
    { src: "дом.jpg", alt: "дом моєї мрії" },
    { src: "яхта.jpg", alt: "покататься на яхті" },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  500,
  700,
  800,
  1000,
  1200,
  1500,
  1800,
  2100,
  2400,
  2700,
  3000,
  3300,
];

const necessaryExpenses = 800;

const todo = [
  { month: "Червень", skill: "продуктивність" },
  { month: "Липень", skill: "время" },
  { month: "Серпень", skill: "навики програмуваня" },
  { month: "Вересень", skill: "особистість" },
  { month: "Жовтень", skill: "робити сайти і продавать" },
  { month: "Листопад", skill: "Емоційний інтелект" },
  { month: "Грудень", skill: "Креативність" },
  { month: "Січень", skill: "Лідерство" },
  { month: "Лютий", skill: "Нетворкінг" },
  { month: "Березень", skill: "Особистий бренд" },
  { month: "Квітень", skill: "Управління фінансами" },
  { month: "Травень", skill: "Публічні виступи" },
];

export { user, arr, necessaryExpenses, todo };

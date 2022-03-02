type TQuestionData = {
  question: string;
  first?: string;
  second?: string;
  third?: string;
  needFirstDescription?: boolean;
};

type TTestData = {
  [key: number]: TQuestionData;
};

export const testData: TTestData = {
  1: {
    question: "Введите Ваше Имя:",
  },
  2: {
    question: "Введите свою Дату рождения:",
  },
  3: {
    question: "Укажите Ваш Пол:",
    first: "Мужской",
    second: "Женский",
    needFirstDescription: false,
  },
  4: {
    question: "Укажите электронную почту",
  },
  5: {
    question: "Есть ли у вас проблемы с памятью и мышлением?",
    first: "Да",
    second: "Иногда",
    third: "Нет",
  },
  6: {
    question:
      "Есть ли у ваших близких родственников проблемы с памятью или мышлением?",
    first: "Да",
    second: "Нет",
    needFirstDescription: false,
  },
  7: {
    question: "Есть ли у вас проблемы с удержанием равновесия?",
    first: "Да",
    second: "Нет",
    needFirstDescription: false,
  },
  8: {
    question: "Если есть, известна ли вам их причина?",
  },
  9: {
    question: "Был ли у вас инсульт?",
    first: "Да",
    second: "Нет",
    needFirstDescription: false,
  },
  10: {
    question: "Был ли у вас микроинсульт?",
    first: "Да",
    second: "Нет",
    needFirstDescription: false,
  },
  11: {
    question: "Испытываете ли вы тревогу, депрессию, тоску",
    first: "Да",
    second: "Иногда",
    third: "Нет",
  },
  12: {
    question: "Наблюдаете ли вы изменения в собственной личности?",
    first: "Да",
    second: "Нет",
    needFirstDescription: true,
  },
  13: {
    question:
      "Сложно ли вам заниматься повседневными делами из-за проблем с памятью или мышлением?",
    first: "Да",
    second: "Нет",
    needFirstDescription: false,
  },
  14: {
    question: "Назовите сегодняшнюю дату, месяц, год",
  },
  15: {
    question: "Назовите объекты, изображенные на рисунках",
  },
  16: {
    question: "Что общего между розой и тюльпаном?",
  },
  17: {
    question: "Сколько полтинников в 3 рублях?",
  },
  18: {
    question:
      "Вы оплачиваете в кассу 3 рубля 05 копеек. Сколько сдачи вы получите, если дадите кассиру 5 рублей?",
  },
  19: {
    question:
      "Тест на память. Выполните это задание в самом конце, когда работа с тестом будет прекращена. Напишите «Я закончил(а)» в конце теста.",
  },
  20: {
    question: "Скопируйте рисунок:",
  },
  21: {
    question: "Нарисуйте циферблат:",
  },
  22: {
    question: "Напишите названия 12 разных стран.",
  },
  23: {
    question: "Соедините круги",
  },
  24: {
    question: "Уберите лишние линии",
  },
  25: {
    question: "Вы все сделали?",
  },
};

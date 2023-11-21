// Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:
type HoursObject = {
  total: number;
  inMenu: number;
};

interface PlayerData<Game, Hours extends HoursObject | string | number> {
  game: Game;
  hours: Hours;
  server: string;
}

const player1: PlayerData<string, number> = {
  game: 'CS:GO',
  hours: 300,
  server: 'basic'
};

const player2: PlayerData<number, string> = {
  game: 2048,
  hours: '300 h.',
  server: 'arcade'
};

const player3: PlayerData<string, HoursObject> = {
  game: 'Chess',
  hours: {
    total: 500,
    inMenu: 50
  },
  server: 'chess'
};

// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }

interface AmountOfFigures {
  squares: number;
  circles: number;
  triangles: number;
  others: number;
}

enum FigureNames {
  Rect = 'rect',
  Triangle = 'triangle',
  Circle = 'circle',
  Line = 'line'
}

interface Figure {
  name: FigureNames;
}

function calculateAmountOfFigures<T extends Figure>(figure: T[]): AmountOfFigures {
  const AmountOfFiguresObject: AmountOfFigures = {
    squares: 0,
    circles: 0,
    triangles: 0,
    others: 0
  };

  figure.forEach(item => {
    switch (item.name) {
      case FigureNames.Rect:
        AmountOfFiguresObject.squares++;
        break;
      case FigureNames.Triangle:
        AmountOfFiguresObject.triangles++;
        break;
      case FigureNames.Circle:
        AmountOfFiguresObject.circles++;
        break;

      default:
        AmountOfFiguresObject.others++;
    }
  });

  return AmountOfFiguresObject;
}

const data = [
  {
    name: FigureNames.Rect,
    data: { a: 5, b: 10 }
  },
  {
    name: FigureNames.Rect,
    data: { a: 6, b: 11 }
  },
  {
    name: FigureNames.Triangle,
    data: { a: 5, b: 10, c: 14 }
  },
  {
    name: FigureNames.Line,
    data: { l: 15 }
  },
  {
    name: FigureNames.Circle,
    data: { r: 10 }
  },
  {
    name: FigureNames.Circle,
    data: { r: 5 }
  },
  {
    name: FigureNames.Rect,
    data: { a: 15, b: 7 }
  },
  {
    name: FigureNames.Triangle
  }
];

console.log(calculateAmountOfFigures(data));


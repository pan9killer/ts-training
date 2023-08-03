type EmptyOrNumberAlias = 'empty' | number;

// структура данных склада с одеждой

interface IClothesWarehouse {
  jackets: EmptyOrNumberAlias;
  hats: EmptyOrNumberAlias;
  socks: EmptyOrNumberAlias;
  pants: EmptyOrNumberAlias;
}

// структура данных склада с канцтоварами

interface IStationeryWarehouse {
  scissors: EmptyOrNumberAlias;
  paper: 'empty' | boolean;
}

// структура данных склада с бытовой техникой

interface IAppliancesWarehouse {
  dishwashers: EmptyOrNumberAlias;
  cookers: EmptyOrNumberAlias;
  mixers: EmptyOrNumberAlias;
}

// общая структура данных, наследует все данные из трех выше
// + добавляет свои

interface TotalWarehouse extends IClothesWarehouse, IStationeryWarehouse, IAppliancesWarehouse {
  deficit: boolean;
  date: Date;
}

// главный объект со всеми данными, должен подходить под формат TotalWarehouse

const totalData: TotalWarehouse = {
  jackets: 5,
  hats: 'empty',
  socks: 'empty',
  pants: 15,
  scissors: 15,
  paper: true,
  dishwashers: 3,
  cookers: 'empty',
  mixers: 14,
  deficit: true,
  date: new Date()
};

// Реализуйте функцию, которая принимает в себя главный объект totalData нужного формата
// и возвращает всегда строку
// Функция должна отфильтровать данные из объекта и оставить только те названия товаров, у которых значение "empty"
// и поместить их в эту строку. Если таких товаров нет - возвращается другая строка (см ниже)

// С данным объектом totalData строка будет выглядеть:
// "We need this items: hats, socks, cookers"
// Товары через запятую, в конце её не должно быть. Пробел после двоеточия, в конце строки его нет.

const printReport = (data: TotalWarehouse): string => {
  const filtredEmptyValues = Object.entries(data)
    .filter(item => item[1] === 'empty')
    .map((item, index) => (index === 0 ? item[0] : ` ${item[0]}`));

  return filtredEmptyValues.length ? `We need this items: ${filtredEmptyValues}` : 'Everything fine';
};

console.log(printReport(totalData));

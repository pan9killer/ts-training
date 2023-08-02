// const test: null = null;
// const test2: any = null;
// const test3: string = null;
// const test4: number = null;

// const test5: undefined = undefined;
// const test6: any = undefined;
// const test7: string = undefined;

let smth; // any type

const getRandomData = () => {
  if (Math.random() < 0.5) {
    return null;
  } else {
    return '    arararara    ';
  }
};

const data = getRandomData();
const trimmedData = data ? data.trim() : data;

const isbirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = 'john';

const createError = (msg: string) => {
  throw new Error(msg);
};

const logBrtMsg = (isBirthday: boolean, userName: string, age: number): string => {
  if (isBirthday) {
    return `Graz ${userName.toUpperCase()}, age: ${age + 1}`;
  } else if (!isBirthday) {
    return 'Sad :(';
  }
  return createError('Error');
};

logBrtMsg(isbirthdayData, userNameData, 40);

let msg: 'Hello' = 'Hello';

msg = 'Hello';

const port3000: number = 3000;
const port3001: number = 3001;

function startServer(protocol: 'http' | 'https', port: 3000 | 3001): 'Server started' {
  if (port === port3000 || port === port3001) {
    console.log(`Server started on ${protocol}://server:${port}`);
  } else {
    console.error('Invalid port');
  }

  return 'Server started';
}

startServer('https', 3001);

function createAnimation(
  id: string | number,
  animName: string,
  timingFunc: 'ease' | 'ease-out' | 'ease-in' = 'ease',
  duration: number,
  iterCount: 'infinite' | number
): void {
  // const elem = document.querySelector(`#${id}`) as HTMLElement;

  // if (elem) {
  console.log(`${animName} ${timingFunc} ${duration} ${iterCount}`);
  // elem.style.animation = `${animName} ${timingFunc} ${duration} ${iterCount}`;
  // }
}

createAnimation('id', 'fade', 'ease-in', 5, 'infinite');

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

// type Config = { protocol: 'http' | 'https'; port: 3000 | 3001 };
interface Config {
  protocol: 'http' | 'https';
  port: 3000 | 3001;
  log: (msg: string) => void;
}
// type Role = { role: string };
// type ConfigWithRole = Config & Role;

interface Role {
  role: string;
}

interface ConfigWithRole extends Config, Role {}

const serverConfig: ConfigWithRole = {
  protocol: 'https',
  port: 3001,
  role: 'admin',
  log: (msg: string): void => console.log(msg)
};

// const backup: Config = {
//   protocol: 'http',
//   port: 3000,
//   role: 'sysadmin'
// };

type StartFunction = (protocol: 'http' | 'https', port: 3000 | 3001, log: (msg: string) => void) => string;

const startServer: StartFunction = (
  protocol: 'http' | 'https',
  port: 3000 | 3001,
  log: (msg: string) => void
): 'Server started' => {
  log(`Server started on ${protocol}://server:${port}`);

  return 'Server started';
};

startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);

interface Styles {
  [key: string]: string;
}

const styles: Styles = {
  position: 'absolute',
  top: '20px',
  left: '50px'
};

type AnimationTimingFunc = 'ease' | 'ease-out' | 'ease-in';
type AnimationID = string | number;

function createAnimation(
  id: AnimationID,
  animName: string,
  timingFunc: AnimationTimingFunc = 'ease',
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

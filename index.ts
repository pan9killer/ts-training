const isbirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = 'john';

const createError = (msg: string) => {
  throw new Error(msg);
}

const logBrtMsg = (isBirthday: boolean, userName: string, age: number): string => {
  if (isBirthday) {
    return `Graz ${userName.toUpperCase()}, age: ${age + 1}`;
  } else if(!isBirthday) {
    return 'Sad :(';
  }
  return createError('Error');
}

logBrtMsg(isbirthdayData, userNameData, 40);
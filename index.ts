const isbirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = 'john';

function logBrtMsg(isBirthday: boolean, userName: string, age: number) {
  if (isBirthday) {
    console.log(`Graz ${userName.toUpperCase()}, age: ${age + 1}`);
  }
}

logBrtMsg(isbirthdayData, userNameData, ageData);

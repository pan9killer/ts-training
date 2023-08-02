const userData = {
  isBirthday: true,
  userName: 'john',
  age: 40,
  messages: {
    error: 'Error'
  }
};

const createError1 = (msg: string) => {
  throw new Error(msg);
};

const logBrtMsg1 = ({
  isBirthday,
  userName,
  age,
  messages: { error }
}: {
  isBirthday: boolean;
  userName: string;
  age: number;
  messages: { error: string };
}): string => {
  if (isBirthday) {
    return `Graz ${userName.toUpperCase()}, age: ${age + 1}`;
  } else {
    return createError1(error);
  }
};

console.log(logBrtMsg1(userData));

const departments: string[] = ['dev', 'design', 'marketing'];

const department = departments[0];

// departments.push(5);
const report = departments
  .filter((department: string) => department !== 'dev')
  .map((department: string) => `${department} - done`);

const nums: number[][] = [
  [3, 4, 5],
  [3, 4, 5]
];

const [first] = report;
console.log(first);

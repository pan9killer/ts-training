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
    return createError(error);
  }
};

console.log(logBrtMsg1(userData));

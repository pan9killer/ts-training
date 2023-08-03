interface User {
  login: string;
  password: string;
  age: number;
  // addr?: string;
  addr: string | undefined;
  parents?: {
    mother?: string;
    father?: string;
  };
}

const user: User = {
  login: 'first',
  password: 'qwerty',
  age: 50,
  addr: 'burdzgla'
};

const dbName = '1234';

const sendUserData = (obj: User, db?: string): void => {
  console.log(obj.parents?.mother?.toLowerCase(), db?.toLowerCase());
};

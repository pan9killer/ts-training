interface IFormData {
  email: string;
  title: string;
  text: string;
  checkbox: boolean;
}

const formData: IFormData = {
  email: '',
  title: '',
  text: '',
  checkbox: false
};

const buttons = document.querySelectorAll('button');

if (buttons) {
  for (let i = 0; i < buttons.length; i++) {
    const button: HTMLButtonElement = buttons[i];
    button.addEventListener('click', e => {
      e.preventDefault();
      validateFormData(formData);
    });
  }
}

const email = document.getElementById('email') as HTMLInputElement;
const title = document.getElementById('title') as HTMLInputElement;
const text = document.getElementById('text') as HTMLTextAreaElement;
const checkbox = document.getElementById('checkbox') as HTMLInputElement;

if (email) {
  email.addEventListener('change', e => {
    e.preventDefault();
    formData.email = email.value;
  });
}
if (title) {
  title.addEventListener('change', e => {
    e.preventDefault();
    formData.title = title.value;
  });
}
if (text) {
  text.addEventListener('change', e => {
    e.preventDefault();
    formData.text = text.value;
  });
}
if (checkbox) {
  checkbox.addEventListener('change', e => {
    e.preventDefault();
    formData.checkbox = !!checkbox.value;
  });
}

// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом

function checkFields(data: IFormData): boolean {
  return !!data.email && !!data.title && !!data.text && !!data.checkbox ? true : false;
}

function validateFormData(data: IFormData): boolean {
  if (checkFields(data)) {
    checkFormData(data);
    return true;
  } else {
    console.log('Please, complete all fields');
    return false;
  }
}

function checkFormData(data: IFormData): void {
  const { email } = data;
  const emails = ['example@gmail.com', 'example@ex.com', 'admin@gmail.com'];

  // Если email совпадает хотя бы с одним из массива
  if (emails.some((item: string) => item === email)) {
    console.log('This email is already exist');
  } else {
    console.log('Posting data...');
  }
}


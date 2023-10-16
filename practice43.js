// var formData = {
//     email: '',
//     title: '',
//     text: '',
//     checkbox: false
// };
// var buttons = document.querySelectorAll('button');
// if (buttons) {
//     for (var i = 0; i < buttons.length; i++) {
//         var button = buttons[i];
//         button.addEventListener('click', function (e) {
//             e.preventDefault();
//             validateFormData(formData);
//         });
//     }
// }
// var email = document.getElementById('email');
// var title = document.getElementById('title');
// var text = document.getElementById('text');
// var checkbox = document.getElementById('checkbox');
// if (email) {
//     email.addEventListener('change', function (e) {
//         e.preventDefault();
//         formData.email = email.value;
//     });
// }
// if (title) {
//     title.addEventListener('change', function (e) {
//         e.preventDefault();
//         formData.title = title.value;
//     });
// }
// if (text) {
//     text.addEventListener('change', function (e) {
//         e.preventDefault();
//         formData.text = text.value;
//     });
// }
// if (checkbox) {
//     checkbox.addEventListener('change', function (e) {
//         e.preventDefault();
//         formData.checkbox = !!checkbox.value;
//     });
// }
// // Последовательность действий:
// // 1) Происходит submit любой из форм
// // 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// // 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// // 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом
// function checkFields(data) {
//     return !!data.email && !!data.title && !!data.text && !!data.checkbox ? true : false;
// }
// function validateFormData(data) {
//     if (checkFields(data)) {
//         checkFormData(data);
//         return true;
//     }
//     else {
//         console.log('Please, complete all fields');
//         return false;
//     }
// }
// function checkFormData(data) {
//     var email = data.email;
//     var emails = ['example@gmail.com', 'example@ex.com', 'admin@gmail.com'];
//     // Если email совпадает хотя бы с одним из массива
//     if (emails.some(function (item) { return item === email; })) {
//         console.log('This email is already exist');
//     }
//     else {
//         console.log('Posting data...');
//     }
// }

// const array = [1,2,3,4]
// const callback = x => x*2

// function callbackFn(value, index) {

// }

// array.map(callback) // [2,4,6,8]

// let y = callback(undefined) // NaN
// array.map(x => NaN(x))

// array.map(x => callback)
// array.map(x => callback())

let newArr = Array.from({ length: 100 });
console.log(newArr);

function fizzbuzzCheck() {
  const fbArr = newArr.map(fizzbuzz);
  return fbArr;
}

function fizzbuzz(item, index) {
  if (index % 5 === 0 && index % 3 === 0) {
    return 'fizzbuzz';
  } else if (index % 5 === 0) {
    return 'buzz';
  } else if (index % 3 === 0) {
    return 'fizz';
  } else {
    return index;
  }
}
console.log(fizzbuzzCheck());


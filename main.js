/*
    1-var
    2-let
    3-const
*/

// var sayi = 20;
// var sayi2 = 10;
// sayi = 50;
// toplam = sayi + sayi2;
// console.log(toplam);

// let name = "test";
// console.log(name);
// name = "asdasdas";
// console.log(name);

// const x = 10;
// const y = 20;
// const z = x + y;
// const u = x - y;
// const l = x * y;

// console.log(z);

/*
 * Numbers:
 * Strings:
 * Boolean:
 * Object:
 * Array:
 * Date:
 */
// let length = -12.4;
// let color = "yellow";
// let isStudent = true;
// const person = {
//   firstName: "Anıl",
//   lastname: "Korkmaz",
//   isStudent: true,
//   age: 23,
//   address: {
//     city: "İstanbul",
//     no: 2,
//   },
// };
// const cars = ["Volvo", "BMW", "Seat", { model: 1999, km: 200000 }];

// const date = new Date();
// console.log(date);

// let x = 16 + "volvo";
// x = 10 + "10";
// console.log(x);
// x = 10 + 10;

// ! Fonksiyonlar
// function exampleFunction(parametre1, parametre2) {
//   return parametre1 + parametre2;
// }
// const exampleFunction = (parametre1) => parametre1;
// const result = exampleFunction(10);
// console.log(result);

// async function getResponse() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = response.json();
//   return data;
// }
// const results = getResponse();
// console.log(results);

//! Javascript Objects
// const car = {
//   marka: "BMW",
//   model: "M5 cs",
//   yil: 2021,
// };
// console.log(car.yil);

// const person = {
//   firstname: "test",
//   lastname: "example",
//   id: 33,
//   fullName: function () {
//     const fullname = this.firstname + " " + this.lastname;
//     return fullname;
//   },
// };
// console.log(person.fullName());

// const tiklanmaFonksiyonu = () => {
//   console.log("tıklanıldı");
// };
//! strings
// let text =
//   "Loremipsumdolorsitametconsecteturadipisicingelit.Abevenietdoloremquequisutidsiteahicatsunt earum?";
// console.log(text.length);

// let x = "selam";
// console.log(x);
// let y = new String("13213123    qw123");
// console.log(y);

// const x = new String("Test");
// const y = new String("Test");
// console.log(x === y);
// console.log(new String("Test") === new String("Test"));

// const x = "test";
// const y = "test";
// console.log(x === y);

// let text = "HELLO WORLD";
// console.log(text.charAt(6));
// console.log(text.charCodeAt(3));

// console.log(text[0]);

// text = "Apple,Banana,Kiwi";

// console.log(text.slice(5, 15));
// console.log(text.slice(7));
// console.log(text.substring(5, 15));
// console.log(text.substring(7));
// console.log(text.toUpperCase());

// let text1 = "hello";
// let text2 = "world";
// let text3 = "world";

// console.log(text1.concat(" ", text2, text3));

// let text4 = "            Selam                  ";
// let text5 = "            Selam                  ";
// let text6 = "            Selam                  ";
// console.log(text4.trim());
// console.log(text5.trimStart());
// console.log(text6.trimEnd());

// let text7 = "5";
// console.log(text7.padEnd(10, "0"));
// text7 = "hello world!";

// console.log(text7.repeat(3));

// text7 = "Apple Microsoft ";

// console.log(text7.replace(/MICROSOFT/i, "Linux"));

// text =
//   "I love cats. cats are very easy to love. cats are very popular. 'asdadsasd'   ";

// console.log(text.replaceAll("cats", "dogs"));

// console.log(text.split("."));
// console.log(text.indexOf("easy"));

// console.log(text.match(/Cats/g));
// console.log(text.includes("Cats"));

// let text8 = `
// " "" "
// ''
// ${text}
//     - asdasdasdasd
//     - asdadsadasdas
//     - asdasdasd
// `;
// console.log(text8);
// text = "asdasdasd  ";
// const tags = `<h2>${text}</h2>`;
// console.log(tags);

// let x = 100 * 10;
// console.log(x);

// let x = 9999;
// let y = 9999;
// console.log(x);
// console.log(x.toString());

// x = 9.123;
// console.log(x.toFixed(1));
// // console.log(x.toPrecision());

// console.log(x.valueOf());

// console.log(parseFloat(123.94234234));

// const array = ["car", 43, true, { firstname: "ali", lastname: "test" }];
// console.log(array);
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);

// array[2] = false;
// console.log(array);
// console.log(array.toString());

// console.log(typeof array);

// const fruits = ["muz", "portakal", "elma", "mango"];
// let fLen = fruits.length;

// let text = "<ul>";

// for (let i = 0; i < fLen; i++) {
//   text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";
// console.log(text);

// fruits.forEach((item) => console.log(item));

// const numbers = [1, 2, 3, 4, 5];

// const dongu1 = numbers.forEach(function (number) {
//   return number * 2;
// });
// console.log(dongu1);
/*
 * map: Bir dizi içerisindeki her bir elemanı üzerinde döngü oluşturur ve her eleman için
 * belirtilen işlevi çağırarak yeni bir dizi oluşturur.
 */
// const dongu = numbers.map(function (number) {
//   return number * 2;
// });
// console.log(dongu);

// numbers.push(44);
// console.log(numbers);
//! spread

// console.log(fruits.join(" "));

// const array1 = [1, 2, 3, 4];
// const array2 = [5, 6, 7, 8, 9];
// console.log(array1.concat(array2));
// array1.push(...array2);
// console.log(array1);

// const rezervasyonlarSabah = [8, 10, 12];
// const rezervasyonlaraksam = [18, 20, 22];

// const tümRezervasyonlar = [
//   ...rezervasyonlarSabah,
//   ...rezervasyonlaraksam,
//   { restoranIsmi: "asdasd" },
// ];

// console.log(tümRezervasyonlar);

// const user = {
//   firstname: "Baki",
//   lastname: "Tekin",
//   age: 24,
//   email: "tekin@gmail.com",
// };
// mevcut kullanıcı bilgilerini kopyalayarak üzerine yeni özellikler ekleme
// const newUser = {
//   ...user,
//   address: "no:4",
//   city: "istanbul",
// };
// console.log(newUser);
// const fruits = ["muz", "portakal", "elma", "mango"];
// const numbers = [1, 2, 3, 4, 5, 6];
// const numbers2 = [123, 12343, 4235, 1253, 346];
// fruits.pop();
// fruits.shift();
// fruits.push("armut");
// fruits.unshift("kiraz");
// console.log(fruits);
// console.log(fruits.concat(numbers, numbers2));
// const fruits = ["muz", "portakal", "elma", "mango"];

// console.log(fruits.splice(1, 2));

const menu = [
  { name: "Köfte", price: 200 },
  { name: "Izgara Tavuk", price: 600 },
  { name: "Pilav", price: 100 },
  { name: "Kuru Fasulye", price: 300 },
  { name: "Çorba", price: 70 },
];
// 1. find() metodu: Belirli bir koşula uyan ilk öğeyi bulur.
// const arananYemek = menu.find((item) => item.id === 1);
// console.log(arananYemek.price);
// 2. filter() metodu: Belirli bir koşula uyan tüm öğeyi bir dizi olarak dönderir.
const ucuzYemekler = menu.filter((item) => item.price < 400);
console.log(ucuzYemekler);
// 3. some() metodu: Belirli bir koşula uyan en az bir öğe var mı yok mu kontrol eder ve boolean değer dönderir
const ucuzYemek = menu.some((item) => item.price < 10);
console.log(ucuzYemek);
// 4. findIndex() metodu: Belirli bir koşula uyan ilk öğenin dizideki indexini dönderir
const index = menu.findIndex((item) => item.name === "Pilav");
console.log(index);

// const firstIndex = menu.indexOf("Pilav");
// const lastIndex = menu.lastIndexOf("Pilav");
// console.log(firstIndex);
// console.log(lastIndex);

const menu1 = ["Köfte", "Kuru Fasulye"];

const containsCorba = menu1.includes("Köfte");
console.log(containsCorba);

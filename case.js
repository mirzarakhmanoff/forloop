//---------------1-masala Switch Case-----------------------

// function hafta(n) {
//     switch(n) {
//         case 1:
//             console.log("Dushanba");
//             break;
//         case 2:
//             console.log("Seshanba");
//             break;
//         case 3:
//             console.log("Chorshanba");
//             break;
//         case 4:
//             console.log("Payshanba");
//             break;
//         case 5:
//             console.log("Juma");
//             break;
//         case 6:
//             console.log("Shanba");
//             break;
//         case 7:
//             console.log("Yakshanba");
//             break;
//         default:
//             console.log("Notog'ri kun raqami");
//     }
// }

// hafta(5)

//---------------2-masala Switch Case-----------------------

// function baho(k) {
//   switch (k) {
//     case 1:
//       console.log("yomon");
//       break;

//     case 2:
//       console.log("Qoniqarsiz");
//       break;
//     case 3:
//       console.log("Qoniqarli");
//       break;
//     case 4:
//       console.log("Yaxshi");
//       break;
//     case 5:
//       console.log("Alo");
//       break;

//     default:
//       console.log("Xato baho kiritilgan");
//   }
// }
// baho(5)

//---------------3-masala Switch Case-----------------------

// function oylar(n) {
//   switch (n) {
//     case (1, 2, 12):
//       console.log("Qish");
//       break;
//     case (3, 4, 5):
//       console.log("Bahor");
//       break;
//     case (6, 7, 8):
//       console.log("Yoz");
//       break;
//     case (9, 10, 11):
//       console.log("Kuz");
//       break;
//   }
// }
// oylar(12)

//---------------4-masala Switch Case-----------------------

// function oylar(n){
//     switch(n){
//         case 1,3,5,7,8,10,12:
//             console.log("Bu oyda 31 kun bor")
//             case 2:
//                 console.log("Bu oyda 28 kun bor")
//                 case 4,6,9,11:
//                 console.log("Bu oyda 30 kun bor")
//     }
// }
// oylar(11)

//---------------5-masala Switch Case-----------------------

// function hisob(a, b, amal) {
//   let natija;
//   switch (amal) {
//     case 1:
//       natija = a + b;
//       break;
//     case 2:
//       natija = a - b;
//       break;
//     case 3:
//       natija = a / b;
//       break;
//     case 4:
//       natija = a * b;
//       break;
//   }

//   console.log(natija);
// }
// hisob(3, 4, 2);

//---------------6-masala Switch Case-----------------------

// function toMetr(n, a) {
//   let metrda;
//   switch (n) {
//     case 1:
//       metrda = a / 10;
//       break;
//     case 2:
//       metrda = a * 10;
//       break;

//     case 3:
//       metrda = a;
//       break;

//     case 4:
//       metrda = a/1000
//       break
//       case 5:
//         metrda = a/100
//         break
//   }

//   console.log(`${metrda} metr boladi`)
// }
// toMetr(3,100)

//---------------7-masala Switch Case-----------------------

// function kgda(n, m) {
//   let kilogram;
//   switch (n) {
//     case 1:
//       kilogram = m; //kilo
//       break;

//     case 2:
//       kilogram = m / Math.pow(10, 6); //milli
//       break;
//     case 3:
//       kilogram = m / 1000; //gram
//       break;
//     case 4:
//       kilogram = m * 1000; //tonna
//       break;
//     case 5:
//         kilogram = m*100; //sentner
//         break
//   }

//   console.log(kilogram)
// }
// kgda(3, 1000)

//---------------8-masala Switch Case-----------------------

// function oy(D, M) {
//   let monthName;
//   switch (M) {
//     case 1:
//       monthName = "Yanvar";
//       break;
//     case 2:
//       monthName = "Fevral";
//       break;
//     case 3:
//       monthName = "Mart";
//       break;
//     case 4:
//       monthName = "Aprel";
//       break;
//     case 5:
//       monthName = "May";
//       break;
//     case 6:
//       monthName = "Iyun";
//       break;
//     case 7:
//       monthName = "Iyul";
//       break;
//     case 8:
//       monthName = "Avgust";
//       break;
//     case 9:
//       monthName = "Sentyabr";
//       break;
//     case 10:
//       monthName = "Oktyabr";
//       break;
//     case 11:
//       monthName = "Noyabr";
//       break;
//     case 12:
//       monthName = "Dekabr";
//       break;
//     default:
//       console.log("Noto'g'ri oy qiymati");

//     }
//     console.log(`${D} - ${monthName}`);
// }
// oy(3, 12);


//---------------9-masala Switch Case-----------------------

// function oy(D, M) {
//     let monthName;
//     switch (M) {
//       case 1:
//         monthName = "Yanvar";
//         break;
//       case 2:
//         monthName = "Fevral";
//         break;
//       case 3:
//         monthName = "Mart";
//         break;
//       case 4:
//         monthName = "Aprel";
//         break;
//       case 5:
//         monthName = "May";
//         break;
//       case 6:
//         monthName = "Iyun";
//         break;
//       case 7:
//         monthName = "Iyul";
//         break;
//       case 8:
//         monthName = "Avgust";
//         break;
//       case 9:
//         monthName = "Sentyabr";
//         break;
//       case 10:
//         monthName = "Oktyabr";
//         break;
//       case 11:
//         monthName = "Noyabr";
//         break;
//       case 12:
//         monthName = "Dekabr";
//         break;
//       default:
//         console.log("Noto'g'ri oy qiymati");
  
//       }
//       console.log(`${D+1} - ${monthName}`);
//   }
//   oy(5, 10);
  

//---------------10-masala Switch Case-----------------------


// function roboYol(Y, K) {
//     const yonalish = ['s', 'q', 'j', 'g'];

//     let idx = yonalish.indexOf(Y);

//     switch (K) {
//         case 0:
//             return Y;
//         case 1:
//             idx = (idx + 3) % 4; 
//             return yonalish[idx];
//         case 2:
//             idx = (idx + 1) % 4;
//             return yonalish[idx];
//         default:
//             return "Noto'g'ri kamanda qiymati";
//     }
// }
// console.log(roboYol('s',2))
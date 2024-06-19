//--------------------1-masala FOR--------------------
// function loop(k, n) {
//   for (let i=0; i < n; i++) {
//     console.log(k);
//   }
// }
// loop(3, 5);

//--------------------2-masala FOR--------------------

// function loop(a,b){
//     if(a<b){
//         for(let i=a; i<=b; i++){
//             console.log(i)
//         }
//     }
// }
// loop(3,10)

//--------------------3-masala FOR--------------------

// function loop(a,b){
//     if(a<b){
//         for(let i=b-1; i>a; i--){
//             console.log(i)
//         }
//     }
// }
// loop(12,24)

//--------------------4-masala FOR--------------------

// function konfet(a) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(a * i);
//   }
// }
// konfet(25000);

//--------------------5-masala FOR--------------------

// function konfet(a) {
//   for (let i = 0.1; i <= 1; i += 0.1) {
//     console.log(a * i);
//   }
// }
// konfet(25000);

//--------------------6-masala FOR--------------------

// function konfet(a) {
//     for (let i = 1.1; i <= 2; i += 0.1) {
//       console.log(a * i);
//     }
//   }
//   konfet(25000);

//--------------------7-masala FOR--------------------

// function summary(a, b) {
//   let sum = 0;
//   for (let i = a; i <= b; i++) {
//     sum += i;
//   }
//   console.log(sum);
// }
// summary(2, 7);

//--------------------8-masala FOR--------------------
// function summary(a, b) {
//     let sum = 1;
//     for (let i = a; i <= b; i++) {
//       sum *= i;
//     }
//     console.log(sum);
//   }
//   summary(2, 7);

//--------------------9-masala FOR--------------------
// function summary(a, b) {
//   let sum = 1;
//   for (let i = a; i <= b; i++) {
//     sum = sum + i * i;
//   }
//   console.log(sum);
// }
// summary(2, 3);

//--------------------10-masala FOR--------------------

// function summary(n) {
//   let summ = 0;
//   for (let i = 1; i <= n; i++) {
//     summ += 1 / i;
//   }
//   console.log(summ);
// }
// summary(5);

//--------------------11-masala FOR--------------------

// function summary(n) {
//     let summ = 0;
//     for (let i = 0; i <= n; i++) {
//       summ += (n+i)*(n+i)
//     }
//     console.log(summ);
//   }
//   summary(5);

//--------------------12-masala FOR--------------------

// function summary(n) {
//   let summ = 1;
//   let kop = 1;
//   for (let i = 0; i < n; i++) {
//     summ += 0.1;
//     kop *= summ;
//   }
//   console.log(kop);
// }
// summary(4);

//--------------------13-masala FOR--------------------

// function summary(n) {
//   let sum = 0;
//   let ishora = 1;
//   for (let i = 1; i <= n; i++) {
//     let son = 1.0 + i / 10.0;
//     sum += ishora * son;
//     sum *= -1;
//   }
//   console.log(sum);
// }
// summary(3)

//--------------------14-masala FOR--------------------

// function summary(n) {
//   let sum = 0;
//   for (let i = 1; i <= 2 * n - 1; i += 2) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(summary(10))

//--------------------15-masala FOR--------------------

// function daraja(a, n) {
//   let s = 1;
//   for (let i = 0; i < n; i++) {
//     s*=Math.pow(a,i)
//   }
//   console.log(s)
// }
// daraja(3,3)

// const delay = ms => new Promise(res => setTimeout(res, ms));
// async function* multiTimer() {
//   await delay(1000);
//   yield 1;
//   await delay(2000);
//   yield 2;
//   await delay(3000);
//   yield 3;
//   await delay(1000);
//   yield 4;
// }
// (async () => {
//   //비동기 제네레이터 같은 비동기 이터러블 객체를 순회하려면 for await of 가 필요하다.
//   for await (const time of multiTimer()) {
//     console.log('got', time);
//   }
//   console.log('All the timers end');
// })();

// export {};

// const a = 'a';

// if (a === true) {
// }

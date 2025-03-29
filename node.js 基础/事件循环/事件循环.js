// 同步任务执行 -> 微任务 -> 宏任务
console.log('script start'); // 1️⃣ 同步任务

setTimeout(() => {
  console.log('setTimeout 1'); // 7️⃣ 宏任务
}, 0);

setImmediate(() => {
  console.log('setImmediate'); // 9️⃣ 宏任务（Node.js 环境下）
});

Promise.resolve().then(() => {
  console.log('Promise 1'); // 3️⃣ 微任务
}).then(() => {
  console.log('Promise 2'); // 4️⃣ 微任务
});

queueMicrotask(() => {
  console.log('queueMicrotask'); // 5️⃣ 微任务
});

process.nextTick(() => {
  console.log('nextTick'); // 2️⃣ 微任务（Node.js 特有，优先于 Promise）
});

setTimeout(() => {
  console.log('setTimeout 2'); // 8️⃣ 宏任务
}, 0);

console.log('script end'); // 6️⃣ 同步任务


'script start'
'script end'
'nextTick'
'Promise 1'
'Promise 2'
'queueMicrotask'
'setTimeout 1'
'setTimeout 2'
'setImmediate'
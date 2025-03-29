console.log('script start');

setTimeout(() => {
  console.log('setTimeout');
  Promise.resolve().then(() => {
    console.log('Promise inside setTimeout');
  });
}, 0);

new Promise((resolve) => {
  console.log('Promise executor');
  resolve();
}).then(() => {
  console.log('Promise then');
});

console.log('script end');

'script start'
'Promise executor'
'script end'
'Promise then'
'setTimeout'
'Promise inside setTimeout'

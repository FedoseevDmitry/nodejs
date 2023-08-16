setTimeout(() => {
  console.log('Был диван,');
}, 0);

setTimeout(() => {
  console.log('Выйди вон!');
}, 10);

setImmediate(() => {
  console.log('На диване');
});

process.nextTick(() => {
  console.log('Чемодан,');
});

setImmediate(() => {
  console.log('Ехал слон.');
});

setImmediate(() => {
  console.log('Кто не верит –');
});

process.nextTick(() => {
  console.log('В чемодане');
});

console.log('Плыл по морю');
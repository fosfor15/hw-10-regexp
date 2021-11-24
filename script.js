
let regexp = /^\w+@\w+\.(.*[^\s])$/;

function testStr(str) {
    let result = regexp.test(str);

    console.log(`
Строка: '${str}'
РВ: ${String(regexp)}
Результат: ${result}
    `);
}

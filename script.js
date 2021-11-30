
const regexp = /^\w+\@(\w+\.)+\w+$/;

function testStr(str) {
    let result = regexp.test(str);
    console.log(`
        Строка: '${str}'
        РВ: ${String(regexp)}
        Результат: ${result}
    `);
}

testStr('email123@domen1.com');//true
testStr('email123@domen1.domen2.com');//true
testStr('email123@domen1.domen2.domen3.com');//true
testStr('words123@domen1com');
testStr('words123@domen1com. ');
testStr('words123@ domen1com');
testStr(' words123@domen1com ');

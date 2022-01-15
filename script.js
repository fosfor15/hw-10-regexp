
const regexp = /^\w+\@(\w+\.)+\w+$/;
// Абсолютно верный РВ!
// РВ для проверки электронной почты в элементе input с типом email на самом деле гораздо больше, чем данное РВ – на него вы можете посмотреть на этом сайте https://emailregex.com/ или на этом https://regexr.com/.

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

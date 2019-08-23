(function consoleWords(){
let massiveStrNumb = ['Строчная строка строковой строки', 2,1,3];
let words = massiveStrNumb[0].split(' ');
for(let i = 0; i <= words.length; i++) {
    let timer = massiveStrNumb[i + 1] * 1000;
    let word = words[i];
    setTimeout(() => {
        console.log(word);
    }, timer);
}}());

const pokemon = require('pokemon');
const fs = require('fs');
const http = require('http');


// * html 파일 안에 li태그로 생성할 수 있겠습니까?
// ! 1. li를 동적으로 생성하는 경우 (js 함수 활용 많이)
// ! 2. 정적으로 li를 다 나열하는 경우 (js 함수 활용 적게)


let list = "";
for(i=0; i<pokemon.all().length; i++){
  list += `<li>${pokemon.all('ko')[i]}</li> `;
}
// console.log(list);




// fun("포켓몬.html", `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
// </head>
// <body>
//   ${list}
// </body>
// </html>
// `)


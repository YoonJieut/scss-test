const pokemon = require('pokemon');
const fs = require('fs');
const http = require('http');


// console.log(pokemon.all('ko'));
// console.log(typeof(pokemon.all('ko')[0]));
// console.log(pokemon.all('ko')[0]);





// * html 파일 안에 li태그로 생성할 수 있겠습니까?
// ! 1. li를 동적으로 생성하는 경우 (js 함수 활용 많이)
// ! 2. 정적으로 li를 다 나열하는 경우 (js 함수 활용 적게)


// let newArr = [];
//   // *newArr 에 담기
//   for(i=0; i<pokemon.all().length; i++){
//     newArr.push(`<li>${pokemon.all('ko')[i]}</li>`);
//   }
//   newArr.join(" ");


let list = "";
for(i=0; i<pokemon.all().length; i++){
  newArr += `<li>${pokemon.all('ko')[i]}</li>`;
}


// * 서버 작동
http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type" : "text/html"})
  response.end(
    // * html 작성 실행문
    fs.writeFile("포켓몬.html", contents,function(err){
      if(err){
        console.error("error");
      } else {
        
      }
    });
    fun("포켓몬.html", `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      ${list}
    </body>
    </html>
    `)
  );
}).listen(8080);



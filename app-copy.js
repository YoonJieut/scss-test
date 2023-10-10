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


let data1 = 
`
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
`
;

//! 파일 생성
fs.writeFile("포켓몬.html", data1 ,function(err){
  if (err) {
    console.error('파일을 읽지 못했습니다.');
  }
});

//! 서버 생성 및 파일 읽기
http.createServer(function(request, response, data) {
  response.writeHead(200, {'Content-Type' : 'text/html'});

  fs.readFile("./포켓몬.html", function(err, data){
    if(err){
      console.error('에러');
    } else {
      response.end(data);
    }
  });
}).listen(8080);



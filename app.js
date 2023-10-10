const pokemon = require('pokemon');
const fs = require('fs');
const http = require('http');


console.log(pokemon.all('ko'));
console.log(typeof(pokemon.all('ko')[0]));
console.log(pokemon.all('ko')[0]);

function fun (fileName, contents){
  fs.writeFile(fileName, contents,function(err){
  });
}

// * html 파일 안에 li태그로 생성할 수 있겠습니까?


function liTagAndText (){
  return 
  `const body = document.body;
  const createLi = document.createElement('li')`
  
  
  for(i=0; i<pokemon.all().length; i++){
    `body.prepend(createLi);
    createLi.append(${pokemon.all('ko')[i]});`
  };
};
// ?

let newArr = [];
  // *newArr 에 담기
  for(i=0; i<pokemon.all().length; i++){
    newArr.push(`<li>${pokemon.all('ko')[i]}</li>`);
  }
  newArr.join(" ");

// ? 변수가 아니라 배열에 담는다


//  * 동적 html 생성
fun("포켓몬.html", `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  ${String(newArr.join(" "))}
</body>
</html>
`);




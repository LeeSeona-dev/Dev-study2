//1. 사용자로부터 숫자를 입력받는다. (세자리수)
//1-> 입력받기 -> prompt ** 리턴타입 String
//1-2 . 숫자형으로 변환 -> Number()
//1-3. 공간에 저장 -> 변수에 담기

//2. 입력받은수를 가지고 연산을 통해 결과값을 얻는다.
//3. 결과값을 형태에 맞춰 콘솔창으로 출력한다.


let inputNum = Number(prompt('숫자를 입력해주세요.'));
console.log(inputNum);
let result = inputNum-(inputNum%100);
console.log(`백의 자리 이하 버린 결과 >> ${result}`);

let result2 = parseInt(inputNum/100)*100;
console.log(`백의 자리 이하 버린 결과 >> ${result2}`);
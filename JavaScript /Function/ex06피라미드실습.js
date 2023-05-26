//1. 이모티콘 , 행의 개수 입력 받기
let emoji1 = prompt('이모티콘을 입력해주세요!');
let hang1 = Number(prompt('행의 개수를 입력해주세요.'));

//2. 이모티콘을 행의 개수에 맞춰 피라미드 형태로 출력하는 함수 만들기
const result =(emoji,hang)=>{
    for(let i = 1; i<=hang; i ++){
        for(let j = 1; j<=i; j++){
           document.write(emoji) ;
        
        }document.write('<br>') ;
        
    }
}
result(emoji1, hang1);
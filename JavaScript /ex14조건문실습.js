//1. '원하는 색상을 입력하세요' 입력창 만들기
//2 . 빨강 > red / 초록 -> green / 파랑 -> blue
//     그 외에는 -> '잘못 입력하셨습니다. '  (알림 팝업창)
//     배경색 바꾸는 코드 -> ex02 따라하기.html 참고

let color = prompt('원하는 색상을 입력하세요.');

// if(color=='빨강'){
//     document.getElementById('bodyTag').style.backgroundColor = 'red';
   
// } else if(color =='초록'){
//     document.getElementById('bodyTag').style.backgroundColor = 'green';
// } else if(color=='파랑'){
//     document.getElementById('bodyTag').style.backgroundColor = 'blue';
// } else{
//     alert('잘못 입력하셨습니다.');
// }

// switch문 이용하기

let result ='';
switch(color){
    case '빨강' : result ='red'; break;
    case '초록' : result = 'green'; break;
    case '파랑' : result = 'blue'; break;
    default : alert('잘못 입력하셨습니다.');
}
document.getElementById('bodyTag').style.backgroundColor = result;

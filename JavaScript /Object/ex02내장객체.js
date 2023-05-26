// 내장객체 : 자바 스크립트에서 제공하는 객체
// Array, Math, Date, ...

let today = new Date();
let yesterday = new Date(2023,3,27,0,0,0);
console.log('오늘 : ', today);
console.log('어제 : ', yesterday);

//필요한 데이터 하나씩 가져오기!
let tYear = today.getFullYear(); //00년
let tMonth = today.getMonth()+1; // 0월, 월 정보는 0~11에 담겨있음
let tDate = today.getDate(); //0일
let tDay = today.getDay(); //0요일, 0~6으로 들어있음,0->일 , 6->토
let tHour = today.getHours(); //0시
let tMinute = today.getMinutes(); //0분
let tSecond = today.getSeconds(); //0초

//요일 0~6 -> 일~토
if(tDay==0){
    tDay='일';
}else if(tDay==1){
    tDay='월';
}
else if(tDay==2){
    tDay='화';
}else if(tDay==3){
    tDay='수';
}else if(tDay==4){
    tDay='목';
}else if(tDay==5){
    tDay='금';
}else {
    tDay='토';
}

// 출력형태 -> 콘솔창
// 00년 0월 0일 0요일 
// 0시 0분 0초
console.log(`${tYear}년 ${tMonth}월 ${tDate}일 ${tDay}요일`);
console.log(`${tHour}시 ${tMinute}분 ${tSecond}초`);
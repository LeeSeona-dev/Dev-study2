// 함수 : 특정 기능을 수행하는 소스 코드를 하나로 묶어서 
//      필요할 때마다 사용하기 위한 구조

// 함수 선언
function intro(){
    console.log('안녕하세요. 저는 이선아입니다.😊');
}

// 함수 호출
intro();

//매개변수
function lunch(menu){
    console.log(`점심으로는 ${menu} 먹었습니다.😆🍚`);
}

lunch('피자🍕');

// 매개변수 + return문
function dinner(menu){
    return `저녁으로는 ${menu} 먹을 거예요!🥓🥓`;
}
dinner('햄버거'); //출력x
console.log(dinner('햄버거'));


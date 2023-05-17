//1. 주어진 데이터를 담은 배열을 생성한다. (1~8)
let numList = [1,2,3,4,5,6,7,8];
//2. 데이터에서 홀수인 숫자를 찾고 개수를 세준다.

//홀수 넣어줄 배열
let result=[];
//홀수 개수 카운트
let cnt = 0;

// for(let i =0; i<numList.length; i++){
//     if(numList[i]%2==1){
//         result[cnt] = numList[i];
//         cnt++;
//     }
// }

for(let i of numList){
    if (i%2== 1){
        result[cnt]=i ;
        cnt++;
    }
}

//3. 결과를 팝업창으로 출력해준다.
alert(`list에 들어 있는 홀수는 ${result}이며, 총 ${cnt}개입니다.`);
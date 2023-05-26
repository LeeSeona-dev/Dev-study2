  //동적이벤트
        // $(document).on(이벤트타입 , 이벤트대상(css선택자), 이벤트핸들러)

        // 추가 , 제거 관련
        // attr(추가할속성, 속성의값):속성 추가 메소드
        // removeAttr(제거할속성): 속성 제거 메소드
        // removeClass(클래스이름): 클래스 속성값 제거 메소드
        //$(A).append(B) : B를 A 요소 마지막 위치에 추가 메소드 
        //$(A).prepend(B) : B를 A 요소 첫번째 위치에 추가해주는 메소드

        // input 관련
        // val() : input 입력 값 접근(JS -> value)
        // input 안의 값 비워주기 -> input반환객체.val('');

        // 부모 관련
        // parent() : 가장 가까운 부모 요소 선택
        // parents() : 모든 부모 요소 선택
        // closest(원하는요소) : 모든 부모 요소 대상 원하는 요소 접근 가능

        // 1. 좋아요 버튼 클릭 시 좋아요 -> 좋아요 취소 , 0 -> 1
        $(document).on('click','.likeBtn',(e)=>{
            // 버튼 내용 바꿔주기
            $(e.target).text('좋아요 취소💔');
            // 0->1 바꿔주기
            $('span').text('1');
            // likeBtn 클래스 제거 , dislikeBtn 클래스 추가
            // $(e.target).removeClass('likeBtn');
            $(e.target).removeAttr('class');
            $(e.target).attr('class','dislikeBtn');
        })

        // 2. 좋아요 취소 버튼 클릭시 좋아요 취소 -> 좋아요, 1 -> 0
        $(document).on('click','.dislikeBtn',(e)=>{
            $(e.target).text('좋아요💖');
            $('span').text('0');
            //dislikeBtn 클래스 제거, likeBtn 클래스 추가
            $(e.target).removeAttr('class');
            $(e.target).attr('class','likeBtn');
        })

        // 3. 댓글 작성 버튼 클릭 시 댓글 + 삭제 버튼 생성
        $(document).on('click','.textBtn',()=>{
            let textVal = $('input[type=text]').val();
            console.log(textVal);
            $('.container').prepend(`
            <p>
                ${textVal}
                <button class="removeBtn">삭제💥</button>
            </p>
            `)
            // input 안의 값 비워주기
            $('input').val('');
        })
        // 4. 삭제 버튼 클릭시 해당하는 댓글과 삭제버튼 제거
        $(document).on('click','button[class=removeBtn]', e=>{
            // $(e.target).parent().remove();
            // $(e.target).parents.remove();
            $(e.target).closest('p').remove();
        })

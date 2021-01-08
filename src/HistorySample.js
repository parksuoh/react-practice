import React, { useEffect } from 'react'

function HistorySample({ history }) {

    const goBack = () =>{
        history.goBack();
    }

    // 방문기록을 남김
    const goHome = () =>{
        history.push('/');
    }

    // 방문기록을 남기지 않음
    const replaceToHome = () => {
        history.replace('/');
    }

    useEffect(()=> {
        console.log(history);
        const unblock = history.block('정말 떠나실건가요?');
        // 페이지 이탈할때 한번더 물어봐줌 (확인 , 취소)
        return () => {
            unblock();
        }
    },[history]);

    return (
        <div>
            <button onClick={goBack}>뒤로가기</button>
            <button onClick={goHome}>홈으로</button>
            <button onClick={replaceToHome}>홈으로 (Replace)</button>
        </div>
    )
}

export default HistorySample

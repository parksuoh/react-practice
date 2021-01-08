import React from 'react'
import { withRouter } from 'react-router-dom';

function WithRouterSample( {location, match, history} ) {
    return (
        <div>
            <h4>location</h4>
            <textarea value={JSON.stringify(location, null, 2)}/> 
            {/* stringify -> JSON을 문자열 형태로 변환 해줌  null 2 <-- 들여쓰기 해줌 */}
            {/* 어디에서 불러오든 똑같은 정보를 불러옴 */}
            <h4>match</h4>
            <textarea value={JSON.stringify(match, null, 2)}/>
            {/* 현재 이 컴포넌트가 랜더링 된 위치를 기준으로 불러옴 */}
            <button onClick={() => history.push('/')}>홈으로</button>
        </div>
    )
}

export default withRouter(WithRouterSample);
// 라우트용 으로 만들지 않았어도 history location match 사용 가능
import React from 'react'
import qs from 'qs';

function About({location}) {

    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true, //앞에 ?표를 없애주는것
    }) 

    
    const detail = query.detail === 'true'; //문자열로써 비교해줘야함

    return (
        <div>
            <h1>소개</h1>
            <p>
                이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트입니다.
            </p>
            {detail && <p>detail값이 true 입니다.</p>}
        </div>
    )
}

export default About

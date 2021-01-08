import React from 'react'

const profileData = {
    velopert: {
        name: '김민준',
        description: 'Frontend Engineer @ RIDI'
    },
    homer: {
        name: '호머심슨',
        description: '심슨 가족에 나오는 아빠 열할 캐릭터'
    }
}

function Profile({ match }) { //라우트에서 가지고 오는 정보 match

    const { username } = match.params;
    const profile= profileData[username];

    if(!profile){
        return <div>존재하지 않는 사용자입니다.</div>
    }

    return (
        <div>
            <h3>{username} ({profile.name})</h3>
            <p>
                {profile.description}
            </p>
        </div>
    )
}

export default Profile

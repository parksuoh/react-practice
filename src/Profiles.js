import React from 'react'
import Profile from './Profile';
import { NavLink, Route } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

function Profiles() {
    return (
        <div>   
            <h3>사용자 목룍</h3>
            <ul>
                <li><NavLink to="/profiles/velopert" 
                activeStyle={{background: 'black', color: 'white', transition: '0.5s'}}
                >velopert</NavLink></li>
                <li><NavLink to="/profiles/homer" 
                activeStyle={{background: 'black', color: 'white', transition: '0.5s'}}>homer</NavLink></li>
            </ul>
            
            {/* /:  아무것도 들어온값이 없다면  */}
            <Route path="/profiles"  exact render={() => <div>사용자를 선택해주세요</div>}/>   
            {/* 들어온값이 있다면 */}
            <Route path="/profiles/:username"  component={Profile}/>
            <WithRouterSample />
        </div>
    )
}

export default Profiles

import React, { useState } from "react"; //유즈 스테익트, 유즈 임펙트
import './Back.css'; // css 디자인 
import Axios from "axios";
import { useDispatch } from 'react-redux';
import axios from "axios";
import { TokenAtom } from "./Recoil/TokenAtom";

function Make(props){
    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordcheck, setPasswordcheck] = useState("");
    const setAccessToken = useSetRecoilState(TokenAtom)

    const handlesubit = (e) => {
        e.preventDefault()
        axios.post('/user/login',{name:userName, email:email, pw:password, pwcheck:passwordcheck }).then((res)=>{
            console.log(res.data)
        })
    }
    return(
        <div>
            <div className="MakePag">
                <h1 className="Make">회원가입</h1>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="MakeWrap">이메일</div>
                <input 
                    type="text" 
                    className="MakeInput"
                    placeholder="Email"
                    value={email}
                    onChange={(event)=>{
                        setEmail(event.target.value); 
                        console.log(email)
                    }} />
                <br />
                <br />
                <br />
                <div className="MakeWrap">닉네임</div>
                <input 
                    type="text" 
                    className="MakeInput"
                    placeholder="ex. 명순이"
                    value={userName}
                    onChange={(event)=>{
                        setUsername(event.target.value);
                        console.log(userName)
                    }} />
                <br />
                <br />
                <br />
                <div className="MakeWrap">비밀번호</div>
                <input 
                    type="password" 
                    className="MakeInput" 
                    placeholder="비밀번호"
                    value={password}
                    onChange={(event)=>{
                        setPassword(event.target.value);
                        console.log(password)
                    }} />
                <br />
                <br />
                <br />
                <div className="MakeWrap">비밀번호 확인</div>
                <input 
                    type="password" 
                    className="MakeInput" 
                    placeholder="비밀번호 확인"
                    value={passwordcheck}
                    onChange={(event)=>{
                        setPasswordcheck(event.target.value);
                        console.log(passwordcheck)
                    }}/>
                <br />
                <br />
                <br />
                <button type="submit" className="button">계정 생성하기</button>
            </div>
        </div>

    )
}

export default Make;

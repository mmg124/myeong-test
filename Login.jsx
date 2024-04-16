import React, { useEffect, useState } from "react"; //유즈 스테익트, 유즈 임펙트
import './Login.css'; // css 디자인 

const User = {
    email: 'godengar4444@gmail.com',
    pw: 'myeongminij1225!!'
}
function Login() { // 로그인 페이지
    const [email, setEmail] = useState(''); // 이메일 함수
    const [pw, setPw] = useState(""); // 비밀번호 함수 
    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);
    const handleId = (e) => {
        setEmail(e.target.value);
        const regex = 
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (regex.test(e.target.value)) { 
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
    }
    const handlePw = (e) => {
        setPw(e.target.value);
        const regex = 
            /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if (regex.test(e.target.value)) { 
            setPwValid(true);
        } else {
            setPwValid(false);
        }
    }
    const onClickConfirmButton = () => {
        if(email === User.email && pw === User.pw) {
            alert("로그인이 정상적으로 처리되었습니다.")
        } else {
            alert("이메일이 존재하지 않거나 비밀번호가 일치하지 않습니다.")
        } 
    }
    useEffect(()=>{
        if(emailValid && pwValid){
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    },[emailValid, pwValid, notAllow])
    return (
        <div className="pag">
            <div className="tatleWrap">
                이메일 주소와 비밀번호를
                <br />
                입력해주세요.
            </div>
            <br />
            <div className="contentWrap">
                <div className="inputTitle">이메일 주소</div>
                <div className="inputWrap">
                    <input className="inputs"
                        type='text'
                        value={email}
                        onChange={handleId} />
                </div>
                <br />
                <div className="errorMessageWrap">
                    {!emailValid && email.length > 0 && (
                        <div>올바른 이메일을 입력해주세요</div>
                    )}
                </div>
                <br />
                <div className="inputTitle" >비밀번호</div>
                <div className="inputWrap">
                    <input className="inputs"
                        type='password'
                        value={pw}
                        onChange={handlePw} /> 
                </div>
                <br />
                <div className="errorMessageWrap">
                    {!pwValid && pw.length > 0 && (
                        <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                    )}
                </div>
                <br />
            </div>
            <div>
                <button onClick={onClickConfirmButton} disabled={notAllow} className="bottombutton">로그인</button>
            </div>
            <br />
            <div style={{
                position:"relative",
                top:"140px",
                left:"125px",
                fontWeight:"550"
            }}>계정이 없으신가요?</div>
            <a href="http://localhost:3000/Make" className="si">  회원가입하기</a>
        
        </div>
    )
}
export default Login;
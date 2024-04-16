import './Main.css';
import Logo from "./로고.png";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Login from "./com/Login";
import Make from "./com/Make";
import Post from "./com/Post";
import Home from "./com/Home";

function Main() {
  return (
  <div className="main">
    <div className="box">
      <img className="logo" src={Logo} />
      <BrowserRouter>
        <Link to="/" className="Home">홈</Link>
        <Link to="Login" className="login">로그인</Link>
        <Link to="Make" className="make">회원가입</Link>
        <Link to="Post" className="post">내 게시물 쓰기</Link>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="Login" element={<Login />}/>
          <Route path="Make" element={<Make />}/>
          <Route path="Post" element={<Post />}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  </div> 
  
  );
}

export default Main;

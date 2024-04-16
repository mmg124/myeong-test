import './Post.css';
import {useEffect, useState} from "react";

function Post (){
    const [tatle, setTatle] = useState('');
    const [deail, setDeail] = useState("");
    const handleTatle = (e) => {
        setTatle(e.target.value);
    }
    const handleDeail = (e) => {
        setDeail(e.target.value);
    }
    const PostButton = () => {
        if(tatle.length>0 && deail.length>0){
            alert("게시물이 업로드 되었습니다.")
        } else {
            alert("제목이나 내용을 입력하세요.");
        }
    }
    return (
        <div className="postpag">
            <br />
            <br />
            <div className="PostWrite">게시물 작성하기</div>
            <br />
            <div className="PostWrap">
                <div className="PostTatle">제목</div>
                <div className="inputPost">
                    <input className="inputtatle" value={tatle} onChange={handleTatle} />
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className="PostWrap">
                <div className="PostTatle">내용</div>
                <div className="inputPost">
                    <input className="inputdetail" value={deail} onChange={handleDeail}/>
                </div>
            </div>
            <br />
            <br />
            <button onClick={PostButton} className="Postbutton">게시물 업로드</button>
        </div>
    )
}

export default Post;

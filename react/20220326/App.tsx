#코딩악마
import React, {useRef,useState} from "react";
import { useNavigate } from 'react-router-dom';
import useFetch from "../hooks/useFetch"
import {IDay} from "./DayList";

export default function CreateWord(){
    const days : IDay[] = useFetch("http://localhost:3001/days");
    const navigate = useNavigate();
    const [isLoding, setIsLoding] = useState(false);
    function onSubmit(e : React.FormEvent){
        e.preventDefault();
        if(!isLoding && engRef.current && korRef.current && dayRef.current){
            setIsLoding(true);
            const eng = engRef.current.value;
            const kor = korRef.current.value;
            const day = dayRef.current.value;
            fetch(`http://localhost:3001/words/`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    eng,
                    kor,
                    day,
                    isDone:false
                })
            })
            .then(res=>{
                if(res.ok){
                    alert("생성이 완료되었습니다.");
                    navigate(`/day/${day}`);
                    setIsLoding(false);
                }
            })
        }
    }

    const engRef = useRef<HTMLInputElement>(null);
    const korRef = useRef<HTMLInputElement>(null);
    const dayRef = useRef<HTMLSelectElement>(null);

    return(
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>eng</label>
                <input type="text" placeholder="eng" ref={engRef}/>
            </div>
            <div className="input_area">
                <label>kor</label>
                <input type="text" placeholder="kor" ref={korRef}/>
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day=>(
                        <option key={day.id} value={day.day}>{day.day}</option>
                    ))}
                </select>
            </div>
            <button style={{opacity: isLoding ? 0.3 : 1}}>{isLoding ? "저장중..." : "저장"}</button>
        </form>
    )
}

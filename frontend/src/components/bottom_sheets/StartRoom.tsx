import {FcGlobe} from "react-icons/fc"
import {FC, MouseEvent, MouseEventHandler, useState} from "react"
import styled from "styled-components";

export type Props={
    setSheetCreateRoom:(item:boolean)=>void
    setSheetVisible:(item:boolean)=>void
}

const StartRoom:FC<Props>=(props)=>{
    const [room,setRoom]=useState("open");
    return (
        <>
            <SwitchLine></SwitchLine>
            <Main>
            <TextRight>
                <button className="">
                    + Add a topic
                </button>
            </TextRight>

            <SelectRoom>
                <button className={room==="open" ? "active" : ""}
                onClick={(e)=>setRoom("open")}
                >
                    <div>
                        <FcGlobe/>
                    </div>
                    Open
                </button>

                <button className={room==="social" ? "active" : ""}
                onClick={(e)=>setRoom("social")}
                >
                    <div>
                        <FcGlobe/>
                    </div>
                    Social
                </button>

                <button className={room==="closed" ? "active" : ""}
                onClick={(e)=>setRoom("closed")}
                >
                    <div>
                        <FcGlobe/>
                    </div>
                    Closed
                </button>
            </SelectRoom>
            <p>Start a room <span>{
                room === "closed" ? "for people I choose" :
                room === "social" ? "with people I follow" :
                "open to everyone"
                }</span></p>

                <MyBtn
                    onClick={()=>{
                        props.setSheetCreateRoom(true);
                        props.setSheetVisible(true)
                    }}
                >Let's Go</MyBtn>
            </Main>
        </>
    )
}

export default StartRoom;

const SwitchLine=styled.button`
   background-color:#cccccc;
   border: none;
   border-radius: 50px;
   width: 35px;
   height: 4px;
   position: absolute;
   top: 6px;
    left:50%;
    &:hover{
        cursor: pointer;
        border:2px solid black;
    }
`
const TextRight=styled.div`
/* border: 2px solid red; */
    button{
        display:block;
        margin-left:auto;
        border:none;
        background-color: transparent;
        color:#28ae61;
    }
`
const Main=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    min-height: 200px;
    /* border:2px solid red; */
    overflow: hidden;

    p{
        margin-top: 10px;
        padding: 10px;
        text-align: center;
        border-top:1px solid rgba(0,0,0,0.2);
    }
`

const SelectRoom=styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
 
    /* border:2px solid red; */
    button{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width:120px;
        height: 100px;
        border:none;
        background:transparent;
        border-radius: 20px;
        div{
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #28ae61;
            border-radius:20px;
            width:60px;
            height: 60px;
            font-size: 100px;
            padding: 2px;
        }
    }

    .active{
        border:2px solid #28ae61;
        background-color: #d2f1e0;
    }
`

const MyBtn=styled.button`
    width: 200px;
    height: 40px;
    margin: auto;
    border:none;
    background-color: #28ae61;
    border-radius: 50px;
    /* padding: 10px; */
    font-size: 17px;

`
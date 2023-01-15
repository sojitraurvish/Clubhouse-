import styled from "styled-components"
import DailyInfoCard from "../components/DailyInfoCard"
import Header from "../components/Header"
import RoomCard from "../components/RoomCard"
import {AiOutlinePlus} from "react-icons/ai"
import {BsGrid3X3Gap} from "react-icons/bs"
import { useState } from "react"
import BottomSheet from "../components/BottomSheet"
import data from "../data/roomCard.json"
import newRoomData from "../data/newRoom.json"
// e7e4d5
const Home=()=>{

    const [sheetVisiable,setSheetVisiable]=useState(false);
    const [itemsVisible,setItemsVisible]=useState(false);
    const [sheetCreateRoom,setSheetCreateRoom]=useState(false);
    const [loader,setLoader]=useState(false);
    const [cardId,setCardId]=useState(1);
    
    return (
        <>
        {
            loader ? (
                <div style={{
                    position:"fixed",
                    top:"0",
                    left:"0",
                    right:"0",
                    bottom:"0",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    
                }}>
                    <img src="/images/loader.gif" style={{
                        backgroundColor:"none",
                        color:"gro"                  
                    }} alt="" />
                </div>
            ):(
                ""
            )
        }
            <Header/>
            <Section>
                <DailyInfoCard/>
                <RoomCard/>
                <RoomCard/>
            </Section>
            <ButtomSection>
                <button onClick={(e)=>setSheetVisiable(!sheetVisiable)}>
                    <AiOutlinePlus/>
                    Start a room
                </button>
                <button>
                    <BsGrid3X3Gap/>
                </button>
            </ButtomSection> 

            <BottomSheet
            sheetTitle="start room"
            sheetVisiable={sheetVisiable}
            setSheetVisible={(item:boolean)=>setSheetVisiable(item)}
            cardDetail={data.find((item)=> item.id==cardId)}
            setItemsVisible={(item:boolean)=>setItemsVisible(item)}
            setSheetCreateRoom={(item:boolean)=>{
                setLoader(true)
                setTimeout(()=>{
                    setSheetCreateRoom(item);
                    setLoader(false)
                },1000)
            }}
            />
            <BottomSheet
                sheetTitle="new room"
                setSheetVisible={(item:boolean)=>setSheetCreateRoom(item)}
                sheetVisiable={sheetCreateRoom}
                cardDetail={newRoomData}
                setItemsVisible={(item)=>setItemsVisible(item)}
            />
        </>
    )
}

export default Home

const Section=styled.section`
    padding: 10px 20px;
`

const ButtomSection=styled.div`
    width:100%;
    /* border: 2px solid red; */
    display: flex;
    align-items: center;
    height: 20vh;
    position: sticky;
    bottom: 0;
    background-color:rgba(255,255,255,0.90);

    button{
        margin-left:auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:first-child{
            /* width: 200px; */
            outline: none;
            border: none;
            background-color: #28ae61;
            border-radius: 50px;
            color: white;
            font-size: 20px;
            padding: 10px 20px;
            width: 36%;
            margin-left: 33%;
            /* margin-right: auto; */
            &:hover{
                cursor: pointer;
                transform: scale(1.01,1.01);
            }
        }
        &:nth-child(2){
            border: none;
            background-color: transparent;
            margin-right: 30px;
            /* border:2px solid red; */
            svg{
                width: 25px;
                height: 25px;
                &:hover{
                cursor: pointer;
                transform: scale(1.01,1.01);
            }
            }
            
        }
    }
`
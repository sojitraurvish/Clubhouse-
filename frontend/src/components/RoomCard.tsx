import styled from "styled-components"
import { Container as Card } from "./DailyInfoCard"
import data from "../data/roomCard.json"
import {BsChatDots,BsChatDotsFill,BsFillPersonFill} from "react-icons/bs"

const RoomCard=()=>{
    return (
        <Container>
            {
                data.map((result)=>(
                    <Content key={result.id}>
                        <p>{result.title}</p>
                        <h4>{result.sub_title}</h4>
                        <InnerChild>
                            <div>
                                <img src="/images/user-img.jpg" alt="" />
                                <img src="/images/user-img.jpg" alt="" />
                            </div>
                            <AllPeople>
                                {result.members.map((member)=>(
                                    <p>{member.first_name+" "+member.last_name} <BsChatDots/></p> 
                                ))}
                                <div>
                                    <div>
                                        <span>1.8</span>
                                        <BsFillPersonFill/>
                                    </div>
                                    <div>
                                        <span>5</span>
                                        <BsChatDotsFill/>
                                    </div>
                                </div>
                            </AllPeople>
                        </InnerChild>
                    </Content>
                ))
            }
        </Container>
    )
}

export default RoomCard

const Container=styled.div``
const InnerChild=styled.div`
    display:flex;
    /* border: 2px solid red; */
    & > div{
        &:first-child{
            position:relative;
            /* border:2px solid red; */
            width:25%;
            img{
                top: 10px;
                width:65%;
                position:absolute;
                border-radius:17px;
                &:nth-child(2){
                    top:30px;
                    left:20px;
                }
            }
        }

    }
`
const AllPeople=styled.div`
    margin-left:10px;
    display: flex;
    flex-direction: column;
    width:100%;
    /* border:2px solid red; */

 
    p{
    }
    div{
        display:flex;
        div{
            display: flex;
            /* border:2px solid red; */
            align-items: center;
            justify-content: space-around;
            &:nth-child(2){
                margin:0px 15px;
            }
            span{
                text-align: center;
                margin:0px 6px;
            }
        }
    }
`

const Content=styled(Card)`
&:hover{
            transform: scale(1.01,1.01);
            cursor: pointer;
        }
    background-color: white;
    border-radius: 25px;
    margin: 16px auto;
    display: flex;
    flex-direction: column;
    P{
        margin:8px 0px;
        font-size:14px;
        color:rgba(0,0,0,0.6)
    }
    h4{
        margin:5px 0px;
    }
`
import styled from "styled-components"
import data from "../data/dailyCard.json"

const DailyInfoCard=()=>{
    return (
        <Container>
            {
                data.map((result)=>(
                    <Main key={result._id}>
                        <div>{result.time}</div>
                        <Right>
                            <p>{result.title}</p>
                            <h4>{result.description}</h4>
                        </Right>
                    </Main>
                ))
            }
        </Container>
    )
}

export default DailyInfoCard

const Main=styled.div``
const Right=styled.div``

export const Container=styled.div`
    
    background-color:#e7e4d5;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    padding:14px 40px;
    &:hover{
            transform: scale(1.01,1.01);
            cursor: pointer;
        }
    ${Main}{
        display: flex;
        padding: 8px 0px;
        white-space: nowrap;
        text-overflow: ellipsis;
        
        div{
            /* border: 2px solid red; */
            &:first-child{
                /* border: 2px solid red; */
                width: 20%;
            }
            &:nth-child(2){
                max-width: 80%;
                text-overflow: ellipsis;
                p{
                    font-size: 12px;
                    color: rgba(0,0,0,0.7);
                }
                h4{
                    /* border: 2px solid red; */
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                /* border: 2px solid red; */
            }
        }
    
    }
`

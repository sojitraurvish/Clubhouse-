import styled from "styled-components"

const Header=()=>{
    return (
        <Container>
            <img src="/images/search.png" alt="" />
            <div>
                <div>
                    <img src="/images/invite.png" alt="" />
                </div>
                <div>
                    <img src="/images/calendar.png" alt="" />
                </div>
                <div>
                    <img src="/images/noti.png" alt="" />
                </div>
                <div>
                    <img src="/images/b1.png" alt="" />
                </div>
            </div>
        </Container>
    )
}

export default Header

const Container=styled.div`
    /* border: 2px solid red; */
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px ;
    background-color: transparent;
    img{
        width: 42px;
    }
    div{
        display: flex;
        justify-content: space-evenly;
        width: 60%;
        /* border: 2px solid red; */
        div{
            width:42px;
            img{
                width: 100%;
            }
        }
    }
`
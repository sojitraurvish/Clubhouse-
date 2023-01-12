import styled from "styled-components"

const AllowNotification=()=>{
    return (
        <Container>
            <p>Last, important step!</p>
            <p>Enable notifications to know when people are talking</p>
            <NotificationBox>
                <h3>"Clubhouse" Would Like to Send You Notifications</h3>
                <p>Notifications may inside alerts,sounds and icon badges</p>
                <div>
                    <h3>Don't Allow</h3>
                    <h3>Allow</h3>
                </div>
                <img src="/images/handIcon.svg" alt="" />
            </NotificationBox>
            
        </Container>
    )
}

export default AllowNotification



const Container=styled.div`
    background-color: #f2f0e4;
    padding:20px 40px;
    height:100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        text-align: center;
        width: 300px;
        margin:12px 0;
    }

`
const NotificationBox=styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    padding-top: 20px;
    p{
        width: 100%;
        padding: 10px;
        padding-bottom: 19px;
    }
    div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content:space-around;
        border-top: 1px solid rgba(0,0,0,0.30);
        height: 40px;
        h3{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 40px;
            width: 100%;
            color:#80C2FB;
            &:first-child{
                border-right:1px solid rgba(0,0,0,0.30);
            }
            &:hover{
                cursor: pointer;
            }
        }
    }
    img{

        position: absolute;
        width: 80px;
        top:105%;
        right: 30px;
        
    }
`
import { Link } from "react-router-dom"
import styled from "styled-components"

const CodeConfirm=()=>{
    return (
        <Container>
            <BackBtn to="">
                <img src="/images/arrow.png" alt="" />
            </BackBtn>
            <h2>Enter the code we just texted you</h2>
            <input type="number" />
            <p>Didn't receive it? <a href="">Top to resend.</a></p>
            <Btn to="">Next
                <img src="/images/nextArrowIcon.svg" alt="" />
            </Btn>
        </Container>
    )
}

export default CodeConfirm

const BackBtn=styled(Link)``
const Btn=styled(Link)``

const Container=styled.div`
    position: relative;
    padding: 20px 40px;
    background-color: #f2f0e4;
    height:100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${BackBtn}{
        position: absolute;
        width: 20px;
        top: 20px;
        left: 20px;
        img{
            position: absolute;
            width: 100%;
        }
    }
    h2{
        /* border: 2px solid red; */
        width: 250px;
        text-align: center;
        margin-top: -150px;
        font-size:24px;
    }
    input[type="number"]{
        border:none;
        margin-top: 25px;
        height:26px;
        width: 210px;
    }
    p{
        margin-top: 9px;
        font-size: 13px;
    }
    ${Btn}{
        margin-top: 3px;
        display: flex;
        background-color:#80C2FB;
        padding: 15px 40px;
        border-radius: 50px;
        text-decoration: none;
        color: white;
        font-size: 15px;
        img{
            margin-left: 10px;
        }
    }
`
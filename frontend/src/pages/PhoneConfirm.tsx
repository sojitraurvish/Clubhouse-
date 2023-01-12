import PhoneInput from "react-phone-number-input"
import {useState} from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const PhoneConfirm=()=>{
    const [value, setValue] = useState()
    return (
        <Container>
            <BackBtn to="">
                <img src="/images/arrow.png"/>
            </BackBtn>

            <p>Enter your Phone#</p>
            
            <Phone 
                international 
                defaultCountry="US"
                value={value}
                onChange={setValue}
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aliquam modi inventore saepe accusantium debitis perferendis, ea quaerat adipisci fuga dignissimos quos repellendus voluptatem quae expedita praesentium, ducimus temporibus? Velit?</p>
        
            <Btn to="code_confirm">
                Next
                <img src="/images/nextArrowIcon.svg" alt="" />
            </Btn>
        
        </Container>
    )
}

export default PhoneConfirm

const Btn=styled(Link)`
    
`

const Container=styled.div`
    position: relative;
    background-color: #f2f0e4;
    height: 100vh;
    padding:150px 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    p{
        text-align: center;
    }
    ${Btn}{
        display: flex;
        background-color:#80C2FB;
        padding: 15px 50px;
        border-radius: 50px;
        text-decoration: none;
        color: white;
        font-size: 15px;
        img{
            margin-left: 10px;
        }
    }
`
const Phone=styled(PhoneInput)`
    display: flex;
    justify-content: center;
    align-items: center;
    div{
        position: relative;
        select{
            width:52px;
            height:30px;
            border:none;
        }
        div{
            position: absolute;
            top:5px;
            /* right:3px; */
            left:5px;
            align-items: center;
            width:30px;
            height:30px;
        }
    }
    input{
        border:none;
        outline: none;
        width:100%;
        height:30px;
        padding-left: 5px;
        font-size: 14px;
    }
`

const BackBtn=styled(Link)`
    /* position: absolute; */
    position:  absolute;
        width: 20px;
        top: 20px;
        left: 20px;
    img{
        position:  absolute;
        width: 100%;
    }
`

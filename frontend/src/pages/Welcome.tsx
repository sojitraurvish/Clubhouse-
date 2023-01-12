import { Link } from "react-router-dom"
import styled from "styled-components"


export default function Welcome(){
    return (
        <Container>
            <h1>Welcome!</h1>
            <Section1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolor asperiores quam nisi quas aut tempore, ullam ratione quia. Officia nihil illo veritatis temporibus repellat animi sunt, eveniet distinctio voluptates!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolor asperiores quam nisi quas aut tempore, ullam ratione quia. Officia nihil illo veritatis temporibus repellat animi sunt, eveniet distinctio voluptates!</p>
                <p>Phoan & the clubhouse team</p>
            </Section1>

            <Section2>
                <Link1 to="/get_username">
                    Get your username
                </Link1>
                <Link1 to="">Have an invite text? Sign in</Link1>
            </Section2>
        </Container>
    )
}

const Container=styled.div`
    /* border: 2px solid red; */
    background-color: #f2f0e4;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: flex-start;
    padding: 80px 30px;
    h1{
        /* border: 2px solid red; */
        margin-left:14px;
        
    }
`
const Section1=styled.div`
    /* width */
::-webkit-scrollbar {
  width: 5px;
 
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
    height: 60vh;
    font-size: 23px;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    overflow:auto;
    /* border: 2px solid red; */
    p{
        padding:20px;
    }
`

const Link1=styled(Link)``

const Section2=styled.div`
    /* border: 2px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    ${Link1}{
        text-decoration: none;
        margin-top: 20px;
        &:first-child{
            background-color:#80C2FB;
            font-size: 22px;
            color: white;
            padding: 15px 40px;
            border-radius: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &:nth-child(2){
            /* border: 2px solid red; */
            display: flex;
            align-items: center;
            justify-content: center;
            color:#80C2FB;
            font-weight: 600;
        }

    }
`

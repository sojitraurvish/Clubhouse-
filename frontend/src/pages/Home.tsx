import styled from "styled-components"
import DailyInfoCard from "../components/DailyInfoCard"
import Header from "../components/Header"
import RoomCard from "../components/RoomCard"
// e7e4d5
const Home=()=>{
    return (
        <>
            <Header/>
            <Section>
                <DailyInfoCard/>
                <RoomCard/>
                <RoomCard/>
                
            </Section>
        </>
    )
}

export default Home

const Section=styled.section`
    padding: 10px 20px;
`
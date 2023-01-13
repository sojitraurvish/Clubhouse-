import { FC } from "react"

export type AppLayout={
    children:JSX.Element
    // children:React.ReactNode
    // children:React.ReactElement
    // children:React.FunctionComponent
}

const AppLayout:FC<AppLayout>=({children})=>{
    return (
        <div style={{
            backgroundColor:"#f2f0e4",
            height:"100%",
            position:"relative",
            width:"100%",
            maxWidth:"500px",
            margin:"auto"
        }}>{children}</div>
    )
}

export default AppLayout
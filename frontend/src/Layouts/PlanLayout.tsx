import React, { FC } from "react"

export type PlanLayoutProps={
    children:JSX.Element
    // children:React.ReactNode
    // children:React.ReactElement
    // children:React.FunctionComponent
}

const PlanLayout:FC<PlanLayoutProps>=({children})=>{
    return(
        <div style={{
            width:"100%",
            maxWidth:"500px",
            margin:"auto"
        }}>
            {children}
        </div>
    )
}

export default PlanLayout
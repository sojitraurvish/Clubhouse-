import { type } from "@testing-library/user-event/dist/type"
import { FC } from "react"
import SwipeableBottomSheet from "react-swipeable-bottom-sheet"
import styled from "styled-components"
import NewRoom from "./bottom_sheets/NewRoom"
import StartRoom from "./bottom_sheets/StartRoom"

export type item={
    id?: number;
    title?: string;
    sub_title?: string;
    members?: {
        first_name: string;
        last_name: string;
    }[];
}

export type Props={
    sheetVisiable:boolean
    setSheetVisible:(item:boolean)=>void
    sheetTitle:string
    setItemsVisible:(item:boolean)=>void
    cardDetail?:item
    setSheetCreateRoom?:(item:boolean)=>void
}

const BottomSheet:FC<Props>=(props)=>{
    return (
        <SwipeableBottomSheet
        open={props.sheetVisiable}
        onChange={()=>{
            props.setSheetVisible(!props.sheetVisiable)
            props.setItemsVisible(true)
        }}
        fullScreen={props.sheetTitle=="room detail" ? true :false}
        >
        <MyShitContent style={{backgroundColor:props.sheetTitle=="profile" ? "transparent" : ""}}>
            
            {
                props.sheetTitle=="new room" ?(
                    <NewRoom 
                        setSheetCreateRoom={props.setSheetCreateRoom!}
                        setSheetVisible={(item:boolean)=>{
                            props.setSheetCreateRoom!(item)
                            props.setItemsVisible(true)
                        }}
                    />
                ):
                props.sheetTitle=="start room" ?(
                    (
                        <StartRoom 
                        setSheetCreateRoom={props.setSheetCreateRoom!}
                        setSheetVisible={(item:boolean)=>{
                        props.setSheetCreateRoom!(item)
                        props.setItemsVisible(true)
                    }}
                
                    />
                    )
                ):(
                    ""
                )
            }
        </MyShitContent>
        </SwipeableBottomSheet>
    )
}

export default BottomSheet

const MyShitContent=styled.div`
    background-color: #ffffff;
    border-radius: 1.5 1.5 0 0;
    padding:1.5em 1em;
    position: relative;
    min-height: 200px;
`
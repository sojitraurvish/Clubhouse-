import { FC, useState } from "react";

export type Props={
    setSheetCreateRoom:(item:boolean)=>void
    setSheetVisible:(item:boolean)=>void
}

const NewRoom:FC<Props>=(props)=>{
    const [micMuteVisible,setMicMuteVisible]=useState(false)
    return (
        <div> potatos</div>
    );
}

export default NewRoom;
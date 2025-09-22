import clsx from "clsx"
import { ReactNode } from "react"

export enum HeaderPosition {
    top, bottom, left, right 
}
interface InfoBox {
    children?: ReactNode 

    w: string 
    h: string 
    headerPosition?: HeaderPosition
    top?: string 
    left?: string 
    bottom?: string 
    right?: string 

    extraClasses?: string 
}
export default function InfoBox({children, w, h, headerPosition=HeaderPosition.top, top="unset", left="unset", bottom="unset", right="unset", extraClasses=""}:InfoBox){
    let flexClass = ""
    let headerClasses = ""
    switch(headerPosition){
        case HeaderPosition.top: 
            flexClass = "flex flex-col"
            headerClasses = "border-b-1"
            break 
        case HeaderPosition.bottom: 
            flexClass = "flex flex-col-reverse"
            headerClasses = "border-t-1"
            break 
        case HeaderPosition.left: 
            flexClass = "flex flex-row"
            headerClasses = "border-r-1"
            break 
        case HeaderPosition.right: 
            flexClass = "flex flex-row-reverse"
            headerClasses = "border-l-1"
            break 
    }

    return (
        <div className={clsx(flexClass, "absolute border-1 border-gray-800", extraClasses)} style={{top, left, bottom, right, width:w, height: h}}>
            {!!children && <h3 className={clsx("bg-[#C1C58D] text-[12px] text-black font-bold p-1 border-gray-800", headerClasses)}>{children}</h3>}
            <div className="bg-[#cbcdb752] h-full w-full" style={{}}></div>
        </div>
    )
}
import { ReactNode } from "react";

export default function Badge({children}:{children:ReactNode}){

    return (
        <span className="bg-gray-800 pl-2 pr-1 py-1 mr-1 text-white font-bold rounded-sm rounded-bl-xl">{children}</span>
    )
}
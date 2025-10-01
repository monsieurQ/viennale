import clsx from "clsx"

interface Nummerierung {
    num: string|number
    dark?: boolean 
}
export const Nummerierung = ({num, dark=false}:Nummerierung) => <div className={clsx(
    "p-2 text-center w-[40px] h-[40px] text-xs  rounded-full font-bold shrink-0",
    dark ? "bg-amber-400 text-gray-800" : "bg-gray-800 text-white")}>{num}</div>
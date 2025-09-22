
interface Nummerierung {
    num: string|number
}
export const Nummerierung = ({num}:Nummerierung) => <div className="bg-gray-800 p-2 text-center w-[40px] h-[40px] text-xs text-neutral-200 rounded-full shrink-0">{num}</div>
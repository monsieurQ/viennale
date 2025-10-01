import clsx from "clsx"
import { ReactNode, useMemo } from "react"
import { Link } from "react-router"

interface Sidebar {
    headings: Heading[]
    top: Heading
}
type Heading =  {
    name: string 
    id: string 
    children?: Heading[] 
}


export function Sidebar({top, headings}:Sidebar){
    const render = useMemo(() => {
        const items:ReactNode[] = []
        headings.forEach(h => recursiveHeading(items, h, 0))
        return items
    }, [headings, headings.length])
    
    
    
    return (
        <div className={clsx(
            "bg-[#ffd360] flex flex-col gap-1 sidebar p-8 h-fit border-2 border-gray-800 brutal-shadow",
            "mx-12 mb-8 xl:mx-0 xl:mb-0 w-fit xl:w-[350px]"
        )}>
            {/* <img src="/wichtig/katzikatzi.png" className="absolute w-[96px] -top-[39px]" /> */}
            <button onClick={() => window.scrollTo(0, 0)} className="block cursor-pointer pb-2 border-b-2 border-black xl:text-end text-start font-bold">{top.name}</button>
            {render}
        </div>
    )
}

function scrollToElement(id:string){
    const e = document.getElementById(id)
    if(e) e.scrollIntoView({behavior:"smooth"})
}

function recursiveHeading(items: ReactNode[], heading:Heading, level:number){
    const item = <Link to={{hash:"#"+heading.id}} style={{paddingLeft: level*24+"px", marginTop: level==0 ? "12px" : "0"}} className="sidebarLink">{heading.name}</Link>
    items.push(item)
    if(heading.children) heading.children.forEach(h => recursiveHeading(items, h, level+1))
}
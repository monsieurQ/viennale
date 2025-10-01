import clsx from "clsx"
import { Link, NavLink } from "react-router"
import { links } from "../main"

interface Navigation {
    site?: string
    setSite?: (site:string) => void
}
export default function Navigation({site, setSite}:Navigation){

    return (
        <nav className={clsx(
            "xl:gap-8 xl:px-12",
            // "max-[1100px]:gap-6 max-[1100px]:px-8 max-[1100px]:text-base",
            // "max-[900px]:gap-4",
            // "max-[900px]:px-6",
            "gap-2 px-4 text-sm",
            "flex flex-row py-8 bg-[#fee8d1] max-w-full flex-wrap")}>
            <NavLink to="/">
                <button className={clsx("cursor-pointer text-start p-2")} 
                >Intro</button>
            </NavLink>
            <NavLink to={links.filmEdit.path}>
                <button className={clsx("cursor-pointer text-start p-2")}  
                >Film bearbeiten
                </button>
            </NavLink>
            <NavLink to={links.links.path}>
                <button className={clsx("cursor-pointer text-start p-2")}  
                >Verlinkungen</button>
            </NavLink>
            <NavLink to={links.keywords.path}>
                <button className={clsx("cursor-pointer text-start p-2")}  
                >Keywords</button>
            </NavLink>
            <NavLink to={links.trailer.path}>
                <button className={clsx("cursor-pointer text-start p-2")}  
                >Trailer</button>
            </NavLink>
            <NavLink to={links.filmnavigator.path}>
                <button className={clsx("cursor-pointer text-start p-2")}  
                >Filmnavigator</button>
            </NavLink>
            <NavLink to={links.sponsoren.path}>
                <button className={clsx("cursor-pointer text-start p-2")}  
                >Sponsoren</button>
            </NavLink>
            <NavLink to={links.beispiele.path}>
                <button className={clsx("cursor-pointer text-start p-2")}  
                >Beispiele</button>
            </NavLink>
        </nav>
    )
}
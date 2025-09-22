import clsx from "clsx"
import { ReactNode, useEffect, useMemo, useRef, useState } from "react"

export enum Locations {
    n, e, s, w, ne, nw, se, sw
}

export type Point = {xP:number, yP:number}
export type CurvedPoint = {cx: number, cy: number, x2: number, y2: number}
export type AbsolutePath = {points: (Point|CurvedPoint)[], classes?: string} 

interface AbsoluteSVG{
    children?: ReactNode
    paths?: AbsolutePath[]
    classes?: string 
}

export default function AbsoluteSVG({children, paths=[], classes}:AbsoluteSVG){
    const [viewBox, setViewBox] = useState({w:100, h:100})
    const [width, setWidth] = useState<number>(100)
    const [height, setHeight] = useState(100)
    const svgRef = useRef<SVGSVGElement>(null)

    function resizeViewBox(){
        if(!svgRef.current) return 
        setViewBox({w: svgRef.current.getBoundingClientRect().width, h: svgRef.current.getBoundingClientRect().height})
        setWidth(svgRef.current.getBoundingClientRect().width)
        setHeight(svgRef.current.getBoundingClientRect().height)
    }

    useEffect(() => {
        resizeViewBox()
    }, [svgRef.current])
    useEffect(() => {
        document.addEventListener('resize', resizeViewBox)
        setInterval(resizeViewBox, 200)
        return () => document.removeEventListener('resize', resizeViewBox)
    }, [])

    const pathsMemo:ReactNode[] = useMemo(() => {
        let tempPaths:ReactNode[] = []
        paths.forEach(path => {
            let pathPoints = ""
            path.points.forEach((point, i) => {
                if("xP" in point){ 
                    if(i==0) pathPoints += `M${point.xP * width}, ${point.yP * height} `
                    else pathPoints += `L${point.xP * width} ${point.yP * height} `
                    return
                }
                else if("cx" in point){
                    pathPoints += `Q${point.cx * width} ${point.cy * height} ${point.x2 * width} ${point.y2 * height} `
                    return 
                }
            })
            tempPaths.push(<path d={pathPoints} className={path.classes??""} />)
        })
        return tempPaths
    }, [paths, width, height])

    return (
        <svg viewBox={`0 0 ${width} ${height}`} className={clsx("absolute w-full h-full", classes)} ref={svgRef}>
            {!!children && children}
            {pathsMemo}

        </svg>
    )
}
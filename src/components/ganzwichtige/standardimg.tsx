import clsx from "clsx"

interface StandardImg {
    src: string 
    width?: string 
    height?: string 
    className?: string 
    standardStyle?: boolean
}

export default function StandardImg({src, width, height, className, standardStyle=true, ...rest}:StandardImg){

    return <img 
        src={src} 
        {... rest}
        className={clsx(standardStyle && "border-2 border-gray-800 brutal-shadow text-gray-800")} 
        /> 
}
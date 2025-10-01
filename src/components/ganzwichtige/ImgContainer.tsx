import clsx from "clsx";
import { ReactNode, useEffect, useRef, useState } from "react";

interface ImgContainer{
    children: ReactNode
    height?: string 
    width?: string 
    imgHeight: string 
    imgWidth: string 
}
type Styles = {
    height?: string 
    width?: string 
    aspectRatio?: string
}
export default function ImgContainer({height, width, imgHeight, imgWidth, children}:ImgContainer){
    const [loading, setLoading] = useState(true)
    const ref = useRef<HTMLDivElement>(null)
    const [imgs, setImgs] = useState<number>(0)
    const [loaded, setLoaded] = useState<number>(0)

    const styles:Styles = {}
    if(height){ 
        styles.height = height 
        styles.width = `calc(${height}/${imgHeight}*${imgWidth})`
    }if(width){ 
        styles.height = `calc(${width}/${imgWidth}*${imgHeight})`
        styles.width = width 
    }
    styles.aspectRatio = `${imgWidth.split("px")[0]}/${imgHeight.split("px")[0]}`

    useEffect(() => {
        if(!ref.current) return 

        const images = ref.current.querySelectorAll('img')
        setImgs(images.length)
        
        images.forEach(img => {
            img.addEventListener('load', () => {
                let currImgs = loaded
                setLoaded(prev => prev+1)
                if(currImgs+1 >= imgs) setLoading(false)
            })
        })
    }, [ref.current])

    return (
        <div style={styles} className={clsx("w-fit border-black", loading && "border-1")} ref={ref}>
            {children}
        </div>
    )
}
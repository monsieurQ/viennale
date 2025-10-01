interface Image {
    src: string 
    className?: string 
    imgWidth?: number
    imgHeight?: number
}

export default function Image({src, className, imgWidth, imgHeight}:Image){
    const aspect = (imgWidth && imgHeight) ? imgWidth+"/"+imgHeight : ""

    return <img src={src} className={className} style={{aspectRatio: aspect}} />
}
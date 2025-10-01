interface HilfreicherTipp{
    imgSrc: string 
    headline: string 
    text: string 
}

export function HilfreicherTipp({imgSrc, headline, text}:HilfreicherTipp){

    return (
        <div className="flex flex-row gap-8 w-full">
            <img src={imgSrc} className="shrink-0" />
            <div className="flex flex-col gap-4 shrink-0 text-amber-800 font-bold justify-center">
                <h1 className="text-4xl">{headline}</h1>
                <p className="text-xl">{text}</p>
            </div>
        </div>
    )
}
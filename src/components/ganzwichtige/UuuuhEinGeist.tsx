import { useRef } from "react"

interface UuuuhEinGeist{
    // children: ReactNode
    interval?: boolean
}

export function hideMyComponentForADay() {
  const oneDay = 24 * 60 * 60 * 1000; // ms in a day
  const until = Date.now() + oneDay;
  localStorage.setItem(ls_key, until.toString());
}

const ls_key = "weasdsasd"

export function UuuuhEinGeist({interval=true}:UuuuhEinGeist){
    const contRef = useRef<HTMLDivElement>(null)

    function flee(e:React.MouseEvent){
        contRef.current!.classList.add('flee')
        console.log(contRef.current)
        hideMyComponentForADay()
    }   

    const lastHide = window.localStorage.getItem(ls_key)
    const now = Date.now();

    if (!lastHide || now > Number(lastHide)) { 
    }
    // else return <></>

    return (
        <div className="fixed right-0 top-0 w-fit z-[1000]" onMouseOver={(e) => flee(e)} ref={contRef}>
            <div className="bob">
                <img src={`${import.meta.env.BASE_URL}/wichtig/picasso/UuuuhEinGeist.png`} 
                    className="w-[200px]  UuuuhEinGeist" 
                    // className="UuuuhEinGeist " 
                />
            </div>
        </div>
    )
}
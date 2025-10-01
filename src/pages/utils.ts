
export function anchor(){
    const hash = window.location.hash; 
    if(hash){
        const e = document.querySelector(hash)
        if(e){
            console.log("scrolling to",  e.getBoundingClientRect().top)
            // window.scrollTo(0, e.getBoundingClientRect().top + window.scrollY)
            e.scrollIntoView({behavior:"smooth"})
        }
    }
}
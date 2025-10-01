import { useEffect, useState } from "react";

enum ScrollDirection { up, down, none }

export function useObserver(){
    const [activeId, setActiveId] = useState("")
    const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(ScrollDirection.none)

    useEffect(() => {
        window.addEventListener('wheel', (e) => {
            if(e.deltaY<1){
                setScrollDirection(ScrollDirection.up)
            }else if(e.deltaY > 1){
                setScrollDirection(ScrollDirection.down)
            }
        })
    
        const options = {
            root: null,
            rootMargin: "40px 0px 40px 0px",
            scrollMargin: "0px",
            threshold: 1.0,
        };  

        const upOptions = {
            root: null,
            rootMargin: "40px 0px -90% 0px", // top offset 40px
            threshold: 1
        };

        const downOptions = {
            root: null,
            rootMargin: "50% 0px -55% 0px", // center of viewport
            threshold: 1
        };


        const upObserver = new IntersectionObserver((entries) => {
            if (scrollDirection !== ScrollDirection.up) return; // ignore if not scrolling up
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log("UP: ", entry.target.id);
                }
            });
        }, upOptions);

        const downObserver = new IntersectionObserver((entries) => {
            if (scrollDirection !== ScrollDirection.down) return; // ignore if not scrolling down
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                console.log("DOWN: ", entry.target.id);
                }
            });
        }, downOptions);

        // Watch all sidebar items
        document.querySelectorAll(".sidebar-item").forEach(el => {
            upObserver.observe(el);
            downObserver.observe(el);
        });
        
        // const targets = document.querySelectorAll('.sidebar-item').forEach(e => observer.observe(e))

    })

    return activeId
}
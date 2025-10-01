import { Link } from "react-router";
import { Sidebar } from "../components/Sidebar";
import { driveLink, imgClasses } from "../main";
import { Taste } from "../components/taste";
import { setTitle } from "../components/docTitle";
import Image from "../components/ganzwichtige/Image";

interface Filmnavigator {

}

export default function Filmnavigator({}:Filmnavigator){
    setTitle("Anleitung – Filmnavigator")

    return (
        <div className="min-h-screen bg-[#fee8d1] py-12">
            <div className="grid grid-cols-[auto_350px] w-full max-w-[1600px]">
                <div className="px-12">

                    <h1 className="text-4xl font-bold text-gray-800 mb-12" id="edit">Filmnavigator</h1>
                    <ul className="list-disc list-outside pl-8">
                        <li className="mt-2">werden <b>automatisch übersetzt</b> – muss man nur in einer Sprache eintragen!</li>
                    </ul>

                    {/* Excel-Erklärung */}
                    <section id="dokument">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 mt-24">Liste</h2>
                        <div className="flex flex-row gap-4 items-center">
                            <Image imgWidth={728} imgHeight={100} src={`${import.meta.env.BASE_URL}/img/filmnavigator/drive-link.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800 max-w-[300px]"  />
                            <p>Sobald die Liste fertig ist, findet die sich im <a href={driveLink} target="_blank">Drive-Ordner</a>.</p>
                        </div>

                        <div className="relative flex flex-row gap-4 mt-8 items-start">
                            <Image imgWidth={2256} imgHeight={1002} src={`${import.meta.env.BASE_URL}/img/filmnavigator/drive.png`} className={imgClasses+" w-1/2 object-contain"} />

                            <div className="flex flex-col gap-4 h-full">
                                <p>Die Filme sind <b>alphabetisch sortiert</b></p>
                                <p>Am einfachsten ist es, einfach mit {<Taste small str="strg"/>} + {<Taste small str="F"/>} bzw. {<Taste small str="⌘"/>} + {<Taste small str="F"/>} nach dem Film zu suchen.</p>
                                
                            </div>
                        </div>

                        <div className="relative flex flex-col gap-2 mt-8 items-start">
                            <p>Am einfachsten ist es, so zu scrollen, dass der Film direkt unter den Spaltennamen liegt:</p>
                            <Image imgWidth={2290} imgHeight={145} src={`${import.meta.env.BASE_URL}/img/filmnavigator/dahomey-drive.png`} className={imgClasses+" max-w-full w-fit h-fit object-contain"} />
                        </div>
                    </section>

                    {/* Eintragen */}
                    <section id="eintragen">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 mt-24" >Beim Film eintragen</h2>      

                        <p>Weil die Excel-Tabelle auf englisch ist, ist es <b>einfacher, wenn man die englische Filmseite bearbeitet!</b></p>      

                        <div className="bg-gray-800 text-neutral-200 p-4">
                            <div className="mb-8 flex flex-row gap-2 items-end mt-4"><p>Über</p> <img src={`${import.meta.env.BASE_URL}/img/film/edit-btn.png`} className="inline max-w-[100px]" /> <p> zur Bearbeitungsseite.</p></div>

                            <div className="flex flex-row gap-4 mt-8">
                                <Image imgWidth={1572} imgHeight={1540} src={`${import.meta.env.BASE_URL}/img/filmnavigator/leer.png`} className={imgClasses + " max-w-1/2 shrink-0 grow-0 object-contain h-fit w-fit"} />
                                <div className="flex flex-col gap-4">
                                    <p>Das Feld <Image imgWidth={426} imgHeight={100} src={`${import.meta.env.BASE_URL}/img/filmnavigator/chevron.png`} className={imgClasses + " inline mx-1 max-h-[40px] align-bottom"} /> finden. Eventuell muss es zuerst aufgeklappt werden (draufklicken). </p>
                                    
                                    <p className="mt-4">Bei den Feldern <Image imgWidth={460} imgHeight={73} src={`${import.meta.env.BASE_URL}/img/filmnavigator/region.png`} className={imgClasses + " inline mx-1 max-h-[40px] align-bottom mb-1"} /> und <img src={`${import.meta.env.BASE_URL}/img/filmnavigator/critics.png`} className={imgClasses + " inline mx-1 max-h-[40px] align-bottom mb-1"} /> die entsprechende Checkbox aktivieren. </p>
                                </div>
                            </div>
                        </div>     

                        <div className="flex flex-col gap-2 mt-12">
                            <div className="flex flex-col gap-4">
                                <p className="">Bei den anderen Feldern den angegebenen Namen eingeben und <b>auf den Vorschlag drücken.</b></p>
                                <p className="">Bei mehreren Einträgen mit <b>Beistrichen</b> voneinander trennen.</p>

                            </div>
                                <div className="pl-8 flex flex-row gap-2">
                                <Image imgWidth={506} imgHeight={256} src={`${import.meta.env.BASE_URL}/img/filmnavigator/vorschlag.png`} className={imgClasses + " w-1/3 h-fit"} />
                                <Image imgWidth={518} imgHeight={194} src={`${import.meta.env.BASE_URL}/img/filmnavigator/vorschlag2.png`} className={imgClasses + " w-1/3 h-fit"} />
                                <Image imgWidth={572} imgHeight={254} src={`${import.meta.env.BASE_URL}/img/filmnavigator/vorschlag3.png`} className={imgClasses + " w-1/3 h-fit"} />
                            </div>

                        </div>
                    </section>

                </div>
            
                {/* <Sidebar
                    top={{name:"Filmnavigator", id:""}} 
                    headings={[
                        {name: "Liste", id:"dokument"},
                        {name: "Beim Film eintragen", id:"eintragen"},
                    ]} /> */}
            </div>
        </div>
    )
}
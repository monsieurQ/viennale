import { setTitle } from "../components/docTitle";
import Image from "../components/ganzwichtige/Image";
import { Nummerierung } from "../components/Nummerierung";
import { Sidebar } from "../components/Sidebar";
import { Taste } from "../components/taste";
import { driveLink, fehlerlisteLink, imgClasses } from "../main";

interface Trailer {

}

export default function Trailer({}:Trailer){

    setTitle("Anleitung – Trailer")

    return (
        <div className="min-h-screen bg-[#fee8d1] py-12">
            <div className="grid grid-cols-[auto_350px] w-full max-w-[1600px]">
                <div className="px-12">

                    <h1 className="text-4xl font-bold text-gray-800 mb-12" id="edit">Trailer</h1>
                    <ul className="list-disc list-outside pl-8">
                        <li className="mt-2">muss man nur in einer Sprache eintragen!</li>
                        <li className="mt-2">trudeln erst im Laufe der Woche ein</li>
                    </ul>

                    {/* Excel-Erklärung */}
                    <section id="dokument">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 mt-24">Liste</h2>
                        <div className="flex flex-row gap-4 items-center">
                            <Image imgWidth={612} imgHeight={102} src={`${import.meta.env.BASE_URL}/img/trailer/drive-link.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800 max-w-[300px]"  />
                            <p>Sobald die Liste fertig ist, findet die sich im <a href={driveLink} target="_blank">Drive-Ordner</a>.</p>
                        </div>

                        <div className="relative flex flex-row gap-4 mt-8 items-start">
                            <Image imgWidth={1542} imgHeight={628} src={`${import.meta.env.BASE_URL}/img/trailer/drive.png`} className={imgClasses+" w-1/2 object-contain"} />

                            <div className="flex flex-col gap-4 h-full">
                                <p>Nicht alle Filme haben einen Trailer!</p>
                                <p>Am einfachsten ist es, einfach mit {<Taste small str="strg"/>} + {<Taste small str="F"/>} bzw. {<Taste small str="⌘"/>} + {<Taste small str="F"/>} nach dem Film zu suchen.</p>
                                
                            </div>
                        </div>
                    </section>


                    {/* Film eintragen-Erklärung */}
                    <section id="eintragen">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 mt-24">Beim Film eintragen</h2>                 
                        <div className="mb-8 flex flex-row gap-2 items-end"><p>Über</p> <img src={`${import.meta.env.BASE_URL}/img/film/edit-btn.png`} className="inline max-w-[100px]" /> <p> zur Bearbeitungsseite.</p></div>
                        
                        <div className="flex flex-row gap-8 p-8 bg-gray-800 text-white  ">
                            <Image imgWidth={846} imgHeight={1992} src={`${import.meta.env.BASE_URL}/img/trailer/sidebar.png`} className={imgClasses+ " max-h-[50vh] h-fit w-fit"} />
                            <div className="flex flex-col gap-4">
                                <p>Auf der rechten Seite der Bearbeitungsseite findet sich diese Seitenleiste.</p>
                                
                                <div className="flex flex-row items-center gap-4 p-4 bg-[#29384c]">
                                    <Nummerierung num={1} dark/> 
                                    <p><Image imgWidth={269} imgHeight={131} src={`${import.meta.env.BASE_URL}/img/trailer/media.png`} className="inline max-w-[100px]" /> aufklappen</p>
                                </div>
                                <div className="flex flex-row items-center gap-4 p-4 bg-[#29384c]">
                                    <Nummerierung num={2} dark/> 
                                    <div className="flex flex-col gap-2">
                                        <p>Unter <b>Video</b> auf <i>Add Media</i> bzw. <i>Medien hinzufügen</i>. </p>
                                        <Image imgWidth={678} imgHeight={506} src={`${import.meta.env.BASE_URL}/img/trailer/video.png`} className="max-w-[300px]" />
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-4 p-4 bg-[#29384c]">
                                    <Nummerierung num={3} dark/> 
                                    <div className="flex flex-col gap-2">
                                        <p>Im Popup bei <i>Add Video via URL</i> bzw. <i>Video über URL hinzufügen</i> den angegeben Link reinkopieren</p>
                                        <Image imgWidth={1456} imgHeight={544} src={`${import.meta.env.BASE_URL}/img/trailer/add.png`} className="max-w-[300px]" />
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-4 p-4 bg-[#29384c]">
                                    <Nummerierung num={4} dark/> 
                                    <div className="flex flex-col gap-2">
                                        <p><img src={`${import.meta.env.BASE_URL}/img/trailer/insert.png`} className="inline h-[50px]" /> bzw. <img src={`${import.meta.env.BASE_URL}/img/trailer/insert-de.png`} className="inline h-[50px]" /> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="p-8 bg-[#feb109] w-fit mt-12">
                        <p className="">Manche Trailer funktionieren nicht (oft wegen Copyright oder so etwas) - <b>in dem Fall bitte unbedingt in die <a href={fehlerlisteLink} target="_blank">Fehlerliste</a> eintragen!</b></p>
                    </div>
                
                </div>

                {/* <Sidebar
                    top={{name:"Trailer", id:""}} 
                    headings={[
                        {name: "Filmbeschreibung einfügen", id:"beschreibung", children: [
                            {name: "Abstände komisch?", id:"abstand-komisch"},
                            {name: "Abstands-Regelurierungen", id:"abstand-regeln"},
                        ]},
                        {name: "Filmografie einfügen", id:"filmografie"},
                        {name: "Hard Facts", id:"hard-facts", children: [
                            {name: "Credits", id:"credits"},
                            {name: "Produktion, Rechte, Vertrieb, ...", id:"unternehmen"},
                        ]},
                    ]} /> */}
            </div>

        </div>
    )
}
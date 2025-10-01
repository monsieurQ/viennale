import { Link } from "react-router";
import { Sidebar } from "../components/Sidebar";
import { driveLink, imgClasses, links } from "../main";
import AbsoluteSVG from "../components/AbsoluteSVG";
import InfoBox from "../components/InfoBox";
import { Taste } from "../components/taste";
import { Nummerierung } from "../components/Nummerierung";
import { setTitle } from "../components/docTitle";
import Image from "../components/ganzwichtige/Image";

interface Keywords {

}

export default function Keywords({}:Keywords){
    setTitle("Anleitung – Keywords")

    return (
        <div className="min-h-screen bg-[#fee8d1] py-12">
            <div className="grid grid-cols-[auto_350px] w-full max-w-[1600px]">
                <div className="px-12">

                    <h1 className="text-4xl font-bold text-gray-800 mb-12" id="edit">Keywords</h1>
                    <ul className="list-disc list-outside pl-8">
                        <li className="mt-2">werden <b>automatisch übersetzt</b> – muss man nur in einer Sprache eintragen!</li>
                        <li className="mt-2">Eingabe ähnlich wie bei den <Link to={{pathname:"/film", hash: "#credits"}}>Credits</Link> aber die einzelnen Einträge werden mit <b>Beistrich</b> getrennt</li>
                    </ul>

                    {/* Excel-Erklärung */}
                    <section id="dokument">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 mt-24">Liste</h2>
                        <a href="https://docs.google.com/spreadsheets/d/1hw-fbs4ofKNaWkbsS-E5LFGMrGaTepKR/edit?usp=drive_link&ouid=110405876895249769617&rtpof=true&sd=true" target="_blank" className="flex flex-row gap-4 items-center">
                            <Image imgWidth={796} imgHeight={104} src={`${import.meta.env.BASE_URL}/img/keywords/drive.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800 max-w-[300px] h-fit"  />
                            <p>Die Liste ist im Filmnavigator-Dokument im <a href={driveLink} target="_blank">Drive-Ordner</a>.</p>
                        </a>

                        <div className="relative flex flex-row gap-4 mt-8">
                            <Image imgWidth={1328} imgHeight={1056} src={`${import.meta.env.BASE_URL}/img/keywords/excel.png`} className={imgClasses+" w-1/2"} />

                            <div className="flex flex-col gap-4">
                                <p>Die erste Seite zeigt nur die Keywords, die es prinzipiell überhaupt gibt.</p>
                                <p>Um zu den Keywords für die einzelnen Filme zu kommen, muss man <b>ganz unten</b> auf den anderen Tab gehen.</p>
                            </div>
                            <InfoBox w="10%" h="7%" left="17%" bottom="0%" />
                            <AbsoluteSVG paths={[
                                {points: [ {xP:0.25, yP:0.95}, {x2: 0.7, y2:0.4, cx:0.6, cy:0.8} ]},
                                ]} />
                        </div>

                        <div className="relative flex flex-col gap-4 mt-8 items-start">
                            <Image imgWidth={3482} imgHeight={476} src={`${import.meta.env.BASE_URL}/img/keywords/tabelle-neu.png`} className={imgClasses+" w-full object-contain"} />
                            

                            <div className="flex flex-col gap-4 h-full">
                                <p>Die Keywords sind in der <b>letzten Spalte</b>.</p>
                                <p>Am einfachsten ist es, einfach mit {<Taste small str="strg"/>} + {<Taste small str="f"/>} bzw. {<Taste small str="⌘"/>} + {<Taste small str="f"/>} nach dem Film zu suchen.</p>
                                
                                
                            </div>

                            <AbsoluteSVG paths={[
                                {points: [ {xP:0.35, yP:0.75}, {x2: 0.9, y2:0.55, cx:0.7, cy:0.85} ]},
                                ]} />
                        </div>

                        <div className="bg-[#feb109] mt-16 relative p-4 w-fit">
                            <b>Falls ein Film nicht vorkommt</b>: gebt uns Bescheid!
                        </div>

                        {/* <div className="relative flex flex-row gap-4 mt-8 items-start">
                            <Image imgWidth={1536} imgHeight={132} src={`${import.meta.env.BASE_URL}/img/keywords/platzierung.png`} className={imgClasses+" w-1/2"} />

                            
                            <div className="flex flex-col gap-4 h-full">
                                <p>Ein Film hat jene Keywords, in deren Spalten eine <b>1</b> eingetragen ist </p>
                                <p>Am einfachsten ist es, so zu scrollen, dass der Film direkt unter den Spaltennamen liegt, sonst wird die Tabelle sehr unübersichtlich (so wie beim Bild links)</p>
                            </div>
                        </div> */}
                    </section>

                    {/* Film eintragen-Erklärung */}
                    <section id="eintragen">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 mt-24">Beim Film eintragen</h2>                 
                        <div className="mb-8 flex flex-row gap-2 items-end"><p>Über</p> <img src={`${import.meta.env.BASE_URL}/img/film/edit-btn.png`} className="inline max-w-[100px]" /> <p> zur Bearbeitungsseite.</p></div>

                        <div className="flex flex-col gap-4 mt-8">
                            <div className="flex flex-row gap-4 items-center p-4 bg-[#ffd6ad]">
                                <Nummerierung num={1} />
                                <div className="flex flex-col gap-4 border-black border-l-2 pl-1">
                                    <p>Beim Feld <b>Keywords</b> eingeben und <b>auf den Vorschlag drücken</b></p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Image imgWidth={1232} imgHeight={208} src={`${import.meta.env.BASE_URL}/img/keywords/de-leer.png`}        className={imgClasses + " max-w-[500px]"} />
                                    <Image imgWidth={1156} imgHeight={268} src={`${import.meta.env.BASE_URL}/img/keywords/de-vorschlag.png`}   className={imgClasses + " max-w-[500px]"} />
                                    <Image imgWidth={1212} imgHeight={220} src={`${import.meta.env.BASE_URL}/img/keywords/de-eins.png`}        className={imgClasses + " max-w-[500px]"} />
                                </div>
                            </div>

                            <div className="flex flex-row gap-4 items-center p-4 bg-[#ffd6ad]">
                                <Nummerierung num={2} />
                                <div className="flex flex-col gap-4 border-black border-l-2 pl-1">
                                    <p>Ein <b>Beistrich nach dem Keyword</b> und den nächsten eingeben. Wieder auf den Vorschlag drücken.</p>
                                </div>
                                <Image imgWidth={1162} imgHeight={266} src={`${import.meta.env.BASE_URL}/img/keywords/de-zwei-vorschlag.png`} className={imgClasses + " max-w-[500px]"} />
                            </div>

                            <div className="flex flex-row gap-4 items-center p-4 bg-[#ffd6ad]">
                                <Nummerierung num={3} />
                                <div className="flex flex-col gap-4 border-black border-l-2 pl-1">
                                    <p>Bis alle drinnen sind.</p>
                                </div>
                                <Image imgWidth={1204} imgHeight={208} src={`${import.meta.env.BASE_URL}/img/keywords/de-alles.png`} className={imgClasses + " max-w-[500px]"} />
                            </div>
                        </div>

                        <div className="bg-[#feb109] mb-16 relative p-4 self-end mt-8">Keywords werden <b>automatisch übersetzt</b> - man muss sie nur einmal eintragen, nicht seperat für Deutsch&Englisch!</div>
                    </section>
                </div>

                {/* <Sidebar
                    top={{name:"Keywords", id:""}} 
                    headings={[
                        {name: "Liste", id:"dokument"},
                        {name: "Beim Film eintragen", id:"eintragen"},
                    ]} /> */}
            </div>

        </div>
    )
}
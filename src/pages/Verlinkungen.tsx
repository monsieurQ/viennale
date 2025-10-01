import clsx from "clsx";
import AbsoluteSVG from "../components/AbsoluteSVG";
import Badge from "../components/badge";
import InfoBox, { HeaderPosition } from "../components/InfoBox";
import { Sidebar } from "../components/Sidebar";
import { imgClasses } from "../main";
import { Taste } from "../components/taste";
import { Nummerierung } from "../components/Nummerierung";
import ImgContainer from "../components/ganzwichtige/ImgContainer";
import { setTitle } from "../components/docTitle";
import { anchor } from "./utils";
import { useEffect } from "react";
import Image from "../components/ganzwichtige/Image";
import { Link } from "react-router";

interface Verlinkungen{

}

export default function({}:Verlinkungen){
    // useEffect(() => {
    //     anchor()
    // }, [])
    setTitle("Anleitung – Verlinkungen")

    return (
         <div className="min-h-screen bg-[#fee8d1] xl:py-12 py-8 max-w-screen">
            <div className="grid xl:grid-cols-[auto_350px] grid-cols-1 xl:gap-12 w-full max-w-[1600px]">
                <div className="px-12 row-start-2 xl:row-start-1">
                    <h1 className="text-4xl font-bold text-gray-800 mb-12" id="edit">Verlinkungen</h1>      

                    <div className="p-8 bg-[#feb109] w-fit flex flex-col gap-2">
                        <p>Für die <b>alten Hasen</b>:</p>
                        <ul className="list-disc list-outside pl-8">
                            <li>auf den deutschsprachigen Seite machen wir <b>keine englischen Links mehr.</b></li>
                            <li>d.h. es gibt auch keine <b>/en/</b>node/...-Blödereien mehr</li>
                        </ul>
                            
                    </div>             

                    <section className="">
                        <h2 className="sidebar-item text-3xl font-bold text-gray-800 mb-8 mt-24" id="gaeste">Gäste</h2>
                        
                        <div className="flex flex-row gap-8">
                            <div className="relative w-fit">
                                <ImgContainer height="50vh" imgHeight="1264px" imgWidth="550px">
                                    <img src={`${import.meta.env.BASE_URL}/img/links/pg.png`} className={clsx(imgClasses, "h-[50vh] w-fit")} />
                                </ImgContainer>
                                <InfoBox w="90%" h="13%" bottom="0.5%" left="5%" extraClasses="" headerPosition={HeaderPosition.top}>Gäste</InfoBox>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p>Im <Badge>Pocketguide</Badge> sind bei einigen Filmen Gäste eingetragen.</p>
                                <div>
                                    <p>Die müssen <b>gegenseitig verlinkt</b> werden </p>
                                    <ul className="list-disc list-outside pl-8">
                                        <li>d.h. auf der Gastseite wird der Film verlinkt und auf der Filmseite der Gast.</li>
                                    </ul>
                                </div>
                                <div className="flex flex-row gap-4 items-center mt-4">
                                    <img src={`${import.meta.env.BASE_URL}/img/links/mit-datum.png`} className={clsx(imgClasses, "w-[300px]")} />
                                    <p>Manchmal ist auch ein <b>Datum</b> oder die <b>Rolle</b> angegeben.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h3 className="sidebar-item text-2xl font-bold text-gray-800 mb-8 mt-16" id="gaeste-film">Gastseite</h3>
                        
                        <div className="flex flex-row gap-4 w-fit items-end">
                            <a href="https://www.viennale.at/de/gaeste-2025" target="_blank"><img src={`${import.meta.env.BASE_URL}/img/links/gaeste-2025.png`} className={clsx(imgClasses, "w-[240px]")} /></a>
                            
                            <p>Die Gastseite findet sich am leichtesten auf der <a href="https://www.viennale.at/de/gaeste-2025" target="_blank">Übersichtsseite</a>, indem man dort nach dem Namen sucht ({<Taste small str="strg + F"/>} bzw. {<Taste small str="⌘ + F"/>}).</p>
                        </div>


                        <div className="flex flex-row gap-4 items-start mt-24">
                            <div className="flex flex-col gap-4"> 
                                <p>Auf der Gastseite werden allerlei Sachen eingetragen - <b>wir kümmern uns nur um die Filmverlinkungen!</b></p>
                                <p>Wie bei den Filmen haben auch die Gäste <b>eine deutsche und englische Seite</b>.</p>    
                            </div>
                            {/* <img src={`${import.meta.env.BASE_URL}/img/links/ute.png`} className={clsx(imgClasses, "w-[340px]")}/> */}
                            <Image imgWidth={1944} imgHeight={1316} src={`${import.meta.env.BASE_URL}/img/links/ute.png`} className={clsx(imgClasses, "w-[340px]")}/>
                        </div>
                    </section>

                    <section >
                        <h3 className="sidebar-item text-2xl font-bold text-gray-800 mb-8 mt-16" id="gast-verlinkung">Gast → Film</h3>
                        <div className="flex flex-col gap-4 mt-8 w-fit">
                            <div className="flex flex-row gap-4 items-center p-4 bg-[#ffd6ad]">
                                <Nummerierung num={1} />
                                <p className="border-black border-l-2 pl-4">Mit <img src={`${import.meta.env.BASE_URL}/img/film/edit-btn.png`} className="inline w-[80px] align-sub" /> auf die Bearbeitungsseite.</p> 
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-4 mt-8 w-fit">
                            <div className="flex flex-row gap-4 items-center p-4 bg-[#ffd6ad]">
                                <Nummerierung num={2} />
                                <div className="flex flex-col gap-2 border-black border-l-2 pl-4">
                                    <p className="">Bei <img src={`${import.meta.env.BASE_URL}/img/links/edit-sections.png`} className="inline h-[30px] align-sub" /> &gt; <img src={`${import.meta.env.BASE_URL}/img/links/edit-text.png`} className="inline h-[30px] align-sub" /> auf <img src={`${import.meta.env.BASE_URL}/img/links/edit-btn.png`} className="inline h-[30px] align-sub" />.</p> 
                                    {/* <img src={`${import.meta.env.BASE_URL}/img/links/edit-leer.png`} /> */}
                                    <Image imgWidth={1980} imgHeight={422} src={`${import.meta.env.BASE_URL}/img/links/edit-leer.png`} />
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-4 mt-8 w-fit">
                            <div className="flex flex-row gap-4 items-center p-4 bg-[#ffd6ad]">
                                <Nummerierung num={3} />
                                <div className="flex flex-col gap-2 border-black border-l-2 pl-4">
                                    <p className="">Filmnamen markieren und auf <img src={`${import.meta.env.BASE_URL}/img/links/link-btn.png`} className="inline h-[30px] align-sub" /> drücken.</p> 
                                    {/* <img src={`${import.meta.env.BASE_URL}/img/links/gast-link.png`} className="max-w-[500px]" /> */}
                                    <Image imgWidth={768} imgHeight={330} src={`${import.meta.env.BASE_URL}/img/links/gast-link.png`} className="max-w-[500px]" />
                                    
                                    <p className="mt-4">Falls der Filmname nicht hier steht: </p>
                                    <ul className="list-disc list-outside pl-8">
                                        <li><b>Unter</b> den schon dastehenden Filmen <b>in Großbuchstaben</b> eintragen</li>
                                        <li>Zwischen den einzelnen Filmen ein <b>einfacher Zeilenabstand</b> (kein Absatz): den fügt man mit <Taste small str="shift" /> + <Taste small str="enter" /> ein</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-4 mt-8 w-fit">
                            <div className="flex flex-row gap-4 items-center p-4 bg-[#ffd6ad]">
                                <Nummerierung num={4} />
                                <div className="flex flex-col gap-2 border-black border-l-2 pl-4">
                                    <p className="">In der Link-Box bei <b>Linkadresse</b> kann man nach dem Filmnamen suchen.</p>
                                    <p>Wenn man Glück hat, wird der Film vorgeschlagen, dann auf den Vorschlag drücken und <img src={`${import.meta.env.BASE_URL}/img/links/linkbox-einfuegen.png`} className="inline h-[30px] align-sub" />.</p> 
                                    {/* <img src={`${import.meta.env.BASE_URL}/img/links/linkbox-ja.png`} className={clsx(imgClasses, "max-w-[340px] ml-4")} /> */}
                                    <Image imgWidth={736} imgHeight={468} src={`${import.meta.env.BASE_URL}/img/links/linkbox-ja.png`} className={clsx(imgClasses, "max-w-[340px] ml-4")} />
                                    
                                    <p className="mt-8">Wenn man Pech hat, wird der Film nicht vorgeschlagen.</p> 
                                    {/* <img src={`${import.meta.env.BASE_URL}/img/links/linkbox-nein.png`} className={clsx(imgClasses, "max-w-[340px] ml-4")} /> */}
                                    <Image imgWidth={884} imgHeight={420} src={`${import.meta.env.BASE_URL}/img/links/linkbox-nein.png`} className={clsx(imgClasses, "max-w-[340px] ml-4")} />
                                    
                                    <p className="">In dem Fall muss man die <Link to={{hash:"#node"}}>Node-ID des Films raussuchen</Link> und hier einfügen, als <b>/node/xxx</b></p> 
                                    {/* <img src={`${import.meta.env.BASE_URL}/img/links/linkbox-node.png`} className={clsx(imgClasses, "max-w-[340px] ml-4")} /> */}
                                    <Image imgWidth={710} imgHeight={426} src={`${import.meta.env.BASE_URL}/img/links/linkbox-node.png`} className={clsx(imgClasses, "max-w-[340px] ml-4")} />
                                    
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-4 mt-8 w-fit">
                            <div className="flex flex-row gap-4 items-center p-4 bg-[#ffd6ad]">
                                <Nummerierung num={5} />
                                <div className="flex flex-col gap-2 border-black border-l-2 pl-4">
                                    <p className="">Bitte unbedingt überprüfen, ob der Link richtig funktioniert</p>
                                    <div className="relative flex flex-row gap-8">
                                        {/* <img src={`${import.meta.env.BASE_URL}/img/links/ute.png`} className={clsx(imgClasses, "h-[200px] w-fit")}/> 
                                        <img src={`${import.meta.env.BASE_URL}/img/links/brasil.png`} className={clsx(imgClasses, "h-[200px] w-fit")}/> */}
                                        <Image imgWidth={1944} imgHeight={1316} src={`${import.meta.env.BASE_URL}/img/links/ute.png`} className={clsx(imgClasses, "h-[200px] w-fit")}/> 
                                        <Image imgWidth={1712} imgHeight={782} src={`${import.meta.env.BASE_URL}/img/links/brasil.png`} className={clsx(imgClasses, "h-[200px] w-fit")}/>
                                        <AbsoluteSVG paths={[
                                            {points: [ {xP:0.25, yP:0.3}, {x2: 0.5, y2:0.3, cx:0.4, cy:0.2} ]},
                                            ]} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-4 mt-8 w-fit">
                            <div className="flex flex-row gap-4 items-center p-4 bg-[#ffd6ad]">
                                <Nummerierung num={6} />
                                <div className="flex flex-col gap-2 border-black border-l-2 pl-4">
                                    <p className="">Dasselbe für die <b>englische Gastseite</b> - am besten einfach den fertig deutschen Link kopieren und im Englischen einfügen.</p>
                                    <div className="relative flex flex-row gap-8">
                                        {/* <img src={`${import.meta.env.BASE_URL}/img/links/link-copy.png`} className={clsx(imgClasses, "h-[200px] w-fit")} />
                                        <img src={`${import.meta.env.BASE_URL}/img/links/link-paste.png`} className={clsx(imgClasses, "h-[200px] w-fit")} /> */}
                                        <Image imgWidth={392} imgHeight={292} src={`${import.meta.env.BASE_URL}/img/links/link-copy.png`} className={clsx(imgClasses, "h-[200px] w-fit")} />
                                        <Image imgWidth={338} imgHeight={296} src={`${import.meta.env.BASE_URL}/img/links/link-paste.png`} className={clsx(imgClasses, "h-[200px] w-fit")} />
                                        <AbsoluteSVG paths={[
                                            {points: [ {xP:0.2, yP:0.8}, {x2: 0.4, y2:0.8, cx:0.3, cy:0.9} ]},
                                            ]} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h3 className="sidebar-item text-2xl font-bold text-gray-800 mb-8 mt-16" id="film-gaeste">Film → Gast</h3>
                        <div className="flex flex-col gap-4 mt-8 w-fit">
                            <div className="flex flex-row gap-4 items-center p-4 bg-[#ffd6ad]">
                                <Nummerierung num={1} />
                                <p className="border-black border-l-2 pl-4">Mit <img src={`${import.meta.env.BASE_URL}/img/film/edit-btn.png`} className="inline w-[80px] align-sub" /> auf die Bearbeitungsseite des Films.</p> 
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-4 mt-8 w-full">
                            <div className="flex flex-col gap-4 p-4 bg-[#ffd6ad] w-full">
                                <div className="flex flex-row gap-4 items-center  w-full relative">
                                    <Nummerierung num={2} />
                                    <div className="flex flex-col gap-2 border-black border-l-2 pl-4">
                                            <p className="">In die <b>Filmbeschreibung</b> einfügen.</p>
                                            <ul className="list-disc list-outside pl-8">
                                                <li>Deutsche Filmseite: <b>zwischen</b> deutscher und englischer Filmbeschreibung</li>
                                                <li>Englische Filmseite: <b>nach</b> englischer Filmbeschreibung</li>
                                            </ul>
                                    </div>
                                    <Image imgWidth={1088} imgHeight={736} src={`${import.meta.env.BASE_URL}/img/links/filmgast/e1.png`} className={clsx(imgClasses, "max-w-[30%] h-fit")} />
                                    <InfoBox w="25%" h="9%" top="65%" right="10%" extraClasses="" />
                                </div>

                                <h3 className="font-bold">Varianten</h3>
                                <div className="grid grid-cols-[200px_auto] gap-4">
                                    <Image imgWidth={1088} imgHeight={736} src={`${import.meta.env.BASE_URL}/img/links/filmgast/pg.png`} className={clsx(imgClasses, "")} />
                                    <p>deutsch: In Anwesenheit von Gast.
                                        <br />
                                        englisch: In the presence of Gast. 
                                    </p>

                                    <Image imgWidth={502} imgHeight={342} src={`${import.meta.env.BASE_URL}/img/links/filmgast/pg-rolle.png`} className={clsx(imgClasses, "")} />
                                    <p>deutsch: In Anwesenheit von Gast (Rolle).
                                        <br/>
                                        englisch: In the presence of Gast (role).
                                    </p>

                                    <Image imgWidth={478} imgHeight={288} src={`${import.meta.env.BASE_URL}/img/links/filmgast/pg-datum.png`} className={clsx(imgClasses, "")} />
                                    <p>deutsch: Am 19.10. in Anwesenheit von von Gast (Rolle).
                                        <br/>
                                        englisch: On the 19th of October in the presence of Gast (role). 
                                    </p>
                                </div>

                                <p>Die Rollen (zB Editor, Drehbuch, Kamera) auf Englisch immer kleingeschrieben. Wenn du nicht sicher bist, wie du die Rolle übersetzen sollst, frag nach!</p>
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-4 mt-8 w-fit">
                            <div className="flex flex-row gap-4 items-center p-4 bg-[#ffd6ad]">
                                <Nummerierung num={3} />
                                <div className="flex flex-col gap-2 border-black border-l-2 pl-4">
                                    <p className="">Gastnamen markieren und auf <img src={`${import.meta.env.BASE_URL}/img/links/link-btn.png`} className="inline h-[30px] align-sub" /> drücken.</p> 
                                    <Image imgWidth={934} imgHeight={650} src={`${import.meta.env.BASE_URL}/img/links/filmgast/e2.png`} className="max-w-[500px]" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-4 mt-8 w-fit">
                            <div className="flex flex-row gap-4 items-center p-4 bg-[#ffd6ad]">
                                <Nummerierung num={4} />
                                <div className="flex flex-col gap-2 border-black border-l-2 pl-4">
                                    <p className="">In der Link-Box bei <b>Linkadresse</b> kann man nach dem Gastnamen suchen.</p>
                                    <p>Wenn man Glück hat, wird der Gast vorgeschlagen, dann auf den Vorschlag drücken und <img src={`${import.meta.env.BASE_URL}/img/links/linkbox-einfuegen.png`} className="inline h-[30px] align-sub" />.</p> 
                                    <Image imgWidth={744} imgHeight={462} src={`${import.meta.env.BASE_URL}/img/links/filmgast/linkbox-ja.png`} className={clsx(imgClasses, "max-w-[340px] ml-4")} />
                                    
                                    <p className="mt-8">Wenn man Pech hat, wird der Gast nicht vorgeschlagen.</p> 
                                    <Image imgWidth={886} imgHeight={470} src={`${import.meta.env.BASE_URL}/img/links/filmgast/linkbox-nein.png`} className={clsx(imgClasses, "max-w-[340px] ml-4")} />
                                    
                                    <p className="">In dem Fall muss man die <Link to={{hash:"#node"}}>Node-ID des Gasts raussuchen</Link> und hier einfügen, als <b>/node/xxx</b></p> 
                                    <Image imgWidth={724} imgHeight={320} src={`${import.meta.env.BASE_URL}/img/links/filmgast/linkbox-node.png`} className={clsx(imgClasses, "max-w-[340px] ml-4")} />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 mt-8 w-fit">
                            <div className="flex flex-row gap-4 items-center p-4 bg-[#ffd6ad]">
                                <Nummerierung num={4} />
                                <div className="flex flex-col gap-2 border-black border-l-2 pl-4">
                                    <p className="">Fertig! Dasselbe dann für die <b>englische Version</b>.</p>
                                    <Image imgWidth={726} imgHeight={264} src={`${import.meta.env.BASE_URL}/img/links/filmgast/en.png`} className={clsx(imgClasses, "max-w-[340px] ml-4")} />
                                </div>
                            </div>
                        </div>      

                    </section>

                    <section className="">
                        <h2 className="sidebar-item text-3xl font-bold text-gray-800 mb-8 mt-24" id="filmfilm" >Film zu Film</h2>
                        <div className="flex flex-row gap-8">
                            <div className="relative w-fit">
                                <Image imgWidth={520} imgHeight={928} src={`${import.meta.env.BASE_URL}/img/links/mit.png`} className={clsx(imgClasses, "max-h-[50vh] w-fit h-fit")} />
                                <InfoBox w="90%" h="10%" bottom="9%" left="4%" extraClasses="" headerPosition={HeaderPosition.top}>Mitfilm</InfoBox>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p>Im <Badge>Pocketguide</Badge> sind manchmal <b>mitgezeigte Filme</b> eingetragen.</p>
                                <div>
                                    <p>Die müssen <b>gegenseitig verlinkt</b> werden, jeweils auf den deutschen und englischen Seiten.</p>
                                    {/* <ul className="list-disc list-outside pl-8">
                                        <li>d.h. auf der Gastseite wird der Film verlinkt und auf der Filmseite der Gast.</li>
                                    </ul> */}
                                </div>
                                <p>Die Verlinkung funktioniert grundsätzlich wie bei den Gästen.</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 mt-8 w-fit">
                            <div className="flex flex-row gap-4 items-center p-4 bg-[#ffd6ad]">
                                <Nummerierung num={1} />
                                <p className="border-black border-l-2 pl-4">Mit <img src={`${import.meta.env.BASE_URL}/img/film/edit-btn.png`} className="inline w-[80px] align-sub" /> auf die Bearbeitungsseite des Films.</p> 
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-4 mt-8 w-full">
                            <div className="flex flex-row gap-4 items-center p-4 bg-[#ffd6ad] w-full relative">
                                <Nummerierung num={2} />
                                <div className="flex flex-col gap-2 border-black border-l-2 pl-4">
                                        <p className="">In die <b>Filmbeschreibung</b> einfügen: "Mit: TITEL."</p>
                                        <ul className="list-disc list-outside pl-8">
                                            <li>Filmnamen in <b>Blockbuchstaben</b></li>
                                            <li>Nach dem Namen ein Punkt.</li>
                                            <li className="mt-4">Deutsche Filmseite: zwischen deutscher und englischer Filmbeschreibung</li>
                                            <li>Englische Filmseite: nach englischer Filmbeschreibung</li>
                                        </ul>
                                </div>
                                <Image imgWidth={994} imgHeight={1118} src={`${import.meta.env.BASE_URL}/img/links/filmfilm/e2.png`} className={clsx(imgClasses, "max-w-[30%] h-fit")} />
                                <InfoBox w="17%" h="9%" top="42%" right="15%" extraClasses="" />
                                
                                {/* <div className="flex flex-row gap-2 items-center">
                                    <img src={`${import.meta.env.BASE_URL}/img/links/filmfilm/e1.png`} className={clsx(imgClasses, "max-w-[30%] h-fit")} />
                                </div> */}
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-4 mt-8 w-fit">
                            <div className="flex flex-row gap-4 items-center p-4 bg-[#ffd6ad]">
                                <Nummerierung num={3} />
                                <div className="flex flex-col gap-2 border-black border-l-2 pl-4">
                                    <p className="">Filmnamen markieren und auf <img src={`${import.meta.env.BASE_URL}/img/links/link-btn.png`} className="inline h-[30px] align-sub" /> drücken.</p> 
                                    <p className="">In der Link-Box bei <b>Linkadresse</b> kann man nach dem Filmnamen suchen.</p> 
                                    {/* <img src={`${import.meta.env.BASE_URL}/img/links/filmfilm/e3.png`} className="max-w-[500px]" /> */}
                                    
                                    <p>Wenn man Glück hat, wird der Film vorgeschlagen, dann auf den Vorschlag drücken und <img src={`${import.meta.env.BASE_URL}/img/links/linkbox-einfuegen.png`} className="inline h-[30px] align-sub" />.</p> 
                                    <Image imgWidth={934} imgHeight={712} src={`${import.meta.env.BASE_URL}/img/links/filmfilm/e3-ja.png`} className={clsx(imgClasses, "max-w-[340px] ml-4")} />
                                    
                                    <p className="mt-8">Wenn man Pech hat, wird der Film nicht vorgeschlagen.</p> 
                                    <Image imgWidth={884} imgHeight={464} src={`${import.meta.env.BASE_URL}/img/links/filmfilm/e3-nein.png`} className={clsx(imgClasses, "max-w-[340px] ml-4")} />
                                    
                                    <p className="">In dem Fall muss man die<Link to={{hash:"#node"}}>Node-ID des Films raussuchen</Link> und hier einfügen, als <b>/node/xxx</b></p> 
                                    <Image imgWidth={752} imgHeight={456} src={`${import.meta.env.BASE_URL}/img/links/filmfilm/e3-node.png`} className={clsx(imgClasses, "max-w-[340px] ml-4")} />
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-4 mt-8 w-fit">
                            <div className="flex flex-row gap-4 items-center p-4 bg-[#ffd6ad]">
                                <Nummerierung num={4} />
                                <div className="flex flex-col gap-2 border-black border-l-2 pl-4">
                                    <p className="">Fertig! Dasselbe dann für die <b>englische Version</b> und für den <b>mitgezeigten Film</b></p>
                                    <Image imgWidth={664} imgHeight={414} src={`${import.meta.env.BASE_URL}/img/links/filmfilm/e4.png`} className={clsx(imgClasses, "max-w-[340px] ml-4")} />
                                </div>
                            </div>
                        </div>                     
                    </section>

                    <section className="">
                        <h2 className="sidebar-item text-3xl font-bold text-gray-800 mb-8 mt-24" id="programme" >Programme</h2>
                        <div className="flex flex-col gap-4">
                            <p>Im <Badge>Pocketguide</Badge> sind manchmal Filme als Teil eines Programms eingetragen:</p>
                            
                        </div>
                        <div className="flex flex-row gap-2 mt-2">
                            <Image imgWidth={510} imgHeight={500} src={`${import.meta.env.BASE_URL}/img/links/programm/pg.png`} className={clsx(imgClasses, "max-h-[30vh] w-fit h-fit")} />
                            <Image imgWidth={500} imgHeight={632} src={`${import.meta.env.BASE_URL}/img/links/programm/pg2.png`} className={clsx(imgClasses, "max-h-[30vh] w-fit h-fit")} />
                        </div>
                        <p className="mt-4">Bei denen verlinken wir <b>von jedem Film auf die jeweilige Programmseite</b> (<a href="https://www.viennale.at/de/film/jelena" target="_blank">Beispiel</a>)</p>
                        <ul className="list-disc list-outside pl-8">
                            <li>Deutsch: Dieser Film läuft im Rahmen des Screenings PROGRAMMNAME. </li>
                            <li>Englisch: This film will be shown as part of the screening PROGRAMM NAME.</li>
                        </ul>
                                
                        <p className="mt-4">Sind <b>Gäste</b> anwesend, werden die <b>auch auf der Programmseite verlinkt</b> (<a href="https://www.viennale.at/de/screening/kurzfilmprogramm-2-outbursts" target="_blank">Beispiel</a>).</p>
                    </section>
                    
                    <section className="">
                        <h2 className="sidebar-item text-3xl font-bold text-gray-800 mb-8 mt-24" id="node" >Node-ID</h2>
                        <p>Jede Seite der Viennale hat eine einzigartige "node-id", also eine Zahl, die nur einmal vorkommt.</p>
                        <p className="mt-4">Die findet man, indem man auf der Seite mit <img src={`${import.meta.env.BASE_URL}/img/film/edit-btn.png`} className="inline w-[80px] align-sub" /> auf die Bearbeitungsseite geht - sie steht dann in der <b>URL</b> von eurem Browser. </p>
                        <Image imgWidth={1608} imgHeight={369} src={`${import.meta.env.BASE_URL}/img/links/node-url.png`} className={clsx("pl-4 max-w-[600px] mt-2")} />
                    </section>
                </div>
                <div className="xl:sticky xl:top-8 h-fit row-start-1">                   
                    <Sidebar
                        top={{name:"Verlinkungen", id:""}} 
                        headings={[
                            {name: "Gäste", id:"gaeste", children: [
                                {name: "Gastseite", id:"gaeste-film"},
                                { name: "Gast → Film", id:"gast-verlinkung" },
                                {name: "Film → Gast", id:"film-gaeste"},
                            ]},
                            {name: "Film zu Film", id:"filmfilm"},
                            {name: "Programme", id:"programme"},
                            {name: "Node-ID", id:"node"},
                        ]} />
                </div>
            </div>
        </div>
    )
}
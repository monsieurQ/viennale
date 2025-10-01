import AbsoluteSVG from "../components/AbsoluteSVG";
import Badge from "../components/badge";
import InfoBox, { HeaderPosition } from "../components/InfoBox";
import { Nummerierung } from "../components/Nummerierung";
import { Sidebar } from "../components/Sidebar";
import { Taste } from "../components/taste";
import { UuuuhEinGeist } from "../components/ganzwichtige/UuuuhEinGeist";
import { HilfreicherTipp } from "../components/ganzwichtige/HilfreicherTipp";
import { setTitle } from "../components/docTitle";
import ImgContainer from "../components/ganzwichtige/ImgContainer";
import { useEffect } from "react";
import { anchor } from "./utils";
import Image from "../components/ganzwichtige/Image";
import { imgClasses } from "../main";
import { Link } from "react-router";

export default function FilmBearbeiten(){
    setTitle("Anleitung – Film bearbeiten")
    // useEffect(() => {
    //     anchor()
    // }, [])

    return (
        <div className="min-h-screen bg-[#fee8d1] xl:py-12 py-8 max-w-screen">
            {/* <UuuuhEinGeist /> */}
            <div className="grid xl:grid-cols-[auto_350px] grid-cols-1 xl:gap-12 w-full max-w-[1600px]">

                <div className="px-12 row-start-2 xl:row-start-1">

                    {/* Checkliste */}
                    <h1 className="text-4xl font-bold text-gray-800 mb-8" id="checkliste">Checkliste</h1>
                    <div className="grid grid-cols-2 gap-8 mb-4">
                        <div className="flex flex-col">
                            <div className="w-fit mb-2"><Badge>Katalog</Badge></div>
                            <div className="ml-4 w-fit rounded bg-white p-2 border-gray-800/40 border-b-1">Filmbeschreibung → deutsch & englisch</div>
                            <div className="ml-4 w-fit rounded bg-white p-2 border-gray-800/40 border-b-1">Filmografie → deutsch & englisch</div>
                            <div className="ml-4 w-fit rounded bg-white p-2 border-gray-800/40 border-b-1">Hard Facts</div>
                            <div className="ml-4 w-fit rounded bg-white p-2 border-gray-800/40 border-b-1">Sponsor?</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="w-fit mb-2"><Badge>Pocketguide</Badge></div>
                            <div className="ml-4 w-fit rounded bg-white p-2 border-gray-800/40 border-b-1">
                                <Link to={{pathname: "/links", hash: "#gaeste"}}>Gäste?</Link>
                            </div>
                            <div className="ml-4 w-fit rounded bg-white p-2 border-gray-800/40 border-b-1">
                                <Link to={{pathname: "/links", hash: "#filmfilm"}}>mitgezeigte Filme?</Link>
                            </div>
                            <div className="ml-4 w-fit rounded bg-white p-2 border-gray-800/40 border-b-1">
                                <Link to={{pathname: "/links", hash: "#programme"}}>Teil eines Programms?</Link></div>
                            <div className="ml-4 w-fit rounded bg-white p-2 border-gray-800/40 border-b-1">
                                <Link to={{pathname: "/beispiele"}}>sonstige Zusatztexte?</Link>
                            </div>
                        </div>
                    </div>
                    <Link to={{pathname:"/filmnavigator"}}><Badge>Filmnavigator</Badge></Link>

                    <h1 className="text-4xl font-bold text-gray-800 mb-12 mt-32" id="edit">Film bearbeiten</h1>

                    {/* Filmbearbeitungsseite-Erklärung */}
                    <div className="mb-8 flex flex-row gap-2 items-end">
                        <p>Über</p> <img src={`${import.meta.env.BASE_URL}/img/film/edit-btn.png`} className="inline w-[80px] align-sub" /> <p>gelangt man zur Bearbeitungsseite.</p>
                    </div>

                    <div className="bg-gray-800 p-8 text-neutral-200 mb-8">
                        <h2 className="text-xl mb-8">Hier trägt man die <b>Beschreibung</b>, <b>Filmografie</b> und eventuell <b>Gäste</b>, <b>mitgezeigte Filme</b> und <b>Sponsoren</b> ein. </h2>
                        <div className="relative w-fit mb-8">
                                <div className="h-[60vh]">
                                    <img src={`${import.meta.env.BASE_URL}/img/film/film-bearbeiten.png`} className="h-[60vh]" /> 
                                </div>
                            <InfoBox w="63%" h="30%" top="12%" left="1%" extraClasses="" headerPosition={HeaderPosition.right}>Film<wbr />beschreibung & Verlinkungen</InfoBox>
                            <InfoBox w="56%" h="14%" top="53%" left="1%" extraClasses="" headerPosition={HeaderPosition.right}>Filmografie</InfoBox>
                            <InfoBox w="19%" h="4%" top="29%" right="13%" extraClasses="" headerPosition={HeaderPosition.right}>Sponsoren</InfoBox>
                        </div>
                        <h2 className="text-xl mb-4">Später werden hier auch <Link to={{pathname:"/trailer"}} className="font-bold">Trailer</Link>, <Link to={{pathname:"/keywords"}} className="font-bold">Keywords</Link> und <Link to={{pathname:"/filmnavigator"}} className="font-bold">Filmnavigator</Link> eingetragen. </h2>
                    </div>

                    {/* Filmbeschreibung */}
                    <section id="beschreibung">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 mt-24">Filmbeschreibung einfügen</h2>
                        <div className="flex flex-row gap-4 relative mb-6">
                            <div className="flex flex-col gap-4">
                                <p>Aus dem <Badge>Katalog</Badge> die <b>deutsche und englische</b> Beschreibung kopieren</p>
                                <Image src={`${import.meta.env.BASE_URL}/img/film/filmbeschreibung.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800 w-full" imgWidth={324} imgHeight={476} />
                                {/* <img src={`${import.meta.env.BASE_URL}/img/film/filmbeschreibung.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800" /> */}
                            </div>
                            <div className="flex flex-col gap-4">
                                <p>In der Box <b>Filmbeschreibung</b> einfügen</p>
                                {/* <img src={`${import.meta.env.BASE_URL}/img/film/filmbeschreibung-box.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800" /> */}
                                <Image src={`${import.meta.env.BASE_URL}/img/film/filmbeschreibung-box.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800 w-full" imgWidth={1970} imgHeight={430} />
                            </div>
                            <AbsoluteSVG paths={[
                                {points: [ {xP:0.3, yP:0.8}, {x2: 0.7, y2:0.2, cx:0.6, cy:0.8} ]},
                                ]} />
                        </div>
                    

                        {/* Filmbeschreibung - Abstände */}
                        <section id="abstand-komisch">
                            <div className="p-8 pt-20 bg-[#feb109] relative ">
                                {<img src={`${import.meta.env.BASE_URL}/wichtig/happyman.png`} className="absolute -right-9 -top-[160px] w-[20%] origin-bottom motion-safe:headSpin " />}
                                {/* <img src={`${import.meta.env.BASE_URL}/wichtig/happyman2.png`} className="absolute -right-9 -top-[160px] w-1/4" /> */}
                                <div className="flex flex-row gap-4 items-end mb-20">
                                    <h3 className="text-4xl font-bold text-gray-800" id="abstand-komisch">Falls die Zeilenabstände komisch sind</h3>
                                </div>
                                <p className="mb-4">Da gibt es <b>zwei Möglichkeiten</b>:</p>
                                <div className="grid grid-cols-[1fr_8px_1fr] gap-12">
                                    <div>
                                        <h4 className="font-bold mb-4 text-xl">Möglichkeit 1: Quellcode (funktioniert immer)</h4>
                                        <div className="flex flex-col gap-8">
                                            <div className="flex flex-row gap-4 items-center">
                                                <Nummerierung num={1} />
                                                <p>Alles wieder rauslöschen 🙂</p>
                                            </div>
                                            <div className="flex flex-row gap-4 items-center">
                                                <Nummerierung num={2} />
                                                <div className="flex flex-col gap-2">
                                                    <p>Oben in der Filmbeschreibung-Box gibt es den <b>Quellcode</b>-Button:</p>
                                                    {/* <img src={`${import.meta.env.BASE_URL}/img/film/quellcode-box.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800" /> */}
                                                    <Image src={`${import.meta.env.BASE_URL}/img/film/quellcode-box.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800" imgWidth={504} imgHeight={88} />
                                                </div>
                                            </div>
                                            <div className="flex flex-row gap-4 items-center">
                                                <Nummerierung num={3} />
                                                <div className="flex flex-row gap-2 items-center">
                                                    <img src={`${import.meta.env.BASE_URL}/img/film/quellcode2.png`} width="160px" className="border-2 border-gray-800 brutal-shadow text-gray-800 shrink-0" />
                                                    <p>Nochmal den ganzen Text einfügen. 🙂</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-row gap-4 items-center">
                                                <Nummerierung num={4} />
                                                <div className="flex flex-row gap-2 items-center">
                                                    {/* <img src={`${import.meta.env.BASE_URL}/img/film/quellcode1.png`} width="160px" className="border-2 border-gray-800 brutal-shadow text-gray-800" /> */}
                                                    <Image imgWidth={309} imgHeight={116} src={`${import.meta.env.BASE_URL}/img/film/quellcode1.png`}  className="border-2 border-gray-800 brutal-shadow text-gray-800 w-[160px]" />
                                                    <p>Quellcode wieder deaktivieren.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-full bg-gray-800"></div>
                                    <div>
                                        <h4 className="font-bold mb-4 text-xl">Möglichkeit 2: Special-Einfügen (funktioniert manchmal, angeblich, wer weiß schon, ob das überhaupt je funktioniert hat)</h4>
                                        <h5 className="text-lg mb-4">Mac</h5>
                                        <div className="flex flex-col gap-2 mb-8">
                                            <div className="relative">
                                                {/* <img src={`${import.meta.env.BASE_URL}/img/film/mac-paste.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800" />  */}
                                                <Image imgWidth={792} imgHeight={556} src={`${import.meta.env.BASE_URL}/img/film/mac-paste.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800" /> 
                                                <InfoBox w="64%" h="10%" right="2%" bottom="20%" />
                                            </div>
                                            <p>Bei Macs gibt es "Paste and match style" mit stylisher Tastenabkürzung. Bei deutschsprachigen Macs ist das Englisch aber Deutsch.</p>
                                        </div>
                                        <h5 className="text-lg mb-4">Windows</h5>
                                        <div className="flex flex-col gap-2">
                                            {/* <img src={`${import.meta.env.BASE_URL}/img/film/windows-paste.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800" />  */}
                                            <Image imgWidth={788} imgHeight={556} src={`${import.meta.env.BASE_URL}/img/film/windows-paste.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800" /> 
                                            <p>Bei Windows gibt es auch so etwas, ich glaube mit Rechtsklick in die Textbox kann man das machen.</p>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </section>

                        {/* Affe */}
                        {/* <div className="w-full relative">
                            <img src={`${import.meta.env.BASE_URL}/affenschwung-bg.png`} className="" />
                            <img src={`${import.meta.env.BASE_URL}/affenschwung.gif`} className="" />
                        </div> */}

                        {/* Filmbeschreibung - Abstandsregeln */}
                        <section id="abstand-regeln">
                            <h3 className="text-2xl font-bold text-gray-800 mb-8 mt-16">Abstands-Regelurierungen</h3>
                            <div className="grid grid-cols-2 gap-12">
                                <div className="flex flex-col gap-4">
                                    <p>Am Anfang kann das etwas verwirrend sein, immer-immer gerne im Chat nachfragen! </p> 
                                    
                                    <p>Prinzipiell gibt es die <b>Filmbeschreibungen</b> und <b>Zusatzinfos</b>. 
                                        <ul className="list-disc list-outside pl-8">
                                            <li>Zusatzinfos sind Gäste, mitgezeigte Filme und besondere Zusatztexte.</li>
                                        </ul>
                                    </p>
                                    <p className="mt-4">Nach der <b>deutschen Filmbeschreibung</b> ein <b>Absatz.</b> ({<Taste str="enter"/>})</p>
                                    <p>Zwischen mehreren Zusatzinfos ein <b>einfacher Zeilenabstand</b> ({<Taste str="shift"/>} + {<Taste str="enter"/>})</p>
                                </div>
                                
                                {/* <img src={`${import.meta.env.BASE_URL}/img/film/abstaende.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800" /> */}
                                <div className="flex flex-col gap-2">
                                    <p className="text-end w-full">Bei <a href="https://www.viennale.at/de/film/tardes-de-soledad" target="_blank">diesem Film</a> sieht man schön, wie's optimal ist <br/> (die englischen Links auf deutscher Seite ignorieren! das machma nimma!).</p> 
                                    <a href="https://www.viennale.at/de/film/tardes-de-soledad" target="_blank">
                                        <Image imgWidth={1710} imgHeight={1532} src={`${import.meta.env.BASE_URL}/img/film/abstaende.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800" />
                                    </a>
                                </div>
                            </div>
                        </section>
                    </section>

                    {/* Filmografie */}
                    <section id="filmografie">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 mt-24">Filmografie einfügen</h2>
                        <div className="grid grid-cols-[2fr_3fr] gap-12 items-start relative">
                            <div className="relative">
                                {/* <img src={`${import.meta.env.BASE_URL}/img/film/filmografie.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800" /> */}
                                <Image imgWidth={892} imgHeight={1016} src={`${import.meta.env.BASE_URL}/img/film/filmografie.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800" />
                                <InfoBox right="13%" top="20%" w="40%" h="7%" />
                            </div>
                            
                            <div className="flex flex-col gap-12">
                                {/* Schritt 1 */}
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-row gap-4 items-center">
                                            <Nummerierung num={1} />
                                        <p>In die Box <b>Information Director</b> zunächst den Regisseur-Namen aus dem <Badge>Katalog</Badge> <b>fett markiert</b> und aber <b>nicht in Blockbuchstaben</b> und Doppelpunkt:</p>
                                    </div>
                                    {/* <img src={`${import.meta.env.BASE_URL}/img/film/filmografie-box.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800" /> */}
                                    <Image imgWidth={1970} imgHeight={430} src={`${import.meta.env.BASE_URL}/img/film/filmografie-box.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800" />
                                    <p className="text-sm">
                                        Für Fettschreibung den Namen markieren und
                                        <ul className="list-disc list-outside pl-8">
                                            <li className="mt-2">auf das <span className="rounded bg-white border-1 border-gray-500/50 font-bold p-1 mr-1">B</span>oben drücken</li>
                                            <li className="mt-2">oder <Taste str="⌘" />+<Taste str="B" /> bzw. <Taste str="strg" />+<Taste str="B" /></li>
                                        </ul>
                                    </p>
                                </div>

                                {/* Schritt 2 */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-row gap-4 items-center">
                                            <Nummerierung num={2} />
                                        <p>Aus dem <Badge>Katalog</Badge> die <b>Filmografie</b> nach dem Namen reinkopieren.</p>
                                    </div>
                                    <p>Wenn wieder Formatierung ein Schrott → Quellcode-Trick</p>
                                    <img src={`${import.meta.env.BASE_URL}/img/film/filmografie-box-2.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800" />
                                </div>
                            </div>
                            {/* {points: [ {xP:0.3, yP:0.8}, {x2: 0.7, y2:0.4, cx:0.6, cy:0.8} ]}, */}
                            <AbsoluteSVG 
                                paths={[ 
                                    {points: [{xP: 0.32, yP: 0.2}, {x2:0.44, y2:0.25, cx:0.4, cy:0.25 }]},
                                    {points: [{xP: 0.32, yP: 0.62}, {x2:0.44, y2:0.9, cx:0.4, cy:0.9}]},
                                ]} />
                        </div>
                    </section>

                    {/* Hard Facts */}
                    <section id="hard-facts">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 mt-24">Hard Facts</h2>
                        <div className="flex flex-row gap-8">
                            <div className="relative">
                                <img src={`${import.meta.env.BASE_URL}/img/credits/katalog-credits.png`} className={imgClasses} />
                                <InfoBox top="40%" right="7%" w="46%" h="43%" />
                            </div>
                            <div className="flex flex-col gap-4">
                                <p>Auch die stehen im <Badge>Katalog</Badge> - rechts neben der Filmbeschreibung. </p>
                                <p><b>Credits</b> sind die Personen, die mitgewirkt haben (Drehbuch, Musik, Schnitt etc.)</p>
                                <p>Dann werden auch Unternehmen eingetragen, die mitgewirkt haben (Produktion, Vertrieb etc.) </p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 items-baseline mb-8 mt-8">
                            <p>Dafür gibt es <b>unten</b> diesen Button:</p>
                            <img src={`${import.meta.env.BASE_URL}/img/credits/edit-hard-facts-btn.png`} className="w-[180px] align-sub" />
                        </div>
                        <div className="p-8 bg-[#feb109] w-fit mt-8">
                            <p>Manchmal scheinen Änderungen an den Hard Facts nicht auf der Filmseite auf! 
                                <br />In dem Fall auf <img src={`${import.meta.env.BASE_URL}/img/film/edit-btn.png`} className="inline w-[80px] align-sub" /> und dort nochmal speichern. </p>    
                        </div>

                        {/* Credits */}
                        <section id="credits">
                            <h3 className="text-2xl font-bold text-gray-800 mb-8 mt-24" >Credits</h3>
                            <div className="grid grid-cols-2 gap-4 items-end relative mb-8" id="svg-credits">
                                {/* <img src={`${import.meta.env.BASE_URL}/img/credits/credits.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800" /> */}
                                <Image imgWidth={1048} imgHeight={556} src={`${import.meta.env.BASE_URL}/img/credits/credits.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800" />
                                {/* <img src={`${import.meta.env.BASE_URL}/img/credits/credits-ausgefuellt.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800" /> */}
                                <Image imgWidth={1966} imgHeight={934} src={`${import.meta.env.BASE_URL}/img/credits/credits-ausgefuellt.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800" />
                                <AbsoluteSVG paths={[
                                    {points: [
                                        {xP: 0.4, yP: 1}, {x2:0.6, y2:1, cx:0.5, cy:1.1 }]},
                                    ]} />
                            </div>

                            <p className="mb-8">Für jede Person wird <b>Name</b> und <b>Rolle</b> eingetragen. </p>
                            <div className="grid grid-cols-[min-content_auto] gap-x-8 gap-y-8 items-center mb-12">
                                <Nummerierung num={1} /> 
                                <div className="flex flex-row items-end gap-4">
                                    {/* <img src={`${import.meta.env.BASE_URL}/img/credits/autocomplete.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800 w-[200px]" /> */}
                                    <Image imgWidth={456} imgHeight={254} src={`${import.meta.env.BASE_URL}/img/credits/autocomplete.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800 w-[200px]" />
                                    <p>Im Feld <b>Person (Katalog)</b> den Namen eingeben – falls der richtige Name angeboten wird, dann <b>auf den Vorschlag klicken!</b></p>
                                </div>

                                <Nummerierung num={2} /> 
                                <div className="flex flex-row items-end gap-4">
                                    {/* <img src={`${import.meta.env.BASE_URL}/img/credits/person-neu.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800 w-[200px]" /> */}
                                    <Image imgWidth={360} imgHeight={184} src={`${import.meta.env.BASE_URL}/img/credits/person-neu.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800 w-[200px]" />
                                    <p>Falls der Name nicht angeboten wird: im Feld <b>Person (neu)</b> eintragen.</p>
                                </div>
                            
                                <Nummerierung num={3} /> 
                                <div className="flex flex-row items-end gap-4">
                                    {/* <img src={`${import.meta.env.BASE_URL}/img/credits/autocomplete-2.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800 w-[200px]" /> */}
                                    <Image imgWidth={354} imgHeight={256} src={`${import.meta.env.BASE_URL}/img/credits/autocomplete-2.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800 w-[200px]" />
                                    <div className="flex flex-col gap-4">
                                        <p>Im Feld <b>Rolle</b> (Drehbuch, Ton, Kamera, ...) wieder auf den <b> Vorschlag klicken!</b>.</p>
                                        <p className="bg-[#ffd6ad] p-4">Wenn die richtige Rolle nicht vorgeschlagen wird - gebt uns Bescheid!</p>

                                    </div>
                                </div>

                                <Nummerierung num={4} /> 
                                <div className="flex flex-row items-end gap-4">
                                    {/* <img src={`${import.meta.env.BASE_URL}/img/credits/credit-add-btn.png`} className="w-[200px]" /> */}
                                    <Image imgWidth={459} imgHeight={108} src={`${import.meta.env.BASE_URL}/img/credits/credit-add-btn.png`} className="w-[200px]" />
                                    <p>Das Ganze für jede angegebene Person - neue Felder kann man mit <b>Credit hinzufügen</b> heraufbeschwören.</p>
                                </div>

                            
                            </div>
                            <div className="flex flex-row items-end gap-4">
                                {/* <img src={`${import.meta.env.BASE_URL}/img/credits/charakter.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800 w-[200px]" /> */}
                                <Image imgWidth={502} imgHeight={180} src={`${import.meta.env.BASE_URL}/img/credits/charakter.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800 w-[200px]" />
                                <p>Kommt sehr selten vor – ist bei einer Person mit der Rolle <b>Mit</b> in Klammern der Name des Charakters angegeben, dann im Feld <b>Charakter</b> eintragen.</p>
                            </div>

                        </section>
                        
                        {/* Produktion, Rechte, Vertrieb, ... */}
                        <section id="unternehmen">
                            <h3 className="text-2xl font-bold text-gray-800 mt-16 mb-8" >Produktion, Rechte, Vertrieb, ...</h3>
                            <p>Diese Felder sind ganz unten.</p> 
                            <div className="grid grid-cols-2 mt-8 gap-4 items-start">
                                <div className="flex flex-col gap-4 bg-[#ffd6ad] p-4">
                                    <p>Bei <b>Produktion</b>, <b>Weltrechte</b> und <b>Rechte für Österreich</b> wie bei den Credits - jeden Eintrag in sein eigenes Feld.</p>
                                    <div className="grid grid-cols-3 items-end gap-1">
                                        {/* <img src={`${import.meta.env.BASE_URL}/img/credits/produktion.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800" />
                                        <img src={`${import.meta.env.BASE_URL}/img/credits/weltrechte.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800" />
                                        <img src={`${import.meta.env.BASE_URL}/img/credits/rechte.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800" /> */}
                                        <Image imgWidth={882} imgHeight={632} src={`${import.meta.env.BASE_URL}/img/credits/produktion.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800" />
                                        <Image imgWidth={522} imgHeight={430} src={`${import.meta.env.BASE_URL}/img/credits/weltrechte.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800" />
                                        <Image imgWidth={514} imgHeight={426} src={`${import.meta.env.BASE_URL}/img/credits/rechte.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 bg-[#ffd6ad] p-4">
                                    <p><b>Weltvertrieb</b> und <b>Verleih in Österreich</b> haben nur ein Feld – falls mehrere angegeben sind, einfach mit Beistrich trennen.</p>
                                    {/* <img src={`${import.meta.env.BASE_URL}/img/credits/weltvertrieb-verleih.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800 w-[300px]" /> */}
                                    <Image imgWidth={494} imgHeight={364} src={`${import.meta.env.BASE_URL}/img/credits/weltvertrieb-verleih.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800 w-[300px]" />
                                </div>
                            </div>
                        </section>

                    </section>


                    {/* FERTIG */}
                    <div className="relative my-24 text-center">
                        <h1 className="font-bold text-[128px]">Geschafft!</h1>
                        {/* <img src={`${import.meta.env.BASE_URL}/wichtig/superman.png`} className="" /> */}
                        <Image imgWidth={1750} imgHeight={1292} src={`${import.meta.env.BASE_URL}/wichtig/superman.png`} className="" />
                    </div>

                </div>

                <div className="xl:sticky xl:top-8 h-fit row-start-1">
                    <Sidebar
                        top={{name:"Film bearbeiten", id:""}}
                        headings={[
                            {name: "Checkliste", id:"checkliste"},
                            {name: "Filmbeschreibung einfügen", id:"beschreibung", children: [
                                {name: "Abstände komisch?", id:"abstand-komisch"},
                                {name: "Abstands-Regelurierungen", id:"abstand-regeln"},
                            ]},
                            {name: "Filmografie einfügen", id:"filmografie"},
                            {name: "Hard Facts", id:"hard-facts", children: [
                                {name: "Credits", id:"credits"},
                                {name: "Produktion, Rechte, Vertrieb, ...", id:"unternehmen"},
                            ]},
                    ]} />
                </div>

            </div>
            {/* <div className="mt-12 text-end max-w-screen overflow-hidden">
                <HilfreicherTipp 
                    imgSrc={`${import.meta.env.BASE_URL}/wichtig/Kalamata-sm.png`}
                    headline={"Hast du gewusst?"}
                    text="Paul arbeitet weiter fleißig an s"
                    />
            </div> */}
        </div>
    )
}
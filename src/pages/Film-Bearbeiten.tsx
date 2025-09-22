import AbsoluteSVG from "../components/AbsoluteSVG";
import Badge from "../components/badge";
import InfoBox, { HeaderPosition } from "../components/InfoBox";
import { Nummerierung } from "../components/Nummerierung";
import { Taste } from "../components/taste";

export default function FilmBearbeiten(){

    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="grid grid-cols-[auto_350px] w-full max-w-[1600px]">
                <div className="px-12 border-r-8 border-gray-800">
                    <h1 className="text-4xl font-bold text-gray-800 mb-16">Film bearbeiten</h1>


                    {/* Filmbearbeitungsseite-Erklärung */}
                    <div className="mb-8 flex flex-row gap-2 items-end"><p>Über</p> <img src="/img/film/edit-btn.png" className="inline" /> <p>gelangt man zur Bearbeitungsseite.</p></div>

                    <div className="bg-gray-800 p-8 text-neutral-200 mb-8">
                        <h2 className="text-xl mb-8">Hier trägt man die <b>Beschreibung</b>, <b>Filmografie</b> und eventuell <b>Gäste</b>, <b>mitgezeigte Filme</b> und <b>Sponsoren</b> ein. </h2>
                        <div className="relative w-fit mb-8">
                            <img src="/img/film/film-bearbeiten.png" />
                            <InfoBox w="63%" h="30%" top="12%" left="1%" extraClasses="" headerPosition={HeaderPosition.right}>Film<wbr />beschreibung & Verlinkungen</InfoBox>
                            <InfoBox w="56%" h="14%" top="53%" left="1%" extraClasses="" headerPosition={HeaderPosition.right}>Filmografie</InfoBox>
                            <InfoBox w="19%" h="4%" top="29%" right="13%" extraClasses="" headerPosition={HeaderPosition.right}>Sponsoren</InfoBox>
                        </div>
                        <h2 className="text-xl mb-4">Später werden hier auch <a href="" className="font-bold">Trailer</a>, <a href="" className="font-bold">Keywords</a> und <a href="" className="font-bold">Filmnavigator</a> eingetragen. </h2>
                    </div>

                    {/* Filmbeschreibung */}
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Filmbeschreibung einfügen</h2>
                    <div className="flex flex-row gap-4 relative mb-6">
                        <div className="flex flex-col gap-4">
                            <p>Aus dem <Badge>Katalog</Badge> die <b>deutsche und englische</b> Beschreibung kopieren</p>
                            <img src="/img/film/filmbeschreibung.png" className="border-2 border-gray-800 brutal-shadow text-gray-800" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <p>In der Box <b>Filmbeschreibung</b> einfügen</p>
                            <img src="/img/film/filmbeschreibung-box.png" className="border-2 border-gray-800 brutal-shadow text-gray-800" />
                        </div>
                        <AbsoluteSVG paths={[
                            {points: [ {xP:0.3, yP:0.8}, {x2: 0.7, y2:0.4, cx:0.6, cy:0.8} ]},
                            ]} />
                    </div>

                    {/* Filmbeschreibung - Abstände */}
                    <div className="p-8 bg-[#E4EB81] mb-16">
                        <div className="flex flex-row flex-wrap gap-4 items-baseline mb-8">
                            <h3 className="text-2xl font-bold text-gray-800 ">Falls die Zeilenabstände komisch sind</h3>
                            <p> – das kommt leider oft vor</p>
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
                                            <img src="/img/film/quellcode-box.png" className="border-2 border-gray-800 brutal-shadow text-gray-800" />
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-4 items-center">
                                        <Nummerierung num={3} />
                                        <div className="flex flex-row gap-2 items-center">
                                            <img src="/img/film/quellcode2.png" width="160px" className="border-2 border-gray-800 brutal-shadow text-gray-800 shrink-0" />
                                            <p>Nochmal den ganzen Text einfügen. 🙂</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-4 items-center">
                                        <Nummerierung num={4} />
                                        <div className="flex flex-row gap-2 items-center">
                                            <img src="/img/film/quellcode1.png" width="160px" className="border-2 border-gray-800 brutal-shadow text-gray-800" />
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
                                        <img src="/img/film/mac-paste.png" className="border-2 border-gray-800 brutal-shadow text-gray-800" /> 
                                        <InfoBox w="64%" h="10%" right="2%" bottom="20%" />
                                    </div>
                                    <p>Bei Macs gibt es "Paste and match style" mit stylisher Tastenabkürzung. Bei deutschsprachigen Macs ist das Englisch aber Deutsch.</p>
                                </div>
                                <h5 className="text-lg mb-4">Windows</h5>
                                <div className="flex flex-col gap-2">
                                    <img src="/img/film/windows-paste.png" className="border-2 border-gray-800 brutal-shadow text-gray-800" /> 
                                    <p>Bei Windows gibt es auch so etwas, ich glaube mit Rechtsklick in die Textbox kann man das machen.</p>
                                </div>
                            </div>
                        </div>  
                    </div>

                    {/* Filmbeschreibung - Abstandsregeln */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-8">Abstands-Regelurierungen</h3>
                    <div className="grid grid-cols-2 gap-12 mb-16">
                        <div className="flex flex-col gap-4">
                            <p>Am Anfang kann das etwas verwirrend sein, immer-immer gerne im Chat nachfragen! </p> 
                            <p>Bei <a href="https://www.viennale.at/de/film/tardes-de-soledad" target="_blank">diesem Film</a> sieht man schön, wie's optimal ist:</p> 
                            <p>Prinzipiell gibt es die <b>Filmbeschreibungen</b> und <b>Zusatzinfos</b>. 
                                <ul className="list-disc list-outside pl-8">
                                    <li>Zusatzinfos sind Gäste, mitgezeigte Filme und besondere Zusatztexte.</li>
                                </ul>
                            </p>
                            <p>Nach der <b>deutschen Filmbeschreibung</b> ein <b>Absatz.</b> ({<Taste str="enter"/>})</p>
                            <p>Zwischen mehreren Zusatzinfos ein <b>einfacher Zeilenabstand</b> ({<Taste str="shift"/>} + {<Taste str="enter"/>})</p>
                        </div>
                        
                        <img src="/img/film/abstaende.png" className="border-2 border-gray-800 brutal-shadow text-gray-800" />
                    </div>

                    {/* Filmografie */}
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Filmografie einfügen</h2>
                    <div className="grid grid-cols-[2fr_3fr] gap-12 items-start mb-8 relative">
                        <div className="relative">
                            <img src="/img/film/filmografie.png" className="border-2 border-gray-800 brutal-shadow text-gray-800" />
                            <InfoBox right="13%" top="20%" w="40%" h="7%" />
                        </div>
                        
                        <div className="flex flex-col gap-12">
                            {/* Schritt 1 */}
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row gap-4 items-center">
                                        <Nummerierung num={1} />
                                    <p>In die Box <b>Information Director</b> zunächst den Regisseur-Namen aus dem <Badge>Katalog</Badge> <b>fett markiert</b> und aber <b>nicht in Blockbuchstaben</b> und Doppelpunkt:</p>
                                </div>
                                <img src="/img/film/filmografie-box.png" className="border-2 border-gray-800 brutal-shadow text-gray-800" />
                                <p className="text-sm">
                                    Für Fettschreibung den Namen markieren und
                                    <ul className="list-disc list-outside pl-8">
                                        <li className="mt-2">auf das <span className="rounded bg-white border-1 border-gray-500/50 font-bold p-1 mr-1">B</span>oben drücken</li>
                                        <li className="mt-2">oder Mac: <Taste str="⌘" />+<Taste str="B" /> bzw. Windows:<Taste str="strg" />+<Taste str="B" /></li>
                                    </ul>
                                </p>
                            </div>

                            {/* Schritt 2 */}
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-row gap-4 items-center">
                                        <Nummerierung num={2} />
                                    <p>Aus dem <Badge>Katalog</Badge> die <b>Filmografie</b> nach dem Namen reinkopieren.</p>
                                </div>
                                <img src="/img/film/filmografie-box-2.png" className="border-2 border-gray-800 brutal-shadow text-gray-800" />
                            </div>
                        </div>
                        {/* {points: [ {xP:0.3, yP:0.8}, {x2: 0.7, y2:0.4, cx:0.6, cy:0.8} ]}, */}
                        <AbsoluteSVG 
                            paths={[ 
                                {points: [{xP: 0.32, yP: 0.2}, {x2:0.44, y2:0.25, cx:0.4, cy:0.25 }]},
                                {points: [{xP: 0.32, yP: 0.62}, {x2:0.44, y2:0.9, cx:0.4, cy:0.9}]},
                            ]} />
                    </div>

                    {/* Hard Facts */}
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Hard Facts</h2>
                    <div className="flex flex-row gap-8 mb-8">
                        <div className="relative">
                            <img src="/img/credits/katalog-credits.png" />
                            <InfoBox top="40%" right="7%" w="46%" h="43%" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <p>Auch die stehen im <Badge>Katalog</Badge>, rechts neben der Filmbeschreibung. </p>
                            <p><b>Credits</b> sind die Personen, die mitgewirkt haben - Drehbuch, Musik, Schnitt etc.</p>
                            <p>Dann werden auch Unternehmen, die mitgewirkt haben - Produktion, Vertrieb etc. </p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-8 items-baseline mb-8">
                        <p>Dafür gibt es unten diesen Button:</p>
                        <img src="/img/credits/edit-hard-facts-btn.png" className="border-2 border-gray-800 brutal-shadow text-gray-800 w-[250px]" />
                    </div>

                    {/* Credits */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-8">Credits</h3>
                    <div className="grid grid-cols-2 gap-4 items-end relative">
                        <img src="/img/credits/credits.png" className="border-2 border-gray-800 brutal-shadow text-gray-800" />
                        <img src="/img/credits/credits-ausgefuellt.png" className="border-2 border-gray-800 brutal-shadow text-gray-800" />
                    </div>
                    <p>Für jede Person wird <b>Name</b> und <b>Rolle</b> eingetragen. </p>
                    

                    {/* Produktion, Rechte, Vertrieb, ... */}
                    <h3 className="text-2xl font-bold text-gray-800 mt-8">Produktion, Rechte, Vertrieb, ...</h3>

                    
                </div>
                <div className="bg-emerald-500 w-[350px] mx-12 min-h-[20vh]"></div>
            </div>
        </div>
    )
}
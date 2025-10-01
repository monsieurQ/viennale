import { Link } from "react-router";
import Badge from "../components/badge";
import { setTitle } from "../components/docTitle";
import Image from "../components/ganzwichtige/Image";
import InfoBox, { HeaderPosition } from "../components/InfoBox";
import { Sidebar } from "../components/Sidebar";
import { imgClasses } from "../main";

interface Sponsoren {

}

export default function Sponsoren({}:Sponsoren){
    setTitle("Anleitung – Sponsoren")

    return (
        <div className="min-h-screen bg-[#fee8d1] py-12">
            <div className="grid grid-cols-[auto_350px] w-full max-w-[1600px]">
                <div className="px-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-12" id="edit">Sponsoren</h1>
                    
                    <ul className="list-disc list-outside pl-8">
                        <li className="mt-2">muss man nur in einer Sprache eintragen!</li>
                    </ul>

                    <p className="mt-12 mb-2">Wenn im <Badge>Katalog</Badge> unten rechts so ein Logo ist – das ist ein <b>Sponsor</b>:</p>
                    <div className="relative w-[400px]">
                        <Image imgWidth={1416} imgHeight={1408} src={`${import.meta.env.BASE_URL}/img/sponsoren/dahomey.png`} className={imgClasses+ ""} />
                        <InfoBox w="42%" h="9%" bottom="7%" right="10%" extraClasses="" headerPosition={HeaderPosition.left}>Sponsor</InfoBox>
                    </div>

                    {/* WO WIE EINTRAGEN */}
                    <section id="eintragen">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 mt-24" >Wo eintragen?</h2>
                        
                        <p className="mb-2">Auf der Bearbeiten-Seite eines Films werden die unter <b>Partner</b> eingetragen</p>
                        <Image imgWidth={448} imgHeight={222} src={`${import.meta.env.BASE_URL}/img/sponsoren/edit.png`} className={imgClasses +" w-[200px]"} />


                        <div className="bg-gray-800 p-8 w-full text-neutral-200 mt-8">
                            <p className="">Mit <Image imgWidth={298} imgHeight={40} src={`${import.meta.env.BASE_URL}/img/sponsoren/add.png`} className="inline align-bottom mx-1 shadow w-[240px] rounded" /> öffnet sich das Menü:</p>
                            <div className="flex flex-row gap-8 mt-4">
                                <Image imgWidth={1920} imgHeight={1216} src={`${import.meta.env.BASE_URL}/img/sponsoren/edit-2.png`} className="max-w-1/2" />

                                <div className="flex flex-col gap-4">
                                    <p><b>Credit</b> bleibt leer.</p>
                                    <p>Unter <b>Link</b> kommt ein sponsor-spezifischer Link hinein (siehe <Link to={{hash:"#sponsorlink"}}>unten</Link>).</p>
                                </div>
                            </div>

                            <p className="mt-12">Über <img src={`${import.meta.env.BASE_URL}/img/sponsoren/medien-add.png`} className="inline align-bottom mx-1 shadow w-[180px] rounded" /> öffnet sich das Popup, um das Logo einzufügen:</p>
                            <div className="flex flex-row gap-8 mt-4">
                                <div className="max-w-1/2 relative">
                                    <Image imgWidth={2602} imgHeight={1912} src={`${import.meta.env.BASE_URL}/img/sponsoren/popup.png`} className="w-full" />
                                    <InfoBox w="60%" h="15%" top="25%" left="2%" extraClasses="" headerPosition={HeaderPosition.right}>Suche</InfoBox>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <p>Bei <b>Name</b> kann man die Bibliothek durchsuchen.  </p>
                                    <p>Für einen Sponsor können mehrere verschiedene Logos in der Bibliothek sein. <br/> Bitte <b>jenes auswählen, dass im Katalog gezeigt wird</b>! </p>

                                    <p><img src={`${import.meta.env.BASE_URL}/img/sponsoren/speichern.png`} className="inline align-bottom mr-1 shadow w-[180px] rounded" /> um zu speichern.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* WELCHER LINK???? */}
                    <section id="sponsorlink">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 mt-24">Welcher Link?</h2>

                        <div className="grid grid-cols-[max-content_auto] gap-4 bg-white p-4 w-fit">
                            <div className="font-bold">Sponsor</div>
                            <div className="font-bold">Link</div>
                            <div className="col-span-2 h-[1px] bg-gray-800"/>
                            
                            <div>Erste Bank</div>
                            <div className="text-sm">https://www.sparkasse.at/erstebank/privatkunden</div>

                            <div>Intercontinental</div>
                            <div className="text-sm">https://www.vienna.intercontinental.com/</div>

                            <div>ORF</div>
                            <div className="text-sm">https://orf.at/</div>
                            
                            <div>The Harmonie</div>
                            <div className="text-sm">https://www.harmonie-vienna.at/?gad_source=1&gclid=Cj0KCQjwsJO4BhDoARIsADDv4vCaTwacZiWjkbA28kDQiEsuliR3o21eKX0dzbWVBHCnkyPEYW5kWOEaAv_0EALw_wcB</div>
                            
                            <div>Infoscreen</div>
                            <div className="text-sm">https://www.infoscreen.at/</div>
                            
                            <div>fm4</div>
                            <div className="text-sm">https://fm4.orf.at/</div>
                            
                            <div>FedEx</div>
                            <div className="text-sm">https://www.fedex.com/de-at/home.html</div>
                            
                            <div>Weingut Bründlmayer</div>
                            <div className="text-sm">https://www.bruendlmayer.at/presse/</div>
                            
                            <div>APA</div>
                            <div className="text-sm">https://apa.at/</div>
                            
                            <div>Epitome</div>
                            <div className="text-sm">https://epitome.inc/de</div>

                            {/* <div>Erste Bank</div>
                            <div className="text-sm">https://www.sparkasse.at/erstebank/privatkunden</div> */}
                        </div>
                    </section>
                </div>

                {/* <Sidebar
                    top={{name:"Sponsoren", id:""}} 
                    headings={[
                        {name: "Wo eintragen?", id:"eintragen"},
                        {name: "Welcher Link?", id:"sponsorlink"},
                    ]} /> */}
            </div>

        </div>
    )
}
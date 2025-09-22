import Badge from "../components/badge";
import InfoBox, { HeaderPosition } from "../components/InfoBox";

export default function Intro(){

    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="grid grid-cols-[auto_350px] w-full max-w-[1600px]">
                <div className="px-12 border-r-8 border-gray-800">
                    <h1 className="text-4xl font-bold text-gray-800 mb-16">Anleitung</h1>
                    {/* <p>Die Informationen für die einzelnen Filme findet ihr im <b>Katalog</b> und im <b>Pocketguide</b>.</p> */}
                    <p className="mb-8">Die Informationen für die einzelnen Filme findet ihr im <Badge>Katalog</Badge> und im <Badge>Pocketguide</Badge>.</p>
    
                    <div className="bg-gray-800 p-8 text-neutral-200 mb-8">
                        <div className="grid grid-cols-2 gap-12">
                            <div className="flex flex-col gap-8">
                                <h2 className="text-2xl font-bold">Katalog</h2>
                                <p className="">jede Filmgruppe hat eigene Datei (ein Katalog jeweils für Features, Kurzfilme, Monografie, Historiografie, Retrospektive) </p>
                                <div className="relative w-fit">
                                    <img src="./img/intro/katalog-intro.png" />
                                    <InfoBox w="56%" h="23%" top="36%" left="6%">deutscher Text</InfoBox>
                                    <InfoBox w="56%" h="33%" bottom="7%" left="6%" headerPosition={HeaderPosition.bottom}>englischer Text</InfoBox>
                                    <InfoBox w="41%" h="15%" top="43%" right="-5%" extraClasses="" headerPosition={HeaderPosition.right}>Hard Facts</InfoBox>
                                    <InfoBox w="42%" h="9%" top="62%" right="-6%" extraClasses="" headerPosition={HeaderPosition.right}>Filmo<wbr />grafie</InfoBox>
                                </div>
                            </div>
                            <div className="flex flex-col gap-8 text-end">
                                <h2 className="text-2xl font-bold">Pocketguide</h2>
                                <p className="">enthält <b>alle Filme</b> in einer Datei </p>
                                <div className="relative w-fit">
                                    <img src="./img/intro/pg-intro.png" />
                                    <InfoBox w="28%" h="5%" top="28%" left="4%" extraClasses="">evtl. Gäste</InfoBox>
                                    <InfoBox w="28%" h="7%" bottom="45%" right="5%" extraClasses="">evtl. mitgezeigte Filme</InfoBox>
    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-row gap-4 items-center mb-6">
                        <img src="/img/intro/drive-logo.png" className="border-2 border-gray-800 brutal-shadow text-gray-800" /> 
                        <p>Alle weiteren Dokumente sind im <a href=""><b>Google Drive</b></a> Ordner: </p>
                    </div>
                    <div className="flex flex-col pl-12 gap-4 mb-4">
                        <div className="flex flex-row gap-4 items-center">
                            <img src="/img/intro/aufteilung-logo.png" width="200px" className="border-2 border-gray-800 brutal-shadow text-gray-800" /> 
                            <p>In der <a href="" className="font-bold">Aufteilung</a> findest du, für welche Filme du zuständig bist. </p>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <img src="/img/intro/trailer-logo.png" width="200px" className="border-2 border-gray-800 brutal-shadow text-gray-800" /> 
                            <p>Liste aller <a href="" className="font-bold">Trailer</a>.</p>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <img src="/img/intro/keywords-logo.png" width="200px" className="border-2 border-gray-800 brutal-shadow text-gray-800" /> 
                            <p>Liste aller <a href="" className="font-bold">Keywords</a>.</p>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <img src="/img/intro/navigator-logo.png" width="200px" className="border-2 border-gray-800 brutal-shadow text-gray-800" /> 
                            <p>Liste für <a href="" className="font-bold">Filmnavigator</a>.</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 items-baseline mb-6">
                            <p>Alle Dokumente kann man lokal speichern: </p>
                            <img src="/img/intro/datei-download.png" className="border-2 border-gray-800 brutal-shadow text-gray-800" />
                    </div>
                </div>
                <div className="bg-emerald-500 w-[350px] mx-12 min-h-[20vh]"></div>
            </div>
        </div>
    )
}
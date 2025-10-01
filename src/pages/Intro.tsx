import { Link } from "react-router";
import Badge from "../components/badge";
import { setTitle } from "../components/docTitle";
import ImgContainer from "../components/ganzwichtige/ImgContainer";
import InfoBox, { HeaderPosition } from "../components/InfoBox";
import { driveLink } from "../main";

export default function Intro(){
    setTitle("Anleitung")

    return (
        <div className="min-h-screen bg-[#fee8d1] py-12">
            <div className="grid grid-cols-[auto_350px] w-full max-w-[1600px]">
                <div className="px-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-12">Grundlegendes</h1>
                    <p className="mb-8">Die Informationen für die einzelnen Filme findet ihr im <Badge>Katalog</Badge> und im <Badge>Pocketguide</Badge>.</p>
    
                    <div className="bg-gray-800 p-8 text-neutral-200">
                        <div className="grid grid-cols-2 gap-12">
                            <div className="flex flex-col gap-8">
                                <h2 className="text-2xl font-bold">Katalog</h2>
                                <p className="">jede Filmgruppe hat eigene Datei (ein Katalog jeweils für Features, Kurzfilme, Monografie, Historiografie, Retrospektive) </p>
                                <div className="relative">
                                    <img 
                                        className="w-full"
                                        src={`${import.meta.env.BASE_URL}/img/intro/katalog-intro.png`}
                                        />
                                    <InfoBox w="56%" h="23%" top="36%" left="6%">deutscher Text</InfoBox>
                                    <InfoBox w="56%" h="33%" bottom="7%" left="6%" headerPosition={HeaderPosition.bottom}>englischer Text</InfoBox>
                                    <InfoBox w="41%" h="15%" top="43%" right="-5%" extraClasses="" headerPosition={HeaderPosition.right}>Hard Facts</InfoBox>
                                    <InfoBox w="42%" h="9%" top="62%" right="-6%" extraClasses="" headerPosition={HeaderPosition.right}>Filmo<wbr />grafie</InfoBox>
                                    <InfoBox w="29%" h="5%" bottom="13%" right="7%" extraClasses="" headerPosition={HeaderPosition.right}>Sponsor</InfoBox>
                                </div>
                            </div>
                            <div className="flex flex-col gap-8 text-end">
                                <h2 className="text-2xl font-bold">Pocketguide</h2>
                                <p className="">enthält <b>alle Filme</b> in einer Datei </p>
                                <div className="relative w-fit">
                                    <ImgContainer imgHeight="736px" imgWidth="476px" width="476px">
                                        <img 
                                            src={`${import.meta.env.BASE_URL}/img/intro/pg-intro.png`}
                                            />
                                    </ImgContainer>
                                    <InfoBox w="28%" h="7%" top="26%" left="4%" extraClasses="">evtl. Gäste</InfoBox>
                                    <InfoBox w="28%" h="8%" bottom="45%" right="5%" extraClasses="">evtl. mitgezeigte Filme</InfoBox>
    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-row gap-4 items-center mt-12 mb-6">
                        <a href={driveLink} target="_blank"><img src={`${import.meta.env.BASE_URL}/img/intro/drive-logo.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800" /> </a>
                        <p>Alle weiteren Dokumente sind im <a href={driveLink} target="_blank"><b>Google Drive</b></a> Ordner: </p>
                    </div>
                    <div className="flex flex-col pl-12 gap-4 mb-4">
                        <div className="flex flex-row gap-4 items-center">
                            <a href="https://docs.google.com/spreadsheets/d/1r9kBgJiXNbAsm9xUShVxkYaw10tNGffBPcT4nc1QC1Y/edit?usp=drive_link"><img src={`${import.meta.env.BASE_URL}/img/intro/aufteilung-logo.png`} width="200px" className="border-2 border-gray-800 brutal-shadow text-gray-800" /> </a>
                            <p>In der <a href="https://docs.google.com/spreadsheets/d/1r9kBgJiXNbAsm9xUShVxkYaw10tNGffBPcT4nc1QC1Y/edit?usp=drive_link" target="_blank" className="font-bold">Aufteilung</a> findest du, für welche Filme du zuständig bist. </p>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            {/* <a href=""> */}
                                <img src={`${import.meta.env.BASE_URL}/img/intro/trailer-logo.png`} width="200px" className="border-2 border-gray-800 brutal-shadow text-gray-800" />
                            {/* </a> */}
                            <p>Liste aller <a href="" className="font-bold">Trailer</a> (kommt im Laufe der Tage).</p>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <a href="https://docs.google.com/spreadsheets/d/1hw-fbs4ofKNaWkbsS-E5LFGMrGaTepKR/edit?usp=drive_link&ouid=110405876895249769617&rtpof=true&sd=true"><img src={`${import.meta.env.BASE_URL}/img/keywords/drive.png`} width="200px" className="border-2 border-gray-800 brutal-shadow text-gray-800" /> </a>
                            <p>Liste für <Link to={{pathname:"/filmnavigator"}} className="font-bold">Filmnavigator</Link> und <Link to={{pathname:"/keywords"}} className="font-bold">Keywords</Link>.</p>
                        </div>
                        <div className="flex flex-row gap-4 items-center mt-4">
                                <img src={`${import.meta.env.BASE_URL}/img/intro/datei-download.png`} className="border-2 border-gray-800 brutal-shadow text-gray-800" />
                                <p>Alle Dokumente kann man auch lokal speichern. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
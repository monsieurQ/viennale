import { setTitle } from "../components/docTitle";
import { Sidebar } from "../components/Sidebar";

interface Beispiele {

}

export default function Beispiele({}:Beispiele){
    setTitle("Anleitung – Beispiele")

    return (
        <div className="min-h-screen bg-[#fee8d1] py-12">
            <div className="px-12 w-full max-w-[1200px] beispiele">
                <h1 className="text-4xl font-bold text-gray-800" id="edit">Beispiele</h1>
                

                {/* FILME */}
                <section id="Filme">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-12">Filmseite</h2>
                </section>
                
                <div className="flex flex-row gap-4">
                    <a href="https://www.viennale.at/de/film/outrun" target="_blank" id="gast">mit Gast</a>
                    <a href="https://www.viennale.at/de/film/una-sombra-oscilante" target="_blank" id="gaeste">mehrere Gäste</a>     
                </div>

                <div className="flex flex-row gap-4 mt-4">
                    <a href="https://www.viennale.at/de/film/dahomey" target="_blank" id="trailer">Trailer</a>
                    <a href="https://www.viennale.at/de/film/dahomey" target="_blank" id="sponsor">Sponsor</a>
                    <a href="https://www.viennale.at/de/film/dahomey" target="_blank" id="keywords">Keywords</a>
                    <a href="https://www.viennale.at/de/film/dahomey" target="_blank" id="navigator">Filmnavigator</a>     
                </div>     

                <div className="flex flex-row gap-4 mt-4">
                    <a href="https://www.viennale.at/de/film/jelena" target="_blank">Teil eines Programms</a> 
                    <a href="https://www.viennale.at/de/film/end-2" target="_blank" id="film-zusatztexte">mehrere Zusatztexte</a>  
                </div>     

                <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-12">Programme</h2>
                <a href="https://www.viennale.at/de/screening/kurzfilmprogramm-2-outbursts" target="_blank" id="programm" className="">Kurzfilmprogramm</a>

                {/* GÄSTE */}

                <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-12">Gastseite</h2>
                <div className="mt-4"><a href="https://www.viennale.at/de/gast/richard-copans" target="_blank" id="mgaeste" className="mt-8">Gast mit mehreren Filmen und Rollen</a></div>    
                
                {/* Zusatztexte */}
                <section id="zusatztexte" className="mt-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-12">Zusatztexte</h2>
                </section>
                
                <div className="flex flex-row gap-4 mt-4 mb-4">
                    <a href="https://www.viennale.at/de/film/edge-0" target="_blank" id="zt-retro">Retrospektive</a>      
                    <a href="https://www.viennale.at/de/film/pfau-bin-ich-echt" target="_blank" id="zt-audio">Audiodeskription</a>    
                    <a href="https://www.viennale.at/de/film/dahomey" target="_blank" id="zt-opening">Eröffnungsfilm</a>
                    <a href="https://www.viennale.at/de/film/emilia-perez" target="_blank" id="zt-fruehstueck">Frühstücksfilm</a>
                </div>

                <div className="p-8 bg-[#feb109] w-fit mt-24">
                    <p>In diesen Beispielen sind noch englische Verlinkungen auf den deutschen Seiten - <b>das ist nicht mehr notwendig!!</b></p>    
                </div>

            </div>
            {/* <Sidebar
                top={{name:"Beispiele", id:""}} 
                headings={[
                    {name: "Filmseite", id:"filme", children: [
                        {name: "mit Gast", id:"gast"},
                        {name: "mehrere Gäste", id:"gaeste"},
                        {name: "mehrere Zusatztexte", id:"film-zusatztexte"},
                        {name: "Teil eines Programms", id:"programm-teil"},
                        {name: "mit Trailer", id:"trailer"},
                        {name: "mit Sponsor", id:"sponsor"},
                        {name: "mit Keywords", id:"keywords"},
                        {name: "mit Filmnavigator", id:"navigator"},
                    ]},
                    {name: "Programm", id:"programm"},
                    {name: "Gäste", id:"mgaeste"},
                    {name: "Zusatztexte", id:"zusatztexte", children: [
                        {name: "Retrospektive", id:"zt-retro"},
                        {name: "Audiodeskription", id:"zt-audio"},
                        {name: "Eröffnungsfilm", id:"zt-opening"},
                        {name: "Frühstücksfilm", id:"zt-fruehstueck"},
                    ]},
                ]} /> */}

        </div>
    )
}
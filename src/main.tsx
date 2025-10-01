import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router'
import Navigation from './components/Navigation'
import Intro from './pages/Intro'
import FilmBearbeiten from './pages/Film-Bearbeiten'
import Verlinkungen from './pages/Verlinkungen'
import Keywords from './pages/Keywords'
import Trailer from './pages/Trailer'
import Filmnavigator from './pages/Filmnavigator'
import Sponsoren from './pages/Sponsoren'
import Beispiele from './pages/Beispiele'
import { ScrollToHash } from './components/ganzwichtige/ScrollToHash'


export const links = {
  intro: {element: <Intro />},
  filmEdit: {path: "/film", element: <FilmBearbeiten />},
  links: {path: "/links", element: <Verlinkungen />},
  keywords: {path: "/keywords", element: <Keywords />}, 
  trailer: {path: "/trailer", element: <Trailer />}, 
  filmnavigator: {path: "/filmnavigator", element: <Filmnavigator />}, 
  sponsoren: {path: "/sponsoren", element: <Sponsoren />}, 
  beispiele: {path: "/beispiele", element: <Beispiele />}, 
} 

export const driveLink = "https://drive.google.com/drive/folders/1DRVOmHL2-dNBqLs17EHj5Ixpr7Fky1cg?usp=drive_link"
export const imgClasses = "border-2 border-gray-800 brutal-shadow text-gray-800"
export const fehlerlisteLink = "https://docs.google.com/document/d/1p-n-pZixO1yfjQsMrzxXjdju9PhjIO2IwrXqyeag3mM/edit?usp=sharing"

const container = document.getElementById('root')!
createRoot(container).render(
    <HashRouter>
      <Navigation />
        <main>
          <ScrollToHash/>
          <Routes>
            <Route index element={links.intro.element}  />
            <Route path={links.filmEdit.path} element={links.filmEdit.element} />
            <Route path={links.links.path} element={links.links.element} />
            <Route path={links.keywords.path} element={links.keywords.element} />
            <Route path={links.trailer.path} element={links.trailer.element} />
            <Route path={links.filmnavigator.path} element={links.filmnavigator.element} />
            <Route path={links.sponsoren.path} element={links.sponsoren.element} />
            <Route path={links.beispiele.path} element={links.beispiele.element} />
          </Routes>
        </main>
    </HashRouter>   
)

{/* <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Navigation />
        <main>
          <Routes>
            <Route index element={links.intro.element}  />
            <Route path={links.filmEdit.path} element={links.filmEdit.element} />
            <Route path={links.links.path} element={links.links.element} />
            <Route path={links.keywords.path} element={links.keywords.element} />
            <Route path={links.trailer.path} element={links.trailer.element} />
            <Route path={links.filmnavigator.path} element={links.filmnavigator.element} />
            <Route path={links.sponsoren.path} element={links.sponsoren.element} />
            <Route path={links.beispiele.path} element={links.beispiele.element} />
          </Routes>
        </main>
    </BrowserRouter> */}
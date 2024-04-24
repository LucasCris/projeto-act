import Politica from "../Pages/politica-envios/politica-envios"
import Home from "../Pages/Home/Home"
import Aplicativo from "../Pages/aplicativo/aplicativo"
import Contato from "../Pages/Contato/Contato"
import { BrowserRouter, Route,Routes } from "react-router-dom";
import { Painel } from "../Pages/Painel"
import { PainelBase } from "../Pages/PainelBase"
import { Atualizar } from "../Pages/Atualizar"

 function AppRoutes() {
    return(
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/> }/>
            <Route path="/aplicativo" element={<Aplicativo/> }/>
            <Route path="/contato" element={<Contato/> }/>
            <Route path="/politica-de-envios" element={<Politica/>}/>
            <Route path="/painel" element={<Painel />}/>
            <Route path="/adm321" element={<PainelBase />}/>
            <Route path="/atualizar/:id" element={<Atualizar />}/>
        </Routes>
    </BrowserRouter>
    </>
    )
}
export default AppRoutes
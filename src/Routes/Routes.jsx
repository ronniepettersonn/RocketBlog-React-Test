import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Categoria } from "../pages/Categoria";
import { Home } from "../pages/Home";
import { Sobre } from "../pages/Sobre";
import { Contato } from "../pages/Contato";

export function RoutesApp() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/categoria" element={<Categoria />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
        </Router>
    )
}
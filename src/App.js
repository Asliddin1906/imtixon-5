import {Routes,Route } from "react-router-dom";
import Container from "./components/container/container";
import Home from "./pages/home/home";
import NotFound from "./pages/not-found/not-found";

import "./assets/scss/main.scss"
import CardsProvider from "./contexts/cards";
import SingleCard from "./pages/single-card/single-card";


function App() {
  return (
    <CardsProvider>

    <Container>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/card/:id" element={<SingleCard/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>

    </Container>
    </CardsProvider>
    );
}

export default App;

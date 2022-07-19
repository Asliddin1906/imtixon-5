import {Routes,Route } from "react-router-dom";
import Container from "./components/container/container";
import Home from "./pages/home/home";
import NotFound from "./pages/not-found/not-found";

import "./assets/scss/main.scss"


function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>

    </Container>
    );
}

export default App;

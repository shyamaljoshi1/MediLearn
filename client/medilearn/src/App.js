// import { ProSidebarProvider } from 'react-pro-sidebar';
// import SidebarCustom from './components/sidebar';
// import SidebarMain from './components/sidebarMain';
import Home from "./pages/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Chapter1 from "./pages/ch1";
import Unit1 from "./pages/Chapter1/ch1_unit1";
import PreRequisites from "./pages/Chapter1/preRequisites";
import Description from "./pages/Chapter1/description";
// import Part1 from "./pages/Chapter1/Unit 1/ch1_unit1_part1";

import One from "./pages/Chapter1/Unit 1/Part1/one";
function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/home" element=<Home /> />
            <Route path="/" element=<Home /> />
            <Route path="/ch1" element=<Chapter1 /> />
            <Route path="/unit1" element=<Unit1 /> />
            <Route path="/pre_requisites" element=<PreRequisites /> />
            <Route path="/description" element=<Description /> />
            <Route path="/unit1/part1/one" element=<One /> />
         </Routes>
      </BrowserRouter>
   );
}

export default App;

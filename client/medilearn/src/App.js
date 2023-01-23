// import { ProSidebarProvider } from 'react-pro-sidebar';
// import SidebarCustom from './components/sidebar';
// import SidebarMain from './components/sidebarMain';
import Home from './pages/homepage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Chapter1 from './pages/ch1';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element= <Home />/>
      <Route path="/" element= <Home />/>
      <Route path="/ch1" element= <Chapter1/> />
    </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;

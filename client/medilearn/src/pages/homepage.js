import { ProSidebarProvider } from "react-pro-sidebar";
import SidebarMain from "../components/sidebarMain";
import { useNavigate } from "react-router-dom";

import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  function ch1() {
    navigate("/ch1");
  }
  return (
    <>
      <ProSidebarProvider>
        <SidebarMain />
      </ProSidebarProvider>
      <div
        className="container__Subjects"
        onClick={() => {
          ch1();
        }}
      >
        <div className="Subject__heading">
          <h1 className="heading1">Chapter 1: Skeletal Muscle Contraction</h1>
        </div>
        <div className="Subject__heading">
          <h1 className="heading1">Chapter 2: Mechanism of Respiration</h1>
        </div>
        <div className="Subject__heading">
          <h1 className="heading1">
            Chapter 3: Regulation of Arterial Blood pressure
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;

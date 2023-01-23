import { ProSidebarProvider } from 'react-pro-sidebar';
import SidebarCustom from '../components/sidebar';
// import SidebarMain from '../components/sidebarMain';
import './ch1.css'

const Chapter1=()=>{
    return(
        <>
            <ProSidebarProvider>
                <SidebarCustom/>
            </ProSidebarProvider>
            <div className="container__Subjects">
                hello
            </div>
        </>
    )
}

export default Chapter1;
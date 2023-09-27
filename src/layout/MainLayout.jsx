import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
            <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-0">
                <Navbar></Navbar>
            </div>
            <div className="max-w-7xl mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;
import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="max-w-6xl mx-auto px-5 lg:px-0">
            <div className="relative z-10">
                <Navbar></Navbar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;
import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const Navbar = () => {
    return (
        <nav className="flex items-center justify-around lg:justify-between py-5 lg:py-8 px-5 lg:px-16">
            <Logo></Logo>
            <ul className="flex justify-end gap-3 lg:gap-10 text-sm lg:text-xl">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }>
                        Donation
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }>
                        Statistics
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
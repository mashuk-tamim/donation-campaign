import { Link } from "react-router-dom";


const Logo = () => {
    return (
        <div>
            <Link to={'/'}>
                <img className="w-1/2 lg:w-3/4" src="https://i.ibb.co/tYfhXyc/Logo.png" alt="logo" />
            </Link>
        </div>
    );
};

export default Logo;
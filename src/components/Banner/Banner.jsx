import { useEffect, useState } from "react";
import Donations from "../Donations/Donations";


const Banner = () => {
    const [searchText, setSearchText] = useState('all');
    const [showSearchDonations, setShowSearchDonations] = useState(false);

    const handleSearch = (event) => {
        // Get the value from the input field using event.target.value
        const value = event.target.value;
        setSearchText(value);
    };
    const handleSearchButtonClick = () => {
        setShowSearchDonations(true);
    };

    useEffect(() => {
        console.log(searchText);

    }, [searchText, showSearchDonations])
    return (
        <div className="relative">
            <div className="relative">
                <img className="w-full" src="https://i.ibb.co/yS63pfw/clothing-donation3.jpg" alt="" />
                <div className="absolute inset-0 bg-white opacity-90 flex flex-col justify-center items-center gap-5">
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1/2 flex flex-col items-center gap-5">
                <div>
                    <p className="text-[#0B0B0B] text-3xl lg:text-4xl font-bold text-center">I Grow By Helping People In Need</p>
                </div>
                <div>
                    <input className="border-y-2 border-l-2 rounded-l-md py-1 lg:py-2 px-3 lg:px-5" type="search" value={searchText} placeholder="Search here" onChange={handleSearch} />
                    <button
                        onClick={handleSearchButtonClick}
                        className="btn rounded-r-md bg-[#FF444A] text-white py-1 lg:py-2 px-3 lg:px-5 font-semibold">Search</button>
                </div>
            </div>
            {
                showSearchDonations && <Donations searchText={searchText}></Donations>
            }
        </div>
    );
};

export default Banner;
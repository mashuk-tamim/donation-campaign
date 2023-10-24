
import PropTypes from 'prop-types';
import Donation from '../Donation/Donation';
import { useEffect, useState } from 'react';

Donations.propTypes = {
    donations: PropTypes.array.isRequired,
    searchText: PropTypes.string.isRequired
};

function Donations({ donations }) {

    const [searchText, setSearchText] = useState('');
    const [displayDonation, setDisplayDonation] = useState([])
    const [showSearchDonations, setShowSearchDonations] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [seeAll, setSeeAll] = useState(false);


    const handleSearch = (event) => {
        event.preventDefault();
        const form = event.target;
        const value = form.search.value;
        // const value = event.target.value;
        setSearchText(value);
        setShowSearchDonations(true);
        setNotFound(false)
        form.reset();
    };

    useEffect(() => {
        if (showSearchDonations) {

            if (searchText.toLocaleLowerCase() === 'food') {
                const foodDonations = donations.filter(donation => donation.category.toLowerCase() === searchText.toLocaleLowerCase());

                setDisplayDonation(foodDonations);
                setSeeAll(true)

            }
            else if (searchText.toLocaleLowerCase() === 'education') {
                const educationDonations = donations.filter(donation => donation.category.toLowerCase() === searchText.toLocaleLowerCase());

                setDisplayDonation(educationDonations);
                setSeeAll(true);
            }
            else if (searchText.toLocaleLowerCase() === 'health') {
                const healthDonations = donations.filter(donation => donation.category.toLowerCase() === searchText.toLocaleLowerCase());

                setDisplayDonation(healthDonations);
                setSeeAll(true);

            }
            else if (searchText.toLocaleLowerCase() === 'clothing') {
                const clothingDonations = donations.filter(donation => donation.category.toLocaleLowerCase() === searchText.toLocaleLowerCase());

                setDisplayDonation(clothingDonations);
                setSeeAll(true);
            }
            else {
                setDisplayDonation(donations)
                setNotFound(true);
            }
        }
        else {
            setDisplayDonation(donations);
        }

    }, [showSearchDonations, donations, searchText])

    if(notFound){
        swal("Sorry! No Category Matched", "Showing All donations!", "success");
    }

    return (
        <div className="">
            <div className="absolute top-1/4 md:top-1/4 lg:top-1/3 inset-x-0 flex flex-col items-center gap-5">
                <div>
                    <p className="text-[#0B0B0B] text-xl md:text-3xl lg:text-5xl font-bold text-center">
                        I Grow By Helping People In Need
                    </p>
                </div>
                <div>
                    <form onSubmit={handleSearch}>
                        <input
                            className="border-y-2 border-l-2 rounded-l-md py-1 lg:py-2 pl-3 lg:px-5 text-xs md:text-sm lg:text-base"
                            type="search"
                            name="search"
                            placeholder="Search here..."
                            // onChange={handleSearch}
                        />
                        <button
                            // onClick={handleSearchButtonClick}
                            className="btn rounded-r-md bg-[#FF444A] text-xs md:text-sm lg:text-base text-gray-700 py-1 lg:py-2 px-3 lg:px-5 font-semibold"
                        >
                            Search
                        </button>
                    </form>
                </div>
                {/* <div>
                    {
                        notFound ? <div><p>Category Not Matched. Showing All Donations</p></div> : <div></div>
                    }
                </div> */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5 px-5 mx-auto">
                {displayDonation?.map((donation) => (
                    <Donation key={donation.id} donation={donation}></Donation>
                ))}
            </div>
            {
                seeAll && <div className='w-screen'>
                    <button onClick={() => {
                        setDisplayDonation(donations);
                        setSeeAll(false)
                    }} className='bg-gray-600 text-white px-5 py-2 mb-10 rounded-lg mx-auto flex justify-center'>See All Donations</button>
                </div>
            }
        </div>
    );
}

export default Donations;

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

    const [notFound, setNotFound] = useState(true);


    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchText(value);
    };
    const handleSearchButtonClick = () => {
        setShowSearchDonations(true);

    };
    useEffect(() => {
        if (showSearchDonations) {

            if (searchText.toLocaleLowerCase() === 'food') {
                const foodDonations = donations.filter(donation => donation.category.toLowerCase() === searchText.toLocaleLowerCase());

                setDisplayDonation(foodDonations);
                setNotFound(false);

            }
            else if (searchText.toLocaleLowerCase() === 'education') {
                const educationDonations = donations.filter(donation => donation.category.toLowerCase() === searchText.toLocaleLowerCase());

                setDisplayDonation(educationDonations);
                setNotFound(false);
            }
            else if (searchText.toLocaleLowerCase() === 'health') {
                const healthDonations = donations.filter(donation => donation.category.toLowerCase() === searchText.toLocaleLowerCase());

                setDisplayDonation(healthDonations);
                setNotFound(false);
            }
            else if (searchText.toLocaleLowerCase() === 'clothing') {
                const clothingDonations = donations.filter(donation => donation.category.toLocaleLowerCase() === searchText.toLocaleLowerCase());

                setDisplayDonation(clothingDonations);
                setNotFound(false);
            }
            else {
                setDisplayDonation(donations)
            }
        }
        else {
            setDisplayDonation(donations)
        }

    }, [showSearchDonations, donations, searchText])

    return (
        <div className=''>
            <div className="absolute top-1/4 md:top-1/4 lg:top-1/3 inset-x-0 flex flex-col items-center gap-5">
                <div>
                    <p className="text-[#0B0B0B] text-xl md:text-3xl lg:text-4xl font-bold text-center">I Grow By Helping People In Need</p>
                </div>
                <div>
                    <input className="border-y-2 border-l-2 rounded-l-md py-1 lg:py-2 pl-3 lg:px-5" type="search" placeholder="Search here..." onChange={handleSearch} />
                    <button
                        onClick={handleSearchButtonClick}
                        className="btn rounded-r-md bg-[#FF444A] text-white py-1 lg:py-2 px-3 lg:px-5 font-semibold">Search</button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5 px-5 mx-auto'>
                {
                    displayDonation?.map(donation => <Donation
                        key={donation.id}
                        donation={donation}>
                    </Donation>)
                }
            </div>
        </div>
    );
}

export default Donations;
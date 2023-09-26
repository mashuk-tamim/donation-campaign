
import PropTypes from 'prop-types';
import Donation from '../Donation/Donation';
import { useState } from 'react';

Donations.propTypes = {
    donations: PropTypes.array.isRequired,
    searchText: PropTypes.string.isRequired,
};

function Donations({ donations, searchText }) {

    const [filteredDonations, setFilteredDonations] = useState('');

    const [displayDonation, setDisplayDonation] = useState([]);
    console.log(searchText);
    
    if(searchText === 'all'){
        setDisplayDonation(donations);
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5'>
            {
                displayDonation?.map(donation => <Donation
                    key={donation.id}
                    donation={donation}>
                </Donation>)
            }
        </div>
    );
}

export default Donations;
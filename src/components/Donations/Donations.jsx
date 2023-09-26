
import PropTypes from 'prop-types';
import Donation from '../Donation/Donation';

Donations.propTypes = {
    donations: PropTypes.array.isRequired,
};

function Donations({ donations }) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5'>
            {
                donations?.map(donation => <Donation
                    key={donation.id}
                    donation={donation}>
                </Donation>)
            }
        </div>
    );
}

export default Donations;
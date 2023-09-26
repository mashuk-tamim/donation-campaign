
import DonatedDetails from '../DonatedDetails/DonatedDetails';

const Donated = () => {

    const donations = JSON.parse(localStorage.getItem('donation'));
    console.log(donations);
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            {
                donations.map(donation => <DonatedDetails donation={donation} key={donation.id}></DonatedDetails>)
            }
        </div>
    );
};

export default Donated;

import { useEffect, useState } from 'react';
import DonatedDetails from '../DonatedDetails/DonatedDetails';

const Donated = () => {

    const [showDonation, setShowDonation] = useState(4);

    const [seeAll, setSeeAll] = useState(false);

    const [donationLength, setDonationLength] = useState(0)

    const donations = JSON.parse(localStorage.getItem('donation'));

    useEffect(() => {
        if (donations) {
            if (donations.length > 4) {
                console.log(donations.length)
                setShowDonation(showDonation);
            }
            else {
                setShowDonation(donations.length);
            }

            if (seeAll) {
                setShowDonation(donations.length)
            }
            else {
                setShowDonation(4);
            }
            setDonationLength(donations.length)
        }
        else {
            setDonationLength(donationLength);
            console.log('donation length', donationLength);
        }

    }, [showDonation, donationLength, donations, seeAll])

    return (
        <div>
            <div>
                {
                    donationLength ?
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 px-5'>
                            {
                                donations?.slice(0, showDonation)?.map(donation => <DonatedDetails donation={donation} key={donation.id}></DonatedDetails>)
                            }
                        </div>
                        :
                        <p className="text-4xl font-semibold h-[80vh] flex items-center justify-center">You have not donated yet!</p>
                }
            </div>
            <div>
                {
                    donationLength > 4 ?
                        <div className='flex justify-center'>
                            <button
                                onClick={() => { setSeeAll(!seeAll) }}
                                className='text-white bg-[#009444] text-xs md:text-base lg:text-xl font-semibold py-2 px-3 lg:px-5 rounded-md my-5'>{
                                    seeAll ? 'See less' : 'See all'
                                }</button>
                        </div>
                        :
                        <div></div>
                }
            </div>
        </div>
    );
};

export default Donated;
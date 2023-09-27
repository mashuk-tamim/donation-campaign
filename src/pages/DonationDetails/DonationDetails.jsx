import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationCards from "../DonationCards/DonationCards";


const DonationDetails = () => {

    const [donation, setDonation] = useState([]);

    const donations = useLoaderData();
    const { id } = useParams();
    // const paramsInt = parseInt(params.id);
    // console.log(id, donations);

    useEffect(() => {
        const findDonation = donations?.find(donation => donation.id == id)
        setDonation(findDonation);
        // console.log('donated', findDonation)
    }, [donations, id])

    return (
        <div className="px-6 md:px-10 lg:px-10">
            {
                <DonationCards donation={donation}></DonationCards>
            }
        </div>
    );
};

export default DonationDetails;
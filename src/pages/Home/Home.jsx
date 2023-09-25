
import { useLoaderData } from 'react-router-dom';
import Donations from '../../components/Donations/Donations';
import Banner from '../../components/Banner/Banner';

const Home = () => {
    const donations = useLoaderData();
    console.log(donations);

    return (
        <div>
            <div className='relative -top-16 md:-top-24 lg:-top-32 z-0'>
                <Banner></Banner>
            </div>
            <Donations donations={donations}></Donations>
        </div>
    );
};

export default Home;
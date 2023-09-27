import { useLoaderData } from 'react-router-dom';
import Donations from '../../components/Donations/Donations';
import Banner from '../../components/Banner/Banner';

const Home = () => {
    const donations = useLoaderData();

    return (
        <div>
            <div className='relative -top-20 md:-top-24 lg:-top-32 z-0 max-w-7xl mx-auto'>
                <Banner></Banner>
            </div>
            <div className='max-w-6xl mx-auto'>
                <Donations donations={donations}></Donations>
            </div>
        </div>
    );
};

export default Home;
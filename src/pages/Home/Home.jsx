
import { useLoaderData } from 'react-router-dom';
import Banner from '../../components/Header/Navbar/Banner/Banner';

const Home = () => {
    const donations = useLoaderData();
    console.log(donations);

    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;
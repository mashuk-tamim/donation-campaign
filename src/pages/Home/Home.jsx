
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const donations = useLoaderData();
    console.log(donations);
    return (
        <div>
            Home
        </div>
    );
};

export default Home;
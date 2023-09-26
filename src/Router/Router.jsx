import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Statistics from "../pages/Statistics/Statistics";
import Donated from "../pages/Donated/Donated";
import DonationDetails from "../pages/DonationDetails/DonationDetails";


const myCreatedRoute = createBrowserRouter ([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/donation.json')
            },
            {
                path: '/donated',
                element: <Donated></Donated>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/donations/:id',
                element: <DonationDetails></DonationDetails>,
                loader: () => fetch('/donation.json')
            }
        ]
    }
])
export default myCreatedRoute;
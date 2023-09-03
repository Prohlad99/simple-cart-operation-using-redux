import { createBrowserRouter } from 'react-router-dom';
import Main from '../components/home/Main';
import Products from '../pages/products/Products';
import Navbar from './../components/home/Navbar';
import NotFound from './../pages/notFound/NotFound';
import OrderReview from './../pages/order-review/OrderReview.jsx';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar/>,

        children:[
            {
                path:"/",
                element: <Main/>
            },
            {
                path:"/products",
                element: <Products/>
            },
            {
                path:"/order-review",
                element: <OrderReview/>
            },
            {
                path:"/inventory",
                element: <NotFound/>
            },
            {
                path: "*",
                element: <NotFound/>
            }
        ]
    }
])
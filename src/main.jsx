import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { store } from './app/store'
import Main from './components/home/Main'
import './index.css'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import Home from './pages/home/Home.jsx'
import NotFound from './pages/notFound/NotFound.jsx'
import OrderReview from './pages/order-review/OrderReview.jsx'
import Products from './pages/products/Products.jsx'


const router = createBrowserRouter([
  {
      path: "/",
      element: <Home/>,

      children:[
          {
              path:"/",
              element: <Main/>
          },
          {
              path:"products",
              element: <Products/>
          },
          {
              path:"order-review",
              element: <OrderReview/>
          },
          {
              path:"inventory",
              element: <NotFound/>
          },
          {
            path: "/login",
            element: <Login/>
          },

          {
            path:"/register",
            element: <SignUp/>
          },

          {
              path: "*",
              element: <NotFound/>
          }
      ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Layout from "./Components/Layout/Layout";
import { Toaster } from "react-hot-toast";
import WriteEmail from "./Pages/WriteEmail/WriteEmail";
import ReciveCode from "./Pages/ReciveCode/ReciveCode";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes";
import GardRouteForLogin from "./Components/GardRouteForLogin/GardRouteForLogin";
import TokenProvider from "./Components/Context/Token.Context";
import CartProvider from "./Components/Context/Cart.context";
import Cart from "./Pages/Cart/Cart";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Checkout from "./Pages/Checkout/checkout";
import Ordars from "./Pages/Ordars/ALLOrdars";
import Brands from "./Pages/Brands/Brands";
// import checkout from "./Pages/Checkout/Checkout";

const routes = createBrowserRouter([
  {
    path: "",
    element: (
      <ProtectedRoutes>
        <Layout></Layout>
      </ProtectedRoutes>
    ),
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "Product/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "allorders",
        element: <Ordars></Ordars>,
      },
      {
        path: "Brands",
        element: <Brands></Brands>,
      },
    ],
  },
  {
    path: "",
    element: (
      <GardRouteForLogin>
        <Layout></Layout>
      </GardRouteForLogin>
    ),
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "WriteEmail",
        element: <WriteEmail></WriteEmail>,
      },
      {
        path: "Recivecode",
        element: <ReciveCode></ReciveCode>,
      },
      {
        path: "ResetPassword",
        element: <ResetPassword></ResetPassword>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <TokenProvider>
        <CartProvider>
          <RouterProvider router={routes}></RouterProvider>
          <Toaster></Toaster>
        </CartProvider>
      </TokenProvider>
    </>
  );
}

export default App;

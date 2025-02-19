import HomePage from "../auth/HomePage";
import Login from "../login/Login";
// import SellerSignUp from "../signUp/sellerSignUp";
// import SellerLogin from "../login/sellerLogin";
import SignUp from "../signUp/SignUp";
import Product from "../auth/product_dashboard"

const route = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/SignUp",
    element: <SignUp/>
  },
  // {
  //   path: "/sellerSignUp",
  //   element: <SellerSignUp />,
  // },
  // {
  //   path: "/sellerLogin",
  //   element: <SellerLogin/>
  // },
  {
    path: "/product_dashboard",
    element: <Product/>
  }
];

export default route;
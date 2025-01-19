import HomePage from "../auth/HomePage";
import BuyerLogin from "../login/buyerLogin";
import SellerSignUp from "../signUp/sellerSignUp";
import SellerLogin from "../login/sellerLogin";
import BuyerSignUp from "../signUp/buyerSignUp";
import Product from "../auth/productForm"

const route = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/buyerLogin",
    element: <BuyerLogin />,
  },
  {
    path: "/buyerSignUp",
    element: <BuyerSignUp/>
  },
  {
    path: "/sellerSignUp",
    element: <SellerSignUp />,
  },
  {
    path: "/sellerLogin",
    element: <SellerLogin/>
  },
  {
    path: "/product",
    element: <Product/>
  }
];

export default route;
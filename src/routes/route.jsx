import HomePage from "../auth/homePage"
import Login from "../login/login";
import SignUp from "../signUp/signUp.jsx";

const route = [
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/signUp",
        element: <SignUp/>
    }

];

export default route;
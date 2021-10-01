import {HOME_PAGE, LOGIN_PAGE, MAN, REGISTRATION_PAGE} from "./urls";
import {Header} from "../Components/Header/Header";
import Login from "../Components/Login/Login";
import Registation from "../Components/Registation/Registation";
import ProductContainer from "../Components/Product/ProductContainer";
import Hello from "../Components/Hello/Hello";


export const isAuthRoutes = [
    {
        id: 1,
        path: HOME_PAGE,
        name: 'Home'
    },
    {
        component:ProductContainer,
        id:2,
        path: MAN,
        name: 'Man'
    },
    ]
export const notAuthRoutes = [

    {
        component: Login,
        id: 3,
        path: LOGIN_PAGE,
        name: 'Login'
    }, {
        component: Registation,
        id: 4,
        path: REGISTRATION_PAGE,
        name: 'Registration'
    }

]

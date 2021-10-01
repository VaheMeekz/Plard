import "./App.css";
import {HeaderContaner} from "./Components/Header/HeaderContaner";
import ProductContainer from "./Components/Product/ProductContainer";
import {Route} from "react-router-dom";
import Content from "./Components/Content/Content";
import Routes from "./Components/Routes/Routes";
import {LOGIN_PAGE, REGISTRATION_PAGE} from "./utils/urls";
import Login from "./Components/Login/Login";
import Registation from "./Components/Registation/Registation";


function App() {
    return (
        <subCategoryContextProvider>
            <div className="App">
                <HeaderContaner/>
                <ProductContainer/>
                <Route path={LOGIN_PAGE}>
                    <Login/>
                </Route>
                <Route path={REGISTRATION_PAGE}>
                    <Registation/>
                </Route>
                <main className={'main'}>
                    <Content/>
                </main>
            </div>
        </subCategoryContextProvider>

    );
}

export default App;

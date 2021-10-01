import "./App.css";
import {HeaderContaner} from "./Components/Header/HeaderContaner";
import ProductContainer from "./Components/Product/ProductContainer";
import Routes from "./Components/Routes/Routes";
import Content from "./Components/Content/Content";


function App() {
    return (
        <div className="App">
            <HeaderContaner/>
            <ProductContainer/>
            <Routes/>
            <main className={'main'}>
                <Content/>
            </main>
        </div>
    );
}

export default App;

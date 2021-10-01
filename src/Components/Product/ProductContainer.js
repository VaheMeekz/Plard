import "./product.css";
import {Product} from "./product";
import {useState} from "react";
import srgi from "../../Svg/srgi.png";
import kolco from "../../Redux/kolco.png";

let ProductContainer = (props) => {
    const exav = () => {
    };

    const [category, setcategory] = useState([
        {
            id: 1,
            img: kolco,
            name: "кольцo ",
            data: [{text: "серьги "},
                {text: "серьги 2 "}
            ],
        },
    ]);

    const [category2, setcategory2] = useState([
        {
            id: 2,
            img: srgi,
            name: "серьги ",
            data: [
                {text: "кольцo"},
                {text: "кольца кастеты"},
                {text: "кольца кастеты 2 "},
            ],
        },
    ]);

    let [newcategory, setnewcategory] = useState("");
    let [img, setImg] = useState(null);
    let [newcategory2, setnewcategory2] = useState("");
    let [img2, setImg2] = useState(null);
    let [addclass, setaddclass] = useState(false);
    let [addclass2, setaddclass2] = useState(false);
    let [subcategory, setsubcategory] = useState([]);
    let [subcategorytext, setsubcategorytext] = useState("");
    let [newsubcategorytext, newsetsubcategorytext] = useState([]);
    let [cl, setcl] = useState(false);
    let [cl2, setcl2] = useState(false);
    const [state, setstate] = useState([]);
    const [state2, setstate2] = useState([]);
    let nam = null;
    const nam2 = null;

    let add = () => {
        setaddclass(true);
    };

    let close = () => {
        setaddclass(false);
    };

    let onChText = (e) => {
        setnewcategory(e.target.value);
    };
    let onChText2 = (e) => {
        setnewcategory2(e.target.value);
    };

    return (
        <Product
            {...props}
            exav={exav}
            cl={cl}
            cl2={cl2}
            setcl={setcl}
            setcl2={setcl2}
            nae={nam}
            nam2={nam2}
            state={state}
            setstate={setstate}
            state2={state2}
            setstate2={setstate2}
            addclass={addclass}
            add={add}
            close={close}
            setnewcategory={setnewcategory}
            newcategory={newcategory}
            setnewcategory2={setnewcategory2}
            newcategory2={newcategory2}
            category={category}
            setcategory={setcategory}
            category2={category2}
            setcategory2={setcategory2}
            onChText={onChText}
            onChText2={onChText2}
            setImg={setImg}
            img={img}
            setImg2={setImg2}
            img2={img2}
            addclass2={addclass2}
            setaddclass2={setaddclass2}
            subcategory={subcategory}
            setsubcategory={setsubcategory}
            subcategorytext={subcategorytext}
            newsubcategorytext={newsubcategorytext}
            setsubcategorytext={setsubcategorytext}
            newsetsubcategorytext={newsetsubcategorytext}
        />
    );
};

// let mapStateToProps = (state) => {
//   return { category: state.productR.category };
// };
//
// let mapDispatchToProps = {
//   addCategory,
// };

export default ProductContainer;

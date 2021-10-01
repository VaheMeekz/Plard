import "./product.css";
import { Product } from "./product";
import { connect } from "react-redux";
import { addCategory } from "../../Redux/productReducer";
import { useState } from "react";

let ProductContainer = (props) => {
  let [newcategory, setnewcategory] = useState("");
  let [img, setImg] = useState(null);
  let [addclass, setaddclass] = useState(false);
  let [addclass2, setaddclass2] = useState(false);
  let [subcategory, setsubcategory] = useState([]);
  let [subcategorytext, setsubcategorytext] = useState("");
  let [newsubcategorytext, newsetsubcategorytext] = useState([]);

  let add = () => {
    setaddclass(true);
  };

  let close = () => {
    setaddclass(false);
  };

  let addboxCategory = () => {
    if (newcategory !== "") {
      const newC = {
        id: Math.random(),
        name: newcategory,
        img: img,
      };
      props.addCategory(newC);
      setnewcategory("");
      setImg(null);
    }
  };

  let onChText = (e) => {
    setnewcategory(e.target.value);
  };

  return (
    <Product
      {...props}
      addclass={addclass}
      add={add}
      close={close}
      addboxCategory={addboxCategory}
      onChText={onChText}
      setImg={setImg}
      img={img}
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

let mapStateToProps = (state) => {
  return { category: state.productR.category };
};

let mapDispatchToProps = {
  addCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);

import "./product.css";
import {AddCategory} from "./Comp-Category/addCategory";
import {BoxCategory} from "./Comp-Category/boxCategory";
import {ProductSvg} from "./Comp-Category/productSvg";
import {SubCategory} from "./Comp-Category/SubCategory";
import {BgCategory} from "./Comp-Category/Bg-Category";
import {AddProduct} from "./Comp-Product/AddProduct";

export const Product = (props) => {
    return (
        <>
            <section className="women-product">
                <div className="bg-product">{}</div>
                <BgCategory {...props} />
                <div className="category">
                    <ProductSvg/>
                    <BoxCategory {...props} />
                    <AddCategory {...props} />
                </div>
                <SubCategory {...props} />
                <AddProduct/>
            </section>
        </>
    );
};

import "./product.css";
import { AddCategory } from "./Comp-Category/addCategory";
import { AddCategory2 } from "./Comp-Category/addCategory2";
import { BoxCategory } from "./Comp-Category/boxCategory";
import { ProductSvg } from "./Comp-Category/productSvg";
import { SubCategory } from "./Comp-Category/SubCategory";
import { BgCategory } from "./Comp-Category/Bg-Category";

export const Product = (props) => {
  console.log(props.state2);
  return (
    <>
      <section className="women-product">
        <div className="bg-product">{}</div>
        <BgCategory {...props} />
        <div className="category">
          <ProductSvg {...props} />
          <BoxCategory {...props} />
          <AddCategory {...props} />
          <AddCategory2 {...props} />
        </div>
        <SubCategory {...props} />

        {/*<AddProduct2 {...props} />*/}
      </section>
    </>
  );
};

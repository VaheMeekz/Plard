import stateSvg from "../../../Svg/Svg";
import { NavLink } from "react-router-dom";
import {useState} from "react";
import wooman from "../../../Svg/wooman.png"
import man from "../../../Svg/Vector.svg"

export const ProductSvg = (props) => {

    const [checkW, setCheckW] = useState("#D9606D");
    const [check, setCheck] = useState("white");

    const checkedW = () => {
        setCheckW("#D9606D");
        setCheck("white");
    };
    const checked = () => {
        setCheckW("white");
        setCheck("red");
    };

  return (
    <div className="productSvg">
      <NavLink
        activeClassName="home"
        exact
        to="/"
        onClick={() => {
          props.setstate2(props.category.filter((s) => s.id !== 2));
          props.setcl(false);
          props.setcl2(true);
          props.setstate(props.state2);
          props.exav();
        }}
      >
          <div className="productImg"
               style={{ borderColor: checkW }}
               onClick={checkedW}
          >
              <img src={wooman}/>
          </div>
      </NavLink>
      <NavLink
        activeClassName="home"
        to="/man"
        onClick={() => {
          props.setstate2(props.category2.filter((s) => s.id !== 1));
          props.setcl(true);
          props.setcl2(false);
          props.setstate(props.state2);
          props.exav();
        }}
      >
          <div className="productImg"
               style={{ borderColor: check }}
               onClick={checked}>
              <img src={man}/>
          </div>
      </NavLink>
    </div>
  );
};
// import stateSvg from "../../../Svg/Svg";
//
// export const ProductSvg = (props) => {
//     return (
//         <div className="productSvg">
//             <p
//                 activeClassName="home"
//                 onClick={() => {
//                     props.setstate2([props.category.filter((s) => s.id !== 2)]);
//                 }}
//             >
//                 {stateSvg.Svg1}
//             </p>
//             <p
//                 activeClassName="home"
//                 onClick={() => {
//                     props.setstate2([props.category2.filter((s) => s.id !== 1)]);
//                 }}
//             >
//                 {stateSvg.Svg2}
//             </p>
//         </div>
//     );
// };

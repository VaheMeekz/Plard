import React from "react";
import stateSvg from "../../../Svg/Svg";
import man from "../../../Svg/Vector.svg"
import wooman from "../../../Svg/wooman.png"
import {useState} from "react";
import css from "./SubCategory.css"
import {NavLink} from "react-router-dom";
import {MAN, WOOMAN} from "../../../utils/urls";

export const ProductSvg = () => {

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

            <NavLink to={'/'}>
                <div className="productImg"
                     style={{ borderColor: checkW }}
                     onClick={checkedW}
                >
                        <img src={wooman}/>
                </div>
            </NavLink>
            <NavLink to={MAN}>
                <div className="productImg"
                     style={{ borderColor: check }}
                     onClick={checked}>
                    <img src={man}/>
                </div>
            </NavLink>
        </div>
    )
        ;
};

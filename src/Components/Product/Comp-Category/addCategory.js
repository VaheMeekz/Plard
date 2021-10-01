import "./addCategory.css";
import stateSvg from "../../../Svg/Svg";
import man from "../../../Svg/Vector.svg"
import {NavLink} from "react-router-dom";
import {MAN, WOOMAN} from "../../../utils/urls";

export const AddCategory = (props) => {
    return (
        <div className="addCategory">
            <p
                onClick={() => {
                    props.add();
                    props.setaddclass2(false);
                }}
            >
                <b>
                    {" "}
                    <i className="fas fa-plus"></i>
                </b>
            </p>
            <div
                className={`${props.addclass ? "windowAddCategory" : "Close-window"} `}
            >
                <div className="settingWindowCategory">
                    <h3>
                        <b>Добавить категория</b>
                    </h3>
                    <div className="productSvg2">
                        <NavLink to={'/'} >
                            <p>
                                {stateSvg.Svg1}
                                <span> женский </span>
                            </p>
                        </NavLink>
                        <NavLink to={MAN}  exact>
                            <p>
                                <img src={man}/>
                                <span>мужской</span>
                            </p>
                        </NavLink>
                    </div>
                    <input
                        type="text"
                        className="text"
                        placeholder="Категория"
                        value={props.newcategory}
                        onChange={props.onChText}
                    />
                    <div className="item-file">
                        <input
                            type="file"
                            onChange={(e) => {
                                props.setImg(URL.createObjectURL(e.target.files[0]));
                            }}
                        />
                        <p>{stateSvg.Svg3}</p>
                        <img src={props.img}/>
                        <span>
              загрузить
              <br/>
              фото
            </span>
                    </div>
                    <button
                        onClick={() => {
                            props.addboxCategory();
                            if (props.newcategory !== "") {
                                props.close();
                            }
                        }}
                    >
                        <b> добавить</b>
                    </button>
                    <p className="Ctg-Close" onClick={props.close}>
                        <i className="fas fa-times"></i>
                    </p>
                </div>
            </div>
        </div>
    );
};

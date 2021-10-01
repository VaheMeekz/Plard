import "./addCategory.css";
import stateSvg from "../../../Svg/Svg";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import man from "../../../Svg/Vector.svg"

export const AddCategory2 = (props) => {
  const adds = () => {
    if (props.newcategory2 !== "") {
      props.setcategory2([
        ...props.category2,
        {
          img: props.img2,
          name: props.newcategory2,
          data: [],
        },
      ]);
      props.setImg2(null);
    }
  };

  useEffect(() => {
    props.setstate2(props.category2.filter((s) => s.id !== 1));
  }, [props.category2]);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      props.setImg2(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className={`${props.cl ? "addCategory" : "addCategorynone"}`}>
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
            <NavLink
              activeClassName="home"
              exact
              to="/"
              onClick={() => {
                props.setstate2(props.category.filter((s) => s.id !== 2));
                props.setcl(false);
                props.setcl2(true);
                props.setaddclass2(false);
              }}
            >
              {stateSvg.Svg1}
              <span> женский </span>
            </NavLink>
            <NavLink
              activeClassName="home"
              to="/man"
              onClick={() => {
                props.setstate2(props.category2.filter((s) => s.id !== 1));
                props.setcl(true);
                props.setcl2(false);
                props.setaddclass2(false);
              }}
            >
                <img src={man}/>
              <span>мужской</span>
            </NavLink>
          </div>
          <input
            type="text"
            className="text"
            placeholder="Категория"
            value={props.newcategory2}
            onChange={props.onChText2}
          />
          <div className="item-file">
            <input
              type="file"
              onChange={(event) => {
                onImageChange(event);
              }}
            />
            <p>{stateSvg.Svg3}</p>
            <img src={props.img2} />
            <p
              className="ii"
              onClick={() => {
                props.setImg2(null);
              }}
            >
             `
            </p>
            <span>
              загрузить
              <br />
              фото
            </span>
          </div>
          <button
            onClick={() => {
              adds();
              props.setnewcategory2("");
              if (props.newcategory2 !== "") {
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

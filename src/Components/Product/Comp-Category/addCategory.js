import "./addCategory.css";
import stateSvg from "../../../Svg/Svg";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import man from "../../../Svg/Vector.svg"

export const AddCategory = (props) => {
  const adds = () => {
    if (props.newcategory !== "") {
      props.setcategory([
        ...props.category,
        {
          img: props.img,
          name: props.newcategory,
          data: [],
        },
      ]);
      props.setImg(null);
    }
  };

  useEffect(() => {
    props.setstate2(props.category.filter((s) => s.id !== 2));
  }, [props.category]);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      props.setImg(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className={`${props.cl2 ? "addCategory" : "addCategorynone"}`}>
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
            value={props.newcategory}
            onChange={props.onChText}
          />
          <div className="item-file">
            <input
              type="file"
              onChange={(event) => {
                onImageChange(event);
              }}
            />
            <p>{stateSvg.Svg3}</p>
            <img src={props.img} />
            {/*<p*/}
            {/*  className="ii"*/}
            {/*  onClick={() => {*/}
            {/*    props.setImg(null);*/}
            {/*  }}*/}
            {/*>*/}
            {/*  /!*<i className="far fa-times-circle"></i>*!/*/}
            {/*</p>*/}
            <span>
              загрузить
              <br />
              фото
            </span>
          </div>
          <button
            onClick={() => {
              adds();
              props.add();
              props.setnewcategory("");
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

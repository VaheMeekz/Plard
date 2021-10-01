import "./Header.css";
import Logo from "../../Logo-Image/Logo.png";
import logoutImg from "../../Svg/box-arrow-in-right (1).svg"
import {NavLink, useHistory} from "react-router-dom";
import {LOGIN_PAGE} from "../../utils/urls";

export const Header = () => {


  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('token')

    if (!localStorage.getItem('token')) {
      history.push(LOGIN_PAGE)
      window.location.reload()
    }
  }
  return (
    <header>
      <div className="hed-item">
        <p className="hed-item-p1">
          <img src={Logo} alt="" />
        </p>
        <div className="hed-item-search">
          <input type="search" placeholder="Поиск" />
          <span>
            <i className="fas fa-search"></i>
          </span>
        </div>
        <p className="hed-item-p2">
          {!localStorage.getItem('token') &&  <NavLink className={"loginBtn"} to={LOGIN_PAGE}><b>Вход</b></NavLink> }
          {localStorage.getItem('token') && <b className={"loginBtn"} onClick={logout}> <b>выход</b><span  className={"logoutBtn"}><img src={logoutImg}/></span></b>}        </p>
      </div>
    </header>
  );
};

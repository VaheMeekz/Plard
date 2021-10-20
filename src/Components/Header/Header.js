import "./Header.css";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ItemReducer} from "../../Redux/Reducers/Item.reducer";
import {nameAC} from "../../Redux/Actions/item.actions";

const Header = (props) => {

    const [value, setValue] = useState('')

    const name = useSelector(state => state.ItemReducer.name)
    const dispatch = useDispatch();

    const setName = (e) => {
        setValue(e.target.value)
    }

    useEffect(()=>{
        dispatch(nameAC(value))
    },[value])

    return (
        <header>
            <div className="hed-item">
                <div className="hed-item-search">
                    <input type="search" placeholder="Поиск" value={value}
                           onChange={setName}/>
                </div>
            </div>
        </header>
    );
};

export default Header;



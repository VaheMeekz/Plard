import React, {useState} from 'react';
import css from './Content.module.css'
import Category from "./Category/Category";
import Item from "./AddItem/Item/Item";
import FilterBox from "../Filter/FilterBox";
import {useSelector} from "react-redux";


const Content = () => {

    const ItemW = useSelector(state => state.ItemReducer.ItemW)
    const ItemM = useSelector(state => state.ItemReducer.ItemM)
    const filprice = useSelector(state => state.ItemReducer.price)
    const filweight = useSelector(state => state.ItemReducer.weight)

    const [stateW,setStateW] = useState(ItemW)
    const [filpriceArr,setFilprice] = useState(filprice)
    const [filweightArr,setFilweight] = useState(filweight)


    const [num,setNum] = useState(ItemW)
    const [numM,setNumM] = useState(ItemM)

    console.log(num, 'num')
    return (

        <div className={css.contentBox}>
            <div className={css.content}>
                <Category setStateW={setStateW} num={num} setNum={setNum} numM={numM} setNumM={setNumM}
                          filpriceArr={filpriceArr} setFilprice={setFilprice} filweightArr={filweightArr} setFilweight={setFilweight}/>
                <Item num={num} numM={numM} filpriceArr={filpriceArr} setFilprice={setFilprice} filweightArr={filweightArr} setFilweight={setFilweight}/>
                <FilterBox/>
            </div>
        </div>
    );
};

export default Content;